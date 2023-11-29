import {Button, Card} from '@comfortdelgro/react-compass'

export const componentCode = `
import {Preflight} from '@comfortdelgro/react-compass'
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
`

export default function ShowcaseDemo() {
  return (
    <Card size='lg'>
      <Card.Image src='https://picsum.photos/600/800' />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti
        esse qui earum dolorum nulla assum
        <Card.Action>
          <Button variant='primary'>Button</Button>
          <Button variant='secondary'>Button</Button>
        </Card.Action>
      </Card.Body>
    </Card>
  )
}
