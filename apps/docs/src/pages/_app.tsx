import Preflight from '@comfortdelgro/react-compass/preflight'
import {AppProps} from 'next/app'
import {Toaster} from 'react-hot-toast'
import 'styles/global.css'
import 'styles/tailwind.css'

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Preflight />
      <Toaster position='bottom-right' />
      <Component {...pageProps} />
    </>
  )
}

export default App
