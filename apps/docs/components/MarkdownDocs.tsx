import Demo from 'components/Demo'
import Layout from 'components/Layout'
import MarkdownElement from 'components/MarkdownElement'
import path from 'path'
import {useEffect} from 'react'
import usePageProps from 'utils/hooks/usePageProps'

function noComponent(moduleID: string) {
  return function NoComponent() {
    throw new Error(`No demo component provided for '${moduleID}'`)
  }
}

export default function MarkdownDocs(props: any) {
  const {
    disableAd = false,
    disableToc = false,
    demos = {},
    docs,
    demoComponents,
    srcComponents,
  } = props

  const localizedDoc = docs.en
  const {description, location, rendered, title, toc} = localizedDoc
  const {setPageProps} = usePageProps()

  useEffect(() => {
    setPageProps?.(localizedDoc)
  }, [localizedDoc])

  return (
    <Layout
      description={description}
      disableAd={disableAd}
      disableToc={disableToc}
      location={location}
      title={title}
      toc={toc}
    >
      {rendered.map((renderedMarkdownOrDemo: any, index: number) => {
        if (typeof renderedMarkdownOrDemo === 'string') {
          return (
            <MarkdownElement
              key={index}
              renderedMarkdown={renderedMarkdownOrDemo}
            />
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
            <Component
              key={index}
              {...renderedMarkdownOrDemo}
              markdown={localizedDoc}
            />
          )
        }

        const name = renderedMarkdownOrDemo.demo
        const demo = demos?.[name]
        if (demo === undefined) {
          const errorMessage = [
            `Missing demo: ${name}. You can use one of the following:`,
            Object.keys(demos),
          ].join('\n')

          console.log(errorMessage)

          const warnIcon = <span role='img'>⚠️</span>
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
            githubLocation='https://github.com/comfortdelgro/compass-design'
          />
        )
      })}
    </Layout>
  )
}
