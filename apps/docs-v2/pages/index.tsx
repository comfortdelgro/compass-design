import Divider from '@mui/material/Divider'
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider'
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner'
import Hero from 'docs/src/components/home/Hero'
import HeroEnd from 'docs/src/components/home/HeroEnd'
import ProductSuite from 'docs/src/components/home/ProductSuite'
import AppFooter from 'docs/src/layouts/AppFooter'
import AppHeader from 'docs/src/layouts/AppHeader'
import Head from 'docs/src/modules/components/Head'

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title='Compass Design: The React component library you always wanted'
        description='Compass Design: The React component library you always wanted'
      ></Head>
      <AppHeaderBanner />
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
