import {Preflight} from '@comfortdelgro/react-compass'
import Document, {Head, Html, Main, NextScript} from 'next/document'
import * as React from 'react'
import {getStaticPath} from 'utils'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {Preflight.flush()}
          <link rel='manifest' href={getStaticPath('/static/manifest.json')} />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            cross-origin
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          />
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
          <link
            rel='shortcut icon'
            href={getStaticPath('/static/favicon.ico')}
          />
          {/* iOS Icon */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href={getStaticPath('/static/icons/180x180.png')}
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
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100&display=swap'
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
        ...React.Children.toArray(initialProps.styles),
      ],
    }
  } finally {
  }
}
