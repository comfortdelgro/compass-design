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
