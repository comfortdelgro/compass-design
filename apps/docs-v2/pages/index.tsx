import Divider from '@mui/material/Divider'
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider'
import Head from 'docs/src/modules/components/Head'
import Hero from '../components/home/Hero'
import HeroEnd from '../components/home/HeroEnd'
import ProductSuite from '../components/home/ProductSuite'
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
        <ProductSuite />
        <HeroEnd />
        <Divider />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  )
}
