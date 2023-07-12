import Preflight from '@comfortdelgro/react-compass/preflight'
import 'components/common/bootstrap'
import PageContext from 'components/common/PageContext'
import {ThemeProvider} from 'components/common/ThemeContext'
import routes from 'constants/routes'
import createEmotionCache from 'docs/src/createEmotionCache'
import {loadCSS} from 'fg-loadcss/src/loadCSS'
import NextHead from 'next/head'
import {useRouter} from 'next/router'
import * as React from 'react'
import {CodeCopyProvider} from 'utils/CodeCopy'
import {CodeStylingProvider} from 'utils/codeStylingSolution'
import {CodeVariantProvider} from 'utils/codeVariant'
import {pathnameToLanguage} from 'utils/helpers'
import {UserLanguageProvider} from 'utils/i18n'
import './global.css'

const clientSideEmotionCache = createEmotionCache()

let reloadInterval

// Avoid infinite loop when "Upload on reload" is set in the Chrome sw dev tools.
function lazyReload() {
  clearInterval(reloadInterval)
  reloadInterval = setInterval(() => {
    if (document.hasFocus()) {
      window.location.reload()
    }
  }, 100)
}

// Inspired by
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
function forcePageReload(registration) {
  // console.log('already controlled?', Boolean(navigator.serviceWorker.controller));

  if (!navigator.serviceWorker.controller) {
    // The window client isn't currently controlled so it's a new service
    // worker that will activate immediately.
    return
  }

  // console.log('registration waiting?', Boolean(registration.waiting));
  if (registration.waiting) {
    // SW is waiting to activate. Can occur if multiple clients open and
    // one of the clients is refreshed.
    registration.waiting.postMessage('skipWaiting')
    return
  }

  function listenInstalledStateChange() {
    registration.installing.addEventListener('statechange', (event) => {
      // console.log('statechange', event.target.state);
      if (event.target.state === 'installed' && registration.waiting) {
        // A new service worker is available, inform the user
        registration.waiting.postMessage('skipWaiting')
      } else if (event.target.state === 'activated') {
        // Force the control of the page by the activated service worker.
        lazyReload()
      }
    })
  }

  if (registration.installing) {
    listenInstalledStateChange()
    return
  }

  // We are currently controlled so a new SW may be found...
  // Add a listener in case a new SW is found,
  registration.addEventListener('updatefound', listenInstalledStateChange)
}

async function registerServiceWorker() {
  if (
    'serviceWorker' in navigator &&
    process.env.NODE_ENV === 'production' &&
    window.location.host.indexOf('mui.com') !== -1
  ) {
    // register() automatically attempts to refresh the sw.js.
    const registration = await navigator.serviceWorker.register('/sw.js')
    // Force the page reload for users.
    forcePageReload(registration)
  }
}

let dependenciesLoaded = false

function loadDependencies() {
  if (dependenciesLoaded) {
    return
  }

  dependenciesLoaded = true

  loadCSS(
    'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Two+Tone',
    document.querySelector('#material-icon-font'),
  )
}

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log(
    `%c
    Tip: you can access the documentation \`theme\` object directly in the console.
`,
    'font-family:monospace;color:#1976d2;font-size:12px;',
  )
}
function AppWrapper(props) {
  const {children, emotionCache, pageProps} = props

  const router = useRouter()

  const productId = 'material-ui'
  const productCategoryId = 'core'

  React.useEffect(() => {
    loadDependencies()
    registerServiceWorker()

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const pageContextValue = React.useMemo(() => {
    const pages = routes

    return {
      pages,
      productId,
    }
  }, [productId, router.pathname])

  let fonts = []
  if (pathnameToLanguage(router.asPath).canonicalAs.match(/onepirate/)) {
    fonts = [
      'https://fonts.googleapis.com/css?family=Roboto+Condensed:700|Work+Sans:300,400&display=swap',
    ]
  }

  return (
    <React.Fragment>
      <NextHead>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        {fonts.map((font) => (
          <link rel='stylesheet' href={font} key={font} />
        ))}
        <meta name='mui:productId' content={productId} />
        <meta name='mui:productCategoryId' content={productCategoryId} />
      </NextHead>
      <UserLanguageProvider defaultUserLanguage={pageProps.userLanguage}>
        <CodeCopyProvider>
          <CodeStylingProvider>
            <CodeVariantProvider>
              <PageContext.Provider value={pageContextValue}>
                <ThemeProvider>
                  <Preflight />
                  {children}
                </ThemeProvider>
              </PageContext.Provider>
            </CodeVariantProvider>
          </CodeStylingProvider>
        </CodeCopyProvider>
      </UserLanguageProvider>
    </React.Fragment>
  )
}

export default function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <AppWrapper emotionCache={emotionCache} pageProps={pageProps}>
      {getLayout(<Component {...pageProps} />)}
    </AppWrapper>
  )
}

MyApp.getInitialProps = async ({ctx, Component}) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps: {
      userLanguage: ctx.query.userLanguage || 'en',
      ...pageProps,
    },
  }
}

// Track fraction of actual events to prevent exceeding event quota.
// Filter sessions instead of individual events so that we can track multiple metrics per device.
// See https://github.com/GoogleChromeLabs/web-vitals-report to use this data
const disableWebVitalsReporting = Math.random() > 0.0001
export function reportWebVitals({id, name, label, delta, value}) {
  if (disableWebVitalsReporting) {
    return
  }
}
