# Usage

<p class="description">Learn the basics of working with React Compass components.</p>

## Quickstart

Import style.css into your _app.tsx if you are using NextJS

```jsx
// _app.tsx
import type { AppProps } from 'next/app'
import '@comfortdelgro/react-compass/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
```

or if you are using vanilla ReactJS

```jsx
// app.tsx
import '@comfortdelgro/react-compass/style.css'

function App() {
  return (
    <div className="App">React</div>
  );
}

export default App;
```

## CSS Reset (optional)

This following code you may need to add if you want to reset the styling when using NextJS

```jsx
// _document.tsx
import {Preflight} from '@comfortdelgro/react-compas'
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

or vanilla ReactJS

```jsx
// index.ts
export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@comfortdelgro/react-compass/style.css'
import {Preflight} from '@comfortdelgro/react-compas'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Preflight />
    <App />
  </React.StrictMode>
);
```
