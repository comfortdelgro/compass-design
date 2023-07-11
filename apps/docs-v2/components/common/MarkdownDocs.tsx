import {Box} from '@comfortdelgro/react-compass'
import {useTheme} from '@mui/system'
import AppLayoutDocs from 'components/common/AppLayoutDocs'
import Demo from 'components/common/Demo'
import HighlightedCodeWithTabs from 'components/common/HighlightedCodeWithTabs'
import MarkdownElement from 'components/common/MarkdownElement'
import path from 'path'
import {useTranslate, useUserLanguage} from 'utils/i18n'

function noComponent(moduleID: string) {
  return function NoComponent() {
    throw new Error(`No demo component provided for '${moduleID}'`)
  }
}

export default function MarkdownDocs(props: any) {
  const theme = useTheme()
  const {
    disableAd = false,
    disableToc = false,
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
            <Box key={index}>
              <HighlightedCodeWithTabs
                tabs={renderedMarkdownOrDemo.data}
                storageKey={
                  renderedMarkdownOrDemo.storageKey &&
                  `codeblock-${renderedMarkdownOrDemo.storageKey}`
                }
              />
            </Box>
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
          console.log(errorMessage)

          const warnIcon = (
            <span role='img' aria-label={t('emojiWarning')}>
              ⚠️
            </span>
          )
          return (
            <div key={index}>
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
            githubLocation={`${process.env.SOURCE_CODE_REPO}/blob/v1.1.2${fileNameWithLocation}`}
          />
        )
      })}
    </AppLayoutDocs>
  )
}
