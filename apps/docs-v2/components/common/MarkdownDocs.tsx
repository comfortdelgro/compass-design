import AppLayoutDocs from 'components/common/AppLayoutDocs'
import Demo from 'components/common/Demo'
import MarkdownElement from 'components/common/MarkdownElement'
import path from 'path'

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
  console.log({rendered: rendered.type})
  return (
    <AppLayoutDocs
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
            <Component {...renderedMarkdownOrDemo} markdown={localizedDoc} />
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
            githubLocation={`${process.env.SOURCE_CODE_REPO}/blob/v1.1.2${fileNameWithLocation}`}
          />
        )
      })}
    </AppLayoutDocs>
  )
}
