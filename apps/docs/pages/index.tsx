import {Divider} from '@comfortdelgro/react-compass'
import Head from 'components/Head'
import Home from 'components/Home'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Head
        title='Compass Design: The React component library you always wanted'
        description='Compass Design: The React component library you always wanted'
      ></Head>
      <main id='main-content'>
        <Home />
        <Divider />
      </main>
      <Footer />
    </>
  )
}
