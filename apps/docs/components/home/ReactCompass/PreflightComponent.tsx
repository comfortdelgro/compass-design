import HighlightedCode from 'components/common/HighlightedCode'
import ShowcaseContainer from './ShowcaseContainer'
import { Box } from '@comfortdelgro/react-compass'

const componentCode = `
// _app.tsx
import type { AppProps } from 'next/app'
import {Preflight} from '@comfortdelgro/react-compass'

import '@comfortdelgro/react-compass/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Preflight />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
`

export default function PreflightComponent() {
  return (
    <ShowcaseContainer
      code={
        <HighlightedCode
          copyButtonHidden
          component={Box}
          code={componentCode}
          language='jsx'
        />
      }
    />
  )
}
