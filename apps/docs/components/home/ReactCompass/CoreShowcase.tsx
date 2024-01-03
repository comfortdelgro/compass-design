import HighlightedCode from 'components/common/HighlightedCode'
import MarkdownElement from '../../markdown/MarkdownElement'
import ShowcaseContainer from './ShowcaseContainer'

export const coreCode = `
// _app.tsx
import type { AppProps } from 'next/app'
import '@comfortdelgro/react-compass/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
`

export default function CoreShowcase() {
  return (
    <ShowcaseContainer
      code={
        <HighlightedCode
          copyButtonHidden
          component={MarkdownElement}
          code={coreCode}
          language='jsx'
        />
      }
    />
  )
}
