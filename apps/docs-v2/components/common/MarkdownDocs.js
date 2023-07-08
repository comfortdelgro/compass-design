import {
  CssVarsProvider as JoyCssVarsProvider,
  useColorScheme,
} from '@mui/joy/styles'
import {useTheme} from '@mui/system'
import {exactProp} from '@mui/utils'
import Ad from 'components/common/Ad'
import AdGuest from 'components/common/AdGuest'
import AppLayoutDocs from 'components/common/AppLayoutDocs'
import Demo from 'components/common/Demo'
import HighlightedCodeWithTabs from 'components/common/HighlightedCodeWithTabs'
import MarkdownElement from 'components/common/MarkdownElement'
import BrandingProvider from 'docs/src/BrandingProvider'
import {useRouter} from 'next/router'
import path from 'path'
import PropTypes from 'prop-types'
import * as React from 'react'
import {pathnameToLanguage} from 'utils/helpers'
import {useTranslate, useUserLanguage} from 'utils/i18n'

function noComponent(moduleID) {
  return function NoComponent() {
    throw new Error(`No demo component provided for '${moduleID}'`)
  }
}

function JoyModeObserver({mode}) {
  const {setMode} = useColorScheme()
  React.useEffect(() => {
    setMode(mode)
  }, [mode, setMode])
  return null
}

JoyModeObserver.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
}

export default function MarkdownDocs(props) {
  const theme = useTheme()
  const router = useRouter()
  const {canonicalAs} = pathnameToLanguage(router.asPath)
  const {
    disableAd = false,
    disableToc = false,
    /**
     * Some pages, e.g. Joy theme builder, should not be a nested CssVarsProvider to control its own state.
     * This config will skip the CssVarsProvider at the root of the page.
     */
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

  const isJoy = canonicalAs.startsWith('/joy-ui/') && !disableCssVarsProvider
  const CssVarsProvider = isJoy ? JoyCssVarsProvider : React.Fragment
  const Wrapper = isJoy ? BrandingProvider : React.Fragment

  return (
    <AppLayoutDocs
      description={description}
      disableAd={disableAd}
      disableToc={disableToc}
      location={location}
      title={title}
      toc={toc}
    >
      {disableAd ? null : (
        <BrandingProvider>
          <AdGuest>
            <Ad />
          </AdGuest>
        </BrandingProvider>
      )}
      <CssVarsProvider>
        {isJoy && <JoyModeObserver mode={theme.palette.mode} />}
        {rendered.map((renderedMarkdownOrDemo, index) => {
          if (typeof renderedMarkdownOrDemo === 'string') {
            return (
              <Wrapper key={index} {...(isJoy && {mode: theme.palette.mode})}>
                <MarkdownElement renderedMarkdown={renderedMarkdownOrDemo} />
              </Wrapper>
            )
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
              <Wrapper key={index} {...(isJoy && {mode: theme.palette.mode})}>
                <Component
                  {...renderedMarkdownOrDemo}
                  markdown={localizedDoc}
                />
              </Wrapper>
            )
          }
          if (renderedMarkdownOrDemo.type === 'codeblock') {
            return (
              <Wrapper key={index} {...(isJoy && {mode: theme.palette.mode})}>
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
          const fileNameWithLocation = `${splitLocationBySlash.join(
            '/',
          )}/${name}`

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
      </CssVarsProvider>
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
