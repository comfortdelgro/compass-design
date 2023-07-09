import Divider from '@mui/material/Divider'
import Head from 'components/common/Head'
import Templates from 'components/home/Templates'
import BrandingCssVarsProvider from 'components/layouts/BrandingCssVarsProvider'
import Hero from '../components/home/Hero'
import ReactCompass from '../components/home/ReactCompass'
import AppFooter from '../components/layouts/AppFooter'
import AppHeader from '../components/layouts/AppHeader'

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title='Compass Design: The React component library you always wanted'
        description='Compass Design: The React component library you always wanted'
      ></Head>
      <AppHeader />
      <main id='main-content'>
        <Hero />
        <Templates />
        <ReactCompass />
        <Divider />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  )
}
