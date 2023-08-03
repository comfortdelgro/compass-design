import {Calendar, ThemeProvider} from '@comfortdelgro/react-compass'
import Preflight from '@comfortdelgro/react-compass/preflight'
import {SSRProvider} from '@react-aria/ssr'
import {AppProps} from 'next/app'
import {useEffect, useState} from 'react'
import {Toaster} from 'react-hot-toast'
import 'styles/global.css'

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const [changeBy, setChangeBy] = useState('light')

  useEffect(() => {
    const documentElement = document.documentElement
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains('dark')) {
        setChangeBy('dark')
      } else {
        setChangeBy('light')
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
      <ThemeProvider
        changeBy={changeBy}
        // @ts-ignore
        // lightThemeCustom={lightThemeCustom}
        // // @ts-ignore
        // darkThemeCustom={darkThemeCustom}
      >
        <Calendar.I18N.I18nProvider locale='en-SG'>
          <Preflight />
          <Toaster position='bottom-right' />
          <Component {...pageProps} />
        </Calendar.I18N.I18nProvider>
      </ThemeProvider>
    </SSRProvider>
  )
}

export default App
