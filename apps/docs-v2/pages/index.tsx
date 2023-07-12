import {Divider} from '@comfortdelgro/react-compass'
import Head from 'components/common/Head'
import MarkdownLinks from 'components/common/MarkdownLinks'
import Banner from 'components/home/Banner'
import Hero from '../components/home/Hero'
import ReactCompass from '../components/home/ReactCompass'
import AppFooter from '../components/layouts/AppFooter'
import AppHeader from '../components/layouts/AppHeader'

export default function Home() {
  return (
    <>
      <Head
        title='Compass Design: The React component library you always wanted'
        description='Compass Design: The React component library you always wanted'
      ></Head>
      <AppHeader />
      <main id='main-content'>
        <MarkdownLinks />
        <Banner />
        <Hero />
        <ReactCompass />
        <Divider />
      </main>
      <AppFooter />
    </>
  )
}
