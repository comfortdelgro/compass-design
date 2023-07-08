const { marked } = require('marked');
const kebabCase = require('lodash/kebabCase');
const textToHash = require('./textToHash');
const prism = require('./prism');

const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
const titleRegExp = /# (.*)[\r\n]/;
const descriptionRegExp = /<p class="description">(.*?)<\/p>/s;
const headerKeyValueRegExp = /(.*?):[\r\n]?\s+(\[[^\]]+\]|.*)/g;
const emptyRegExp = /^\s*$/;

/**
 * Same as https://github.com/markedjs/marked/blob/master/src/helpers.js
 * Need to duplicate because `marked` does not export `escape` function
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else if (escapeTestNoEncode.test(html)) {
    return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
  }

  return html;
}

function checkUrlHealth(href, linkText, context) {
  const url = new URL(href, 'https://mui.com/');

  // External links to MUI, ignore
  if (url.host !== 'mui.com') {
    return;
  }

  /**
   * Break for links like:
   * /material-ui/customization/theming
   *
   * It needs to be:
   * /material-ui/customization/theming/
   */
  if (url.pathname[url.pathname.length - 1] !== '/') {
    throw new Error(
      [
        'docs-infra: Missing trailing slash. The following link:',
        `[${linkText}](${href}) in ${context.location} is missing a trailing slash, please add it.`,
        '',
        'See https://ahrefs.com/blog/trailing-slash/ for more details.',
        '',
      ].join('\n'),
    );
  }

  // Relative links
  if (href[0] !== '#' && !(href.startsWith('https://') || href.startsWith('http://'))) {
    /**
     * Break for links like:
     * material-ui/customization/theming/
     *
     * It needs to be:
     * /material-ui/customization/theming/
     */
    if (href[0] !== '/') {
      throw new Error(
        [
          'docs-infra: Missing leading slash. The following link:',
          `[${linkText}](${href}) in ${context.location} is missing a leading slash, please add it.`,
          '',
        ].join('\n'),
      );
    }
  }
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
  let header = markdown.match(headerRegExp);

  if (!header) {
    return {
      components: [],
    };
  }

  header = header[1];

  try {
    let regexMatches;
    const headers = {};

    // eslint-disable-next-line no-cond-assign
    while ((regexMatches = headerKeyValueRegExp.exec(header)) !== null) {
      const key = regexMatches[1];
      let value = regexMatches[2].replace(/(.*)/, '$1');
      if (value[0] === '[') {
        // Need double quotes to JSON parse.
        value = value.replace(/'/g, '"');
        // Remove the comma after the last value e.g. ["foo", "bar",] -> ["foo", "bar"].
        value = value.replace(/,\s+\]$/g, ']');
        headers[key] = JSON.parse(value);
      } else {
        // Remove trailing single quote yml escaping.
        headers[key] = value.replace(/^'|'$/g, '');
      }
    }

    if (headers.components) {
      headers.components = headers.components
        .split(',')
        .map((x) => x.trim())
        .sort();
    } else {
      headers.components = [];
    }

    if (headers.hooks) {
      headers.hooks = headers.hooks
        .split(',')
        .map((x) => x.trim())
        .sort();
    } else {
      headers.hooks = [];
    }

    return headers;
  } catch (err) {
    throw new Error(
      `docs-infra: ${err.message} in getHeader(markdown) with markdown: \n\n${header}\n`,
    );
  }
}

function getContents(markdown) {
  const rep = markdown
    .replace(headerRegExp, '') // Remove header information
    .split(/^{{("(?:demo|component)":.*)}}$/gm) // Split markdown into an array, separating demos
    .flatMap((text) => text.split(/^(<codeblock.*?<\/codeblock>)$/gmsu))
    .filter((content) => !emptyRegExp.test(content)); // Remove empty lines
  return rep;
}

function getTitle(markdown) {
  const matches = markdown.match(titleRegExp);

  if (matches === null) {
    return '';
  }

  return matches[1].replace(/`/g, '');
}

function getDescription(markdown) {
  const matches = markdown.match(descriptionRegExp);
  if (matches === null) {
    return undefined;
  }

  return matches[1].trim().replace(/`/g, '');
}

/**
 * @param {string} markdown
 */
function renderInline(markdown) {
  return marked.parseInline(markdown);
}

// Help rank mui.com on component searches first.
const noSEOadvantage = [
  'https://m2.material.io/',
  'https://getbootstrap.com/',
  'https://icons.getbootstrap.com/',
  'https://pictogrammers.com/',
  'https://www.w3.org/',
  'https://tailwindcss.com/',
  'https://heroicons.com/',
  'https://react-icons.github.io/',
  'https://fontawesome.com/',
];

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
 * @param {string} context.userLanguage
 * @param {object} context.options
 */
function createRender(context) {
  const { headingHashes, toc, userLanguage, options } = context;
  const headingHashesFallbackTranslated = {};
  let headingIndex = -1;

  /**
   * @param {string} markdown
   */
  function render(markdown) {
    const renderer = new marked.Renderer();
    renderer.heading = (headingHtml, level) => {
      // Main title, no need for an anchor.
      // It adds noises to the URL.
      //
      // Small title, no need for an anchor.
      // It reduces the risk of duplicated id and it's fewer elements in the DOM.
      if (level === 1 || level >= 4) {
        return `<h${level}>${headingHtml}</h${level}>`;
      }

      // Remove links to avoid nested links in the TOCs
      const headingText = headingHtml.replace(/<a\b[^>]*>/i, '').replace(/<\/a>/i, '');

      // Standardizes the hash from the default location (en) to different locations
      // Need english.md file parsed first
      let hash;
      if (userLanguage === 'en') {
        hash = textToHash(headingText, headingHashes);
      } else {
        headingIndex += 1;
        hash = Object.keys(headingHashes)[headingIndex];
        if (!hash) {
          hash = textToHash(headingText, headingHashesFallbackTranslated);
        }
      }

      // enable splitting of long words from function name + first arg name
      // Closing parens are less interesting since this would only allow breaking one character earlier.
      // Applying the same mechanism would also allow breaking of non-function signatures like "Community help (free)".
      // To detect that we enabled breaking of open/closing parens we'd need a context-sensitive parser.
      const displayText = headingText.replace(/([^\s]\()/g, '$1&#8203;');

      // create a nested structure with 2 levels starting with level 2 e.g.
      // [{...level2, children: [level3, level3, level3]}, level2]
      if (level === 2) {
        toc.push({
          text: displayText,
          level,
          hash,
          children: [],
        });
      } else if (level === 3) {
        if (!toc[toc.length - 1]) {
          throw new Error(`docs-infra: Missing parent level for: ${headingText}\n`);
        }

        toc[toc.length - 1].children.push({
          text: displayText,
          level,
          hash,
        });
      }

      return [
        `<h${level} id="${hash}">`,
        headingHtml,
        `<a aria-labelledby="${hash}" class="anchor-link" href="#${hash}" tabindex="-1">`,
        '<svg><use xlink:href="#anchor-link-icon" /></svg>',
        '</a>',
        `<button title="Post a comment" class="comment-link" data-feedback-hash="${hash}">`,
        '<svg><use xlink:href="#comment-link-icon" /></svg>',
        `</button>`,
        `</h${level}>`,
      ].join('');
    };
    renderer.link = (href, linkTitle, linkText) => {
      let more = '';

      if (noSEOadvantage.some((domain) => href.indexOf(domain) !== -1)) {
        more = ' target="_blank" rel="noopener nofollow"';
      }

      let finalHref = href;

      checkUrlHealth(href, linkText, context);

      if (userLanguage !== 'en' && href.indexOf('/') === 0 && !options.ignoreLanguagePages(href)) {
        finalHref = `/${userLanguage}${href}`;
      }

      // This logic turns link like:
      // https://github.com/mui/material-ui/blob/-/packages/mui-joy/src/styles/components.d.ts
      // into a permalink:
      // https://github.com/mui/material-ui/blob/v5.11.15/packages/mui-joy/src/styles/components.d.ts
      if (finalHref.startsWith(`${options.env.SOURCE_CODE_REPO}/blob/-/`)) {
        finalHref = finalHref.replace(
          `${options.env.SOURCE_CODE_REPO}/blob/-/`,
          `${options.env.SOURCE_CODE_REPO}/blob/v${options.env.LIB_VERSION}/`,
        );
      }

      return `<a href="${finalHref}"${more}>${linkText}</a>`;
    };
    renderer.code = (code, infostring, escaped) => {
      // https://github.com/markedjs/marked/blob/30e90e5175700890e6feb1836c57b9404c854466/src/Renderer.js#L15
      const lang = (infostring || '').match(/\S*/)[0];
      const out = prism(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }

      code = `${code.replace(/\n$/, '')}\n`;

      if (!lang) {
        return `<pre><code>${escaped ? code : escape(code, true)}</code></pre>\n`;
      }

      return `<div class="MuiCode-root"><pre><code class="language-${escape(lang, true)}">${
        escaped ? code : escape(code, true)
      }</code></pre>${[
        '<button data-ga-event-category="code" data-ga-event-action="copy-click" aria-label="Copy the code" class="MuiCode-copy">',
        '<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">',
        '<use class="MuiCode-copy-icon" xlink:href="#copy-icon" />',
        '<use class="MuiCode-copied-icon" xlink:href="#copied-icon" />',
        '</svg>',
        '<span class="MuiCode-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>',
      ].join('')}\n`;
    };

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
      renderer,
    };

    marked.use({
      extensions: [
        {
          name: 'callout',
          level: 'block',
          start(src) {
            const match = src.match(/:::/);
            return match ? match.index : undefined;
          },
          tokenizer(src) {
            const rule =
              /^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?=\n|$)|$)/;
            const match = rule.exec(src);
            if (match) {
              const token = {
                type: 'callout',
                raw: match[0],
                text: match[3].trim(),
                severity: match[2],
                tokens: [],
              };
              this.lexer.blockTokens(token.text, token.tokens);
              return token;
            }
            return undefined;
          },
          renderer(token) {
            return `<aside class="MuiCallout-root MuiCallout-${token.severity}">${this.parser.parse(
              token.tokens,
            )}\n</aside>`;
          },
        },
      ],
    });

    return marked(markdown, markedOptions);
  }

  return render;
}

const BaseUIReexportedComponents = ['ClickAwayListener', 'NoSsr', 'Portal', 'TextareaAutosize'];

/**
 * @param {string} product
 * @example 'material'
 * @param {string} componentPkg
 * @example 'mui-base'
 * @param {string} component
 * @example 'Button'
 * @returns {string}
 */
function resolveComponentApiUrl(product, componentPkg, component) {
  if (!product) {
    return `/api/${kebabCase(component)}/`;
  }
  if (product === 'x-date-pickers') {
    return `/x/api/date-pickers/${kebabCase(component)}/`;
  }
  if (componentPkg === 'mui-base' || BaseUIReexportedComponents.indexOf(component) >= 0) {
    return `/base-ui/react-${kebabCase(component)}/components-api/#${kebabCase(component)}`;
  }
  return `/${product}/api/${kebabCase(component)}/`;
}

/**
 * @param {object} config
 * @param {Array<{ markdown: string, filename: string, userLanguage: string }>} config.translations - Mapping of locale to its markdown
 * @param {string} config.fileRelativeContext - posix filename relative to repository root directory
 * @param {object} config.options - provided to the webpack loader
 */
function prepareMarkdown(config) {
  const { fileRelativeContext, translations, componentPackageMapping = {}, options } = config;

  const demos = {};
  /**
   * @type {Record<string, { rendered: Array<string | { component: string } | { demo:string }> }>}
   */
  const docs = {};
  const headingHashes = {};

  translations
    // Process the English markdown before the other locales.
    // English ToC anchor links are used in all languages
    .sort((a) => (a.userLanguage === 'en' ? -1 : 1))
    .forEach((translation) => {
      const { filename, markdown, userLanguage } = translation;
      const headers = getHeaders(markdown);
      const location = headers.filename || `/${fileRelativeContext}/${filename}`;
      const title = headers.title || getTitle(markdown);
      const description = headers.description || getDescription(markdown);

      if (title == null || title === '') {
        throw new Error(`docs-infra: Missing title in the page: ${location}\n`);
      }

      if (title.length > 70) {
        throw new Error(
          [
            `docs-infra: The title "${title}" is too long (${title.length} characters).`,
            'It needs to have fewer than 70 characters—ideally less than 60. For more details, see:',
            'https://developers.google.com/search/docs/advanced/appearance/title-link',
            '',
          ].join('\n'),
        );
      }

      if (description == null || description === '') {
        throw new Error(`docs-infra: Missing description in the page: ${location}\n`);
      }

      if (description.length > 170) {
        throw new Error(
          [
            `docs-infra: The description "${description}" is too long (${description.length} characters).`,
            'It needs to have fewer than 170 characters—ideally less than 160. For more details, see:',
            'https://ahrefs.com/blog/meta-description/#4-be-concise',
            '',
          ].join('\n'),
        );
      }

      const contents = getContents(markdown);

      if (headers.unstyled) {
        contents.push(`
## Unstyled

:::success
[Base UI](/base-ui/getting-started/) provides a headless ("unstyled") version of this [${title}](${headers.unstyled}). Try it if you need more flexibility in customization and a smaller bundle size.
:::
        `);
      }

      if (headers.components.length > 0) {
        contents.push(`
## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

${headers.components
  .map((component) => {
    const componentPkgMap = componentPackageMapping[headers.productId];
    const componentPkg = componentPkgMap ? componentPkgMap[component] : null;
    return `- [\`<${component} />\`](${resolveComponentApiUrl(
      headers.productId,
      componentPkg,
      component,
    )})`;
  })
  .join('\n')}
${headers.hooks
  .map((hook) => {
    const componentPkgMap = componentPackageMapping[headers.productId];
    const componentPkg = componentPkgMap ? componentPkgMap[hook] : null;
    return `- [\`${hook}\`](${resolveComponentApiUrl(headers.productId, componentPkg, hook)})`;
  })
  .join('\n')}
  `);
      }

      const toc = [];
      const render = createRender({
        headingHashes,
        toc,
        userLanguage,
        location,
        options,
      });

      const rendered = contents.map((content) => {
        if (/^"(demo|component)": "(.*)"/.test(content)) {
          try {
            return JSON.parse(`{${content}}`);
          } catch (err) {
            console.error('JSON.parse fails with: ', `{${content}}`);
            console.error(err);
            return null;
          }
        }
        if (content.startsWith('<codeblock')) {
          const storageKey = content.match(/^<codeblock [^>]*storageKey=["|'](\S*)["|'].*>/m)?.[1];
          const blocks = [...content.matchAll(/^```(\S*) (\S*)\n([^`]*)\n```/gmsu)].map(
            ([, language, tab, code]) => ({ language, tab, code }),
          );

          const blocksData = blocks.filter(
            (block) => block.tab !== undefined && !emptyRegExp.test(block.code),
          );

          return {
            type: 'codeblock',
            data: blocksData,
            storageKey,
          };
        }

        return render(content);
      });

      // fragment link symbol
      rendered.unshift(
        `<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <symbol id="comment-link-icon" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />
      </symbol>
      </svg>`,
      );

      rendered.unshift(
        `<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
    <symbol id="anchor-link-icon" viewBox="0 0 16 16">
      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />
    </symbol>
    </svg>`,
      );

      rendered.unshift(
        `<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <symbol id="copy-icon" viewBox="0 0 24 24">
      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />
      +</symbol>
      </svg>`,
      );

      rendered.unshift(`
      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
      <symbol id="copied-icon" viewBox="0 0 24 24">
        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />
      </symbol>
      </svg>`);

      docs[userLanguage] = {
        description,
        location,
        rendered,
        toc,
        title,
        headers,
      };
    });

  return { demos, docs };
}

module.exports = {
  createRender,
  getContents,
  getDescription,
  getHeaders,
  getTitle,
  prepareMarkdown,
  renderInline,
};
