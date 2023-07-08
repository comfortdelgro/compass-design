import 'components/common/bootstrap'
// --- Post bootstrap -----
import GoogleAnalytics from 'components/common/GoogleAnalytics'
import PageContext from 'components/common/PageContext'
import {ThemeProvider} from 'components/common/ThemeContext'
import materialPages from 'docs/data/material/pages'
import createEmotionCache from 'docs/src/createEmotionCache'
import {CodeCopyProvider} from 'docs/src/modules/utils/CodeCopy'
import {CodeStylingProvider} from 'docs/src/modules/utils/codeStylingSolution'
import {CodeVariantProvider} from 'docs/src/modules/utils/codeVariant'
import findActivePage from 'docs/src/modules/utils/findActivePage'
import getProductInfoFromUrl from 'docs/src/modules/utils/getProductInfoFromUrl'
import {pathnameToLanguage} from 'docs/src/modules/utils/helpers'
import {UserLanguageProvider} from 'docs/src/modules/utils/i18n'
import DocsStyledEngineProvider from 'docs/src/modules/utils/StyledEngineProvider'
import generalPages from 'docs/src/pages'
import {loadCSS} from 'fg-loadcss/src/loadCSS'
import NextHead from 'next/head'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import * as React from 'react'
import './global.css'

// Client-side cache, shared for the whole session of the user in the browser.
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

███╗   ███╗ ██╗   ██╗ ██████╗
████╗ ████║ ██║   ██║   ██╔═╝
██╔████╔██║ ██║   ██║   ██║
██║╚██╔╝██║ ██║   ██║   ██║
██║ ╚═╝ ██║ ╚██████╔╝ ██████╗
╚═╝     ╚═╝  ╚═════╝  ╚═════╝

Tip: you can access the documentation \`theme\` object directly in the console.
`,
    'font-family:monospace;color:#1976d2;font-size:12px;',
  )
}
function AppWrapper(props) {
  const {children, emotionCache, pageProps} = props

  const router = useRouter()
  // TODO move productId & productCategoryId resolution to page layout.
  // We should use the productId field from the markdown and fallback to getProductInfoFromUrl()
  // if not present
  const {productId, productCategoryId} = getProductInfoFromUrl(router.asPath)

  React.useEffect(() => {
    loadDependencies()
    registerServiceWorker()

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const productIdentifier = React.useMemo(() => {
    const languagePrefix =
      pageProps.userLanguage === 'en' ? '' : `/${pageProps.userLanguage}`

    if (productId === 'material-ui') {
      return {
        metadata: 'MUI Core',
        name: 'Material UI',
        versions: [
          {text: `v0.01`, current: true},
          {
            text: 'v4',
            href: `https://v4.mui.com${languagePrefix}/getting-started/installation/`,
          },
          {
            text: 'View all versions',
            href: `https://mui.com${languagePrefix}/versions/`,
          },
        ],
      }
    }

    if (productId === 'joy-ui') {
      return {
        metadata: 'MUI Core',
        name: 'Joy UI',
        versions: [{text: `v0.01`, current: true}],
      }
    }

    if (productId === 'system') {
      return {
        metadata: 'MUI Core',
        name: 'MUI System',
        versions: [
          {text: `v0.01`, current: true},
          {
            text: 'v4',
            href: `https://v4.mui.com${languagePrefix}/system/basics/`,
          },
          {
            text: 'View all versions',
            href: `https://mui.com${languagePrefix}/versions/`,
          },
        ],
      }
    }

    if (productId === 'base-ui') {
      return {
        metadata: 'MUI Core',
        name: 'Base UI',
        versions: [{text: `v0.01`, current: true}],
      }
    }

    if (productId === 'core') {
      return {
        metadata: '',
        name: 'MUI Core',
        versions: [
          {text: `v${materialPkgJson.version}`, current: true},
          {
            text: 'View all versions',
            href: `https://mui.com${languagePrefix}/versions/`,
          },
        ],
      }
    }

    return {
      metadata: '',
      name: 'Docs-infra',
      versions: [
        {
          text: 'v0.0.0',
          href: `https://mui.com${languagePrefix}/versions/`,
        },
      ],
    }
  }, [pageProps.userLanguage, productId])

  const pageContextValue = React.useMemo(() => {
    let pages = generalPages
    if (productId === 'base-ui') {
      pages = basePages
    } else if (productId === 'material-ui') {
      pages = materialPages
    } else if (productId === 'joy-ui') {
      pages = joyPages
    } else if (productId === 'system') {
      pages = systemPages
    }

    const {activePage, activePageParents} = findActivePage(
      pages,
      router.pathname,
    )

    return {
      activePage,
      activePageParents,
      pages,
      productIdentifier,
      productId,
    }
  }, [productId, productIdentifier, router.pathname])

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
                  <DocsStyledEngineProvider cacheLtr={emotionCache}>
                    {children}
                    <GoogleAnalytics />
                  </DocsStyledEngineProvider>
                </ThemeProvider>
              </PageContext.Provider>
            </CodeVariantProvider>
          </CodeStylingProvider>
        </CodeCopyProvider>
      </UserLanguageProvider>
    </React.Fragment>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  emotionCache: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
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
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
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

  window.ga('send', 'event', {
    eventCategory:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
  window.gtag('event', name, {
    value: delta,
    metric_label:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    metric_value: value,
    metric_delta: delta,
    metric_id: id, // id unique to current page load
  })
}
