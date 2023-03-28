import {SSRProvider} from '@react-aria/ssr'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    }
  }

  render() {
    return (
      <SSRProvider>
        <Html>
          <Head>
            {/* {Preflight.flush()} */}
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </SSRProvider>
    )
  }
}

export default MyDocument
