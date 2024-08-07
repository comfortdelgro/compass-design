const { marked } = require('marked')
const textToHash = require('./textToHash')
const prism = require('./prism')

const markedOptions = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  headerPrefix: false,
  headerIds: false,
  mangle: false,
};

const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/
const titleRegExp = /# (.*)[\r\n]/
const descriptionRegExp = /<p class="description(.*?)">(.*?)<\/p>/s
const headerKeyValueRegExp = /(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g
const backgroundColorExp = /{{"backgroundColor":(.*?)}}/s
const backgroundImageExp = /{{"backgroundImage":(.*?)}}/s
const textColorExp = /{{"textColor":(.*?)}}/s
const imgSrcExp = /{{"imgSrc":(.*?)}}/s
const emptyRegExp = /^\s*$/

/**
 * Same as https://github.com/markedjs/marked/blob/master/src/helpers.js
 * Need to duplicate because `marked` does not export `escape` function
 */
const escapeTest = /[&<>"']/
const escapeReplace = /[&<>"']/g
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}
const getEscapeReplacement = (ch) => escapeReplacements[ch]
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement)
    }
  } else if (escapeTestNoEncode.test(html)) {
    return html.replace(escapeReplaceNoEncode, getEscapeReplacement)
  }

  return html
}

/**
 * Extract information from the top of the markdown.
 * For instance, the following input:
 *
 * ---
 * title: Backdrop React Component
 * components: Backdrop
 * ---
 *
 * # Backdrop
 *
 * should output:
 * { title: 'Backdrop React Component', components: ['Backdrop'] }
 */
function getHeaders(markdown) {
  let header = markdown.match(headerRegExp)

  if (!header) {
    return {
      components: [],
    }
  }

  header = header[1]

  try {
    let regexMatches
    const headers = {}

    // eslint-disable-next-line no-cond-assign
    while ((regexMatches = headerKeyValueRegExp.exec(header)) !== null) {
      const key = regexMatches[1]
      let value = regexMatches[2].replace(/(.*)/, '$1')
      if (value[0] === '[') {
        // Need double quotes to JSON parse.
        value = value.replace(/'/g, '"')
        // Remove the comma after the last value e.g. ["foo", "bar",] -> ["foo", "bar"].
        value = value.replace(/,\s+\]$/g, ']')
        headers[key] = JSON.parse(value)
      } else {
        // Remove trailing single quote yml escaping.
        headers[key] = value.replace(/^'|'$/g, '')
      }
    }

    if (headers.components) {
      headers.components = headers.components
        .split(',')
        .map((x) => x.trim())
        .sort()
    } else {
      headers.components = []
    }

    if (headers.hooks) {
      headers.hooks = headers.hooks
        .split(',')
        .map((x) => x.trim())
        .sort()
    } else {
      headers.hooks = []
    }

    return headers
  } catch (err) {
    throw new Error(
      `docs-infra: ${err.message} in getHeader(markdown) with markdown: \n\n${header}\n`,
    )
  }
}

function getContents(markdown) {
  const rep = markdown
    .replace(headerRegExp, '') // Remove header information
    .split(/^{{("(?:demo|component)":.*)}}$/gm) // Split markdown into an array, separating demos
    .flatMap((text) => text.split(/^(<codeblock.*?<\/codeblock>)$/gmsu))
    .filter((content) => !emptyRegExp.test(content)) // Remove empty lines
  return rep
}

function getTitle(markdown) {
  const matches = markdown.match(titleRegExp)

  if (matches === null) {
    return ''
  }

  return matches[1].replace(/`/g, '')
}

function getDescription(markdown) {
  const matches = markdown.match(descriptionRegExp)
  if (matches === null) {
    return undefined
  }

  return matches[2].trim().replace(/`/g, '')
}

function getBackgroundColor(markdown) {
  const matches = markdown.match(backgroundColorExp)
  if (matches === null) {
    return undefined
  }
  return matches[1].trim().replace(/`/g, '')
}

function getTextColor(markdown) {
  const matches = markdown.match(textColorExp)
  if (matches === null) {
    return undefined
  }
  return matches[1].trim().replace(/`/g, '')
}

function getBackgroundImage(markdown) {
  const matches = markdown.match(backgroundImageExp)
  if (matches === null) {
    return undefined
  }
  return matches[1].trim().replace(/`/g, '')
}

function getImageSource(markdown) {
  const matches = markdown.match(imgSrcExp)
  if (matches === null) {
    return undefined
  }
  return matches[1].trim().replace(/`/g, '')
}

/**
 * @param {string} markdown
 */
function renderInline(markdown) {
  return marked.parseInline(markdown)
}

/**
 * Creates a function that MUST be used to render non-inline markdown.
 * It keeps track of a table of contents and hashes of its items.
 * This is important to create anchors that are invariant between languages.
 *
 * @typedef {object} TableOfContentsEntry
 * @property {TableOfContentsEntry[]} children
 * @property {string} hash
 * @property {number} level
 * @property {string} text
 * @param {object} context
 * @param {Record<string, string>} context.headingHashes - WILL BE MUTATED
 * @param {TableOfContentsEntry[]} context.toc - WILL BE MUTATED
 */
function createRender(context) {
  const { headingHashes, toc } = context

  /**
   * @param {string} markdown
   */
  function render(markdown) {
    const renderer = new marked.Renderer()
    renderer.heading = function heading({ tokens, depth: level }) {
      const headingHtml = this.parser.parseInline(tokens);
      // Main title, no need for an anchor.
      // It adds noises to the URL.
      //
      // Small title, no need for an anchor.
      // It reduces the risk of duplicated id and it's fewer elements in the DOM.
      if (level === 1 || level >= 4) {
        return `<h${level}>${headingHtml}</h${level}>`
      }

      // Remove links to avoid nested links in the TOCs
      let headingText = headingHtml.replace(/<a\b[^>]*>/gi, '').replace(/<\/a>/gi, '');
      // Remove `code` tags
      headingText = headingText.replace(/<code\b[^>]*>/gi, '').replace(/<\/code>/gi, '');

      // Standardizes the hash from the default location (en) to different locations
      // Need english.md file parsed first
      const hash = textToHash(headingText, headingHashes)

      // enable splitting of long words from function name + first arg name
      // Closing parens are less interesting since this would only allow breaking one character earlier.
      // Applying the same mechanism would also allow breaking of non-function signatures like "Community help (free)".
      // To detect that we enabled breaking of open/closing parens we'd need a context-sensitive parser.
      const displayText = headingText.replace(/([^\s]\()/g, '$1&#8203;')

      // create a nested structure with 2 levels starting with level 2 e.g.
      // [{...level2, children: [level3, level3, level3]}, level2]
      if (level === 2) {
        toc.push({
          text: displayText,
          level,
          hash,
          children: [],
        })
      } else if (level === 3) {
        if (!toc[toc.length - 1]) {
          throw new Error(
            `docs-infra: Missing parent level for: ${headingText}\n`,
          )
        }

        toc[toc.length - 1].children.push({
          text: displayText,
          level,
          hash,
        })
      }

      return [
        `<h${level} id="${hash}">`,
        headingHtml,
        `<a aria-labelledby="${hash}" class="anchor-link" href="#${hash}" tabindex="-1">`,
        '<svg><use xlink:href="#anchor-link-icon" /></svg>',
        '</a>',
        `</h${level}>`,
      ].join('')
    }

    renderer.link = function link({ href, title, tokens }) {
      const linkText = this.parser.parseInline(tokens);
      let more = '';

      if (title) {
        more += ` title="${title}"`;
      }

      if (href.startsWith('http')) {
        more = ' target="_blank" rel="noopener nofollow"';
      }

      let finalHref = href;
      return `<a href="${finalHref}"${more}>${linkText}</a>`;
    }

    renderer.image = (href, title, alt) => {
      return `<img src="${href}" alt="${title || alt}"/>`
    }

    renderer.code = ({ lang, text, escaped }) => {
      const langString = (lang || '').match(/\S*/)[0];
      const out = prism(text, langString);
      if (out != null && out !== text) {
        escaped = true;
        text = out;
      }

      const code = `${text.replace(/\n$/, '')}\n`;

      if (!lang) {
        return `<pre><code>${escaped ? code : escape(code, true)}</code></pre>\n`;
      }

      return `<div class="cdg-root"><pre><code class="language-${escape(
        lang,
        true,
      )}">${escaped ? code : escape(code, true)}</code></pre>${[
        '<button aria-label="Copy the code" class="cdg-copy">',
        '<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">',
        '<use class="cdg-copy-icon" xlink:href="#copy-icon" />',
        '<use class="cdg-copied-icon" xlink:href="#copied-icon" />',
        '</svg>',
        '<span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',
      ].join('')}\n`
    }

    marked.use({
      extensions: [
        {
          name: 'callout',
          level: 'block',
          start(src) {
            const match = src.match(/:::/)
            return match ? match.index : undefined
          },
          tokenizer(src) {
            const rule =
              /^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/
            const match = rule.exec(src)
            if (match) {
              const token = {
                type: 'callout',
                raw: match[0],
                text: match[3].trim(),
                severity: match[2],
                tokens: [],
              }
              this.lexer.blockTokens(token.text, token.tokens)
              return token
            }
            return undefined
          },
          renderer(token) {
            return `<aside class="CdgCallout-root CdgCallout-${token.severity
              }">${this.parser.parse(token.tokens)}\n</aside>`
          },
        },
      ],
    })

    return marked(markdown, { ...markedOptions, renderer });
  }

  return render
}

function prepareMarkdown(config) {
  const { fileRelativeContext, translations } = config

  const demos = {}
  let docs = {}
  const headingHashes = {}

  translations
    .forEach((translation) => {
      const { filename, markdown } = translation
      const headers = getHeaders(markdown)
      const location = headers.filename || `/${fileRelativeContext}/${filename}`
      const title = headers.title || getTitle(markdown)
      const description = headers.description || getDescription(markdown)
      const backgroundColor =
        headers.backgroundColor || getBackgroundColor(markdown)
      const textColor = headers.textColor || getTextColor(markdown)
      const backgroundImage =
        headers.backgroundImage || getBackgroundImage(markdown)
      const imgSrc = headers.imgSrc || getImageSource(markdown)

      if (title == null || title === '') {
        throw new Error(`compass-docs: Missing title in the page: ${location}\n`)
      }

      if (title.length > 70) {
        throw new Error(
          [
            `compass-docs: The title "${title}" is too long (${title.length} characters).`,
            'It needs to have fewer than 70 characters—ideally less than 60. For more details, see:',
            'https://developers.google.com/search/docs/advanced/appearance/title-link',
            '',
          ].join('\n'),
        )
      }

      if (description == null || description === '') {
        throw new Error(
          `docs-infra: Missing description in the page: ${location}\n`,
        )
      }

      if (description.length > 170) {
        throw new Error(
          [
            `compass-docs: The description "${description}" is too long (${description.length} characters).`,
            'It needs to have fewer than 170 characters—ideally less than 160. For more details, see:',
            'https://ahrefs.com/blog/meta-description/#4-be-concise',
            '',
          ].join('\n'),
        )
      }

      const contents = getContents(markdown)

      if (headers.unstyled) {
        contents.push(`compass-docs: Unstyled headers`)
      }

      const toc = []
      const render = createRender({
        headingHashes,
        toc,
        location,
      })

      const rendered = contents.map((content) => {
        if (/^"(demo|component)": "(.*)"/.test(content)) {
          try {
            return JSON.parse(`{${content}}`)
          } catch (err) {
            console.error('JSON.parse fails with: ', `{${content}}`)
            console.error(err)
            return null
          }
        }
        if (content.startsWith('<codeblock')) {
          const storageKey = content.match(
            /^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m,
          )?.[1]
          const blocks = [
            ...content.matchAll(/^```(\S*) (\S*)\n([^`]*)\n```/gmsu),
          ].map(([, language, tab, code]) => ({ language, tab, code }))

          const blocksData = blocks.filter(
            (block) => block.tab !== undefined && !emptyRegExp.test(block.code),
          )

          return {
            type: 'codeblock',
            data: blocksData,
            storageKey,
          }
        }

        return render(content)
      })

      // fragment link symbol
      rendered.unshift(
        `<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <symbol id="comment-link-icon" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />
      </symbol>
      </svg>`,
      )

      rendered.unshift(
        `<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
    <symbol id="anchor-link-icon" viewBox="0 0 16 16">
      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />
    </symbol>
    </svg>`,
      )

      rendered.unshift(
        `<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <symbol id="copy-icon" viewBox="0 0 24 24">
      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />
      +</symbol>
      </svg>`,
      )

      rendered.unshift(`
      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <symbol id="copied-icon" viewBox="0 0 24 24">
        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />
      </symbol>
      </svg>`)

      docs = {
        description,
        location,
        rendered,
        toc,
        title,
        headers,
        backgroundColor,
        textColor,
        backgroundImage,
        imgSrc,
      }
    })
  return { demos, docs }
}

module.exports = {
  createRender,
  getContents,
  getDescription,
  getHeaders,
  getTitle,
  prepareMarkdown,
  renderInline,
}
