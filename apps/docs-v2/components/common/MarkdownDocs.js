import {useTheme} from '@mui/system'
import {exactProp} from '@mui/utils'
import AppLayoutDocs from 'components/common/AppLayoutDocs'
import Demo from 'components/common/Demo'
import HighlightedCodeWithTabs from 'components/common/HighlightedCodeWithTabs'
import MarkdownElement from 'components/common/MarkdownElement'
import {useRouter} from 'next/router'
import path from 'path'
import PropTypes from 'prop-types'
import {pathnameToLanguage} from 'utils/helpers'
import {useTranslate, useUserLanguage} from 'utils/i18n'

function noComponent(moduleID) {
  return function NoComponent() {
    throw new Error(`No demo component provided for '${moduleID}'`)
  }
}

export default function MarkdownDocs(props) {
  const theme = useTheme()
  const router = useRouter()
  const {canonicalAs} = pathnameToLanguage(router.asPath)
  const {
    disableAd = false,
    disableToc = false,
    disableCssVarsProvider = false,
    demos = {},
    docs,
    demoComponents,
    srcComponents,
  } = props

  const userLanguage = useUserLanguage()
  const t = useTranslate()

  const localizedDoc = docs[userLanguage] || docs.en
  const {description, location, rendered, title, toc} = localizedDoc

  return (
    <AppLayoutDocs
      description={description}
      disableAd={disableAd}
      disableToc={disableToc}
      location={location}
      title={title}
      toc={toc}
    >
      {rendered.map((renderedMarkdownOrDemo, index) => {
        if (typeof renderedMarkdownOrDemo === 'string') {
          return <MarkdownElement renderedMarkdown={renderedMarkdownOrDemo} />
        }

        if (renderedMarkdownOrDemo.component) {
          const name = renderedMarkdownOrDemo.component
          const Component = srcComponents?.[name]

          if (Component === undefined) {
            throw new Error(
              `No component found at the path ${path.join('docs/src', name)}`,
            )
          }

          return (
            <Component {...renderedMarkdownOrDemo} markdown={localizedDoc} />
          )
        }
        if (renderedMarkdownOrDemo.type === 'codeblock') {
          return (
            <Wrapper key={index}>
              <HighlightedCodeWithTabs
                tabs={renderedMarkdownOrDemo.data}
                storageKey={
                  renderedMarkdownOrDemo.storageKey &&
                  `codeblock-${renderedMarkdownOrDemo.storageKey}`
                }
              />
            </Wrapper>
          )
        }

        const name = renderedMarkdownOrDemo.demo
        const demo = demos?.[name]
        if (demo === undefined) {
          const errorMessage = [
            `Missing demo: ${name}. You can use one of the following:`,
            Object.keys(demos),
          ].join('\n')

          if (userLanguage === 'en') {
            throw new Error(errorMessage)
          }

          if (process.env.NODE_ENV !== 'production') {
            console.error(errorMessage)
          }

          const warnIcon = (
            <span role='img' aria-label={t('emojiWarning')}>
              ⚠️
            </span>
          )
          return (
            <div key={index}>
              {/* eslint-disable-next-line material-ui/no-hardcoded-labels */}
              {warnIcon} Missing demo `{name}` {warnIcon}
            </div>
          )
        }

        const splitLocationBySlash = location.split('/')
        splitLocationBySlash.pop()
        const fileNameWithLocation = `${splitLocationBySlash.join('/')}/${name}`

        return (
          <Demo
            key={index}
            mode={theme.palette.mode}
            demo={{
              raw: demo.raw,
              js: demoComponents[demo.module] ?? noComponent(demo.module),
              scope: demos.scope,
              jsxPreview: demo.jsxPreview,
              rawTS: demo.rawTS,
              tsx: demoComponents[demo.moduleTS] ?? null,
              gaLabel: fileNameWithLocation.replace(/^\/docs\/data\//, ''),
            }}
            disableAd={disableAd}
            demoOptions={renderedMarkdownOrDemo}
            githubLocation={`${process.env.SOURCE_CODE_REPO}/blob/v${process.env.LIB_VERSION}${fileNameWithLocation}`}
          />
        )
      })}
    </AppLayoutDocs>
  )
}

MarkdownDocs.propTypes = {
  demoComponents: PropTypes.object,
  demos: PropTypes.object,
  disableAd: PropTypes.bool,
  disableCssVarsProvider: PropTypes.bool,
  disableToc: PropTypes.bool,
  docs: PropTypes.object.isRequired,
  srcComponents: PropTypes.object,
}

if (process.env.NODE_ENV !== 'production') {
  MarkdownDocs.propTypes = exactProp(MarkdownDocs.propTypes)
}
