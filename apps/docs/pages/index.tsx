import {Divider} from '@comfortdelgro/react-compass'
import Head from 'components/common/Head'
import MarkdownLinks from 'components/common/MarkdownLinks'
import Banner from 'components/home/Banner'
import Introduction from 'components/home/Introduction'
import Footer from '../components/Footer'
import ReactCompass from '../components/home/ReactCompass'
import ReadyToUse from '../components/home/ReadyToUse'

export default function Home() {
  return (
    <>
      <Head
        title='Compass Design: The React component library you always wanted'
        description='Compass Design: The React component library you always wanted'
      ></Head>
      <main id='main-content'>
        <MarkdownLinks />
        <Banner />
        <ReadyToUse />
        <Introduction />
        <ReactCompass />
        <Divider />
      </main>
      <Footer />
    </>
  )
}
