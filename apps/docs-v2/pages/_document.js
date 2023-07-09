import Preflight from '@comfortdelgro/react-compass/preflight'
import createEmotionServer from '@emotion/server/create-instance'
import {getInitColorSchemeScript as getJoyInitColorSchemeScript} from '@mui/joy/styles'
import GlobalStyles from '@mui/material/GlobalStyles'
import {getInitColorSchemeScript as getMuiInitColorSchemeScript} from '@mui/material/styles'
import {ServerStyleSheets as JSSServerStyleSheets} from '@mui/styles'
import createEmotionCache from 'docs/src/createEmotionCache'
import Document, {Head, Html, Main, NextScript} from 'next/document'
import * as React from 'react'
import {ServerStyleSheet} from 'styled-components'
import {pathnameToLanguage} from 'utils/helpers'

let prefixer
let cleanCSS
if (process.env.NODE_ENV === 'production') {
  const postcss = require('postcss')
  const autoprefixer = require('autoprefixer')
  const CleanCSS = require('clean-css')

  prefixer = postcss([autoprefixer])
  cleanCSS = new CleanCSS()
}

export default class MyDocument extends Document {
  render() {
    const {canonicalAsServer, userLanguage} = this.props

    return (
      <Html lang={userLanguage}>
        <Head>
          {Preflight.flush()}
          <link rel='manifest' href='/static/manifest.json' />
          {/* PWA primary color */}
          <meta
            name='theme-color'
            content='light'
            media='(prefers-color-scheme: light)'
          />
          <meta
            name='theme-color'
            content='dark'
            media='(prefers-color-scheme: dark)'
          />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          {/* iOS Icon */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/icons/180x180.png'
          />
          {/* SEO */}
          <link
            rel='canonical'
            href={`https://mui.com${
              userLanguage === 'en' ? '' : `/${userLanguage}`
            }${canonicalAsServer}`}
          />
          <link
            rel='alternate'
            href={`https://mui.com${canonicalAsServer}`}
            hrefLang='x-default'
          />
          {/*
            Preconnect allows the browser to setup early connections before an HTTP request
            is actually sent to the server.
            This includes DNS lookups, TLS negotiations, TCP handshakes.
          */}
          <link
            href='https://fonts.gstatic.com'
            rel='preconnect'
            crossOrigin='anonymous'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap'
            rel='stylesheet'
          />
          <link // prevent font flash
            rel='preload'
            // optimized for english characters (40kb -> 6kb)
            href='/static/fonts/PlusJakartaSans-ExtraBold-subset.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <style
            // the above <link> does not work in mobile device, this inline <style> fixes it without blocking resources
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `@font-face{font-family:'PlusJakartaSans-ExtraBold';font-style:normal;font-weight:800;font-display:swap;src:url('/static/fonts/PlusJakartaSans-ExtraBold-subset.woff2') format('woff2');}`,
            }}
          />
          <style
            // the above <link> does not work in mobile device, this inline <style> fixes it without blocking resources
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `@font-face{font-family:'PlusJakartaSans-Bold';font-style:normal;font-weight:700;font-display:swap;src:url('/static/fonts/PlusJakartaSans-Bold-subset.woff2') format('woff2');}`,
            }}
          />
          <style
            // Loads IBM Plex Sans: 400,500,700 & IBM Plex Mono: 400, 600
            // use https://cssminifier.com/ to minify
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `@font-face{font-family:'IBM Plex Sans';src:url(/static/fonts/IBMPlexSans-Regular.woff2) format('woff2'),url(/static/fonts/IBMPlexSans-Regular.woff) format('woff'),url(/static/fonts/IBMPlexSans-Regular.ttf) format('truetype');font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:'IBM Plex Sans';src:url(/static/fonts/IBMPlexSans-Medium.woff2) format('woff2'),url(/static/fonts/IBMPlexSans-Medium.woff) format('woff'),url(/static/fonts/IBMPlexSans-Medium.ttf) format('truetype');font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:'IBM Plex Sans';src:url(/static/fonts/IBMPlexSans-SemiBold.woff2) format('woff2'),url(/static/fonts/IBMPlexSans-SemiBold.woff) format('woff'),url(/static/fonts/IBMPlexSans-SemiBold.ttf) format('truetype');font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:'IBM Plex Sans';src:url(/static/fonts/IBMPlexSans-Bold.woff2) format('woff2'),url(/static/fonts/IBMPlexSans-Bold.woff) format('woff'),url(/static/fonts/IBMPlexSans-Bold.ttf) format('truetype');font-weight:700;font-style:normal;font-display:swap}`,
            }}
          />
          <GlobalStyles
            styles={{
              // First SSR paint
              '.only-light-mode': {
                display: 'block',
              },
              '.only-dark-mode': {
                display: 'none',
              },
              // Post SSR Hydration
              '.mode-dark .only-light-mode': {
                display: 'none',
              },
              '.mode-dark .only-dark-mode': {
                display: 'block',
              },
              '.plan-pro, .plan-premium': {
                display: 'inline-block',
                height: '1em',
                width: '1em',
                verticalAlign: 'middle',
                marginLeft: '0.3em',
                marginBottom: '0.08em',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              },
              '.plan-pro': {
                backgroundImage: 'url(/static/x/pro.svg)',
              },
              '.plan-premium': {
                backgroundImage: 'url(/static/x/premium.svg)',
              },
            }}
          />
        </Head>
        <body>
          {getMuiInitColorSchemeScript({defaultMode: 'system'})}
          {getJoyInitColorSchemeScript({defaultMode: 'system'})}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const jssSheets = new JSSServerStyleSheets()
  const styledComponentsSheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache()
  const {extractCriticalToChunks} = createEmotionServer(cache)

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentsSheet.collectStyles(
            jssSheets.collect(<App emotionCache={cache} {...props} />),
          ),
      })

    const initialProps = await Document.getInitialProps(ctx)
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: style.css}}
      />
    ))

    let css = jssSheets.toString()
    // It might be undefined, e.g. after an error.
    if (css && process.env.NODE_ENV === 'production') {
      const result1 = await prefixer.process(css, {from: undefined})
      css = result1.css
      css = cleanCSS.minify(css).styles
    }

    // All the URLs should have a leading /.
    // This is missing in the Next.js static export.
    let url = ctx.req.url
    if (url[url.length - 1] !== '/') {
      url += '/'
    }

    return {
      ...initialProps,
      canonicalAsServer: pathnameToLanguage(url).canonicalAsServer,
      userLanguage: ctx.query.userLanguage || 'en',
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        <style id='material-icon-font' key='material-icon-font' />,
        <style id='font-awesome-css' key='font-awesome-css' />,
        styledComponentsSheet.getStyleElement(),
        ...emotionStyleTags,
        <style
          id='jss-server-side'
          key='jss-server-side'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: css}}
        />,
        <style id='app-search' key='app-search' />,
        <style id='prismjs' key='prismjs' />,
        <style id='insertion-point-jss' key='insertion-point-jss' />,
        ...React.Children.toArray(initialProps.styles),
      ],
    }
  } finally {
    styledComponentsSheet.seal()
  }
}
