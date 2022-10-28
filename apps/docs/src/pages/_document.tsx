import Preflight from '@comfortdelgro/react-workbench/preflight'
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
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'
            rel='stylesheet'
          />
          {Preflight.flush()}
        </Head>
        <body className='subpixel-antialiased font-poppins'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
