import Preflight from '@comfortdelgro/react-compass/preflight'
import 'components/common/bootstrap'
import {ThemeProvider} from 'components/common/ThemeContext'
import NextHead from 'next/head'
import * as React from 'react'
import {CodeCopyProvider} from 'utils/CodeCopy'
import './global.css'

let reloadInterval: any

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
function forcePageReload(registration: any) {
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
    registration.installing.addEventListener('statechange', (event: any) => {
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
function AppWrapper(props: any) {
  const {children} = props

  React.useEffect(() => {
    loadDependencies()
    registerServiceWorker()
  }, [])

  return (
    <React.Fragment>
      <NextHead>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </NextHead>
      <CodeCopyProvider>
        <ThemeProvider>
          <Preflight />
          {children}
        </ThemeProvider>
      </CodeCopyProvider>
    </React.Fragment>
  )
}

export default function MyApp(props: any) {
  const {Component, pageProps} = props
  const getLayout = Component.getLayout ?? ((page: any) => page)

  return (
    <AppWrapper pageProps={pageProps}>
      {getLayout(<Component {...pageProps} />)}
    </AppWrapper>
  )
}

MyApp.getInitialProps = async ({ctx, Component}: any) => {
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
export function reportWebVitals({id, name, label, delta, value}: any) {
  if (disableWebVitalsReporting) {
    return
  }
}
