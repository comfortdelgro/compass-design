import {darkTheme} from '@comfortdelgro/react-compass'
import Preflight from '@comfortdelgro/react-compass/preflight'
import {SSRProvider} from '@react-aria/ssr'
import {AppProps} from 'next/app'
import {useEffect} from 'react'
import {Toaster} from 'react-hot-toast'
import 'styles/global.css'

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  useEffect(() => {
    const documentElement = document.documentElement
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains('dark')) {
        document.body.classList.add(darkTheme.className)
      } else {
        document.body.classList.remove(darkTheme.className)
      }
    })

    observer.observe(documentElement, {
      attributes: true,
      childList: true,
      subtree: false,
    })
  }, [pageProps])

  return (
    <SSRProvider>
      <Preflight />
      <Toaster position='bottom-right' />
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default App
