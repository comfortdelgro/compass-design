# Usage

<p class="description">Learn the basics of working with React Compass components.</p>

## Quickstart

The following code snippet demonstrates a simple app that uses the React Compass Button

```jsx
import Preflight from '@comfortdelgro/react-compass/preflight'
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
        <Head>{Preflight.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```
