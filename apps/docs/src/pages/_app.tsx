import Preflight from '@comfortdelgro/react-compass/preflight'
import {SSRProvider} from '@react-aria/ssr'
import {AppProps} from 'next/app'
import {Toaster} from 'react-hot-toast'
import 'styles/global.css'
import 'styles/tailwind.css'

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <SSRProvider>
      <Preflight />
      <Toaster position='bottom-right' />
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default App
