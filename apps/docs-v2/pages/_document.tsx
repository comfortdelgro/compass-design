import Preflight from '@comfortdelgro/react-compass/preflight'
import Document, {Head, Html, Main, NextScript} from 'next/document'
import * as React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
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
            href='https://comfortdelgro.github.io/compass-design'
          />
          <link
            rel='alternate'
            href='https://comfortdelgro.github.io/compass-design'
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx: any) => {
  try {
    const initialProps = await Document.getInitialProps(ctx)

    // It might be undefined, e.g. after an error.

    // All the URLs should have a leading /.
    // This is missing in the Next.js static export.
    let url = ctx.req.url
    if (url[url.length - 1] !== '/') {
      url += '/'
    }

    return {
      ...initialProps,
      styles: [
        <style id='material-icon-font' key='material-icon-font' />,
        <style id='font-awesome-css' key='font-awesome-css' />,
        <style id='app-search' key='app-search' />,
        <style id='prismjs' key='prismjs' />,
        <style id='insertion-point-jss' key='insertion-point-jss' />,
        ...React.Children.toArray(initialProps.styles),
      ],
    }
  } finally {
  }
}
