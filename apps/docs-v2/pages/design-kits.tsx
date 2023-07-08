import Divider from '@mui/material/Divider'
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider'
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner'
import HeroEnd from 'docs/src/components/home/HeroEnd'
import Testimonials from 'docs/src/components/home/Testimonials'
import DesignKitDemo from 'docs/src/components/productDesignKit/DesignKitDemo'
import DesignKitFAQ from 'docs/src/components/productDesignKit/DesignKitFAQ'
import DesignKitHero from 'docs/src/components/productDesignKit/DesignKitHero'
import DesignKitValues from 'docs/src/components/productDesignKit/DesignKitValues'
import AppFooter from 'docs/src/layouts/AppFooter'
import AppHeader from 'docs/src/layouts/AppHeader'
import Head from 'docs/src/modules/components/Head'

export default function DesignKits() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title='MUI in your favorite design tool'
        description='Pick your favorite design tool to enjoy and use MUI components. Boost consistency and facilitate communication when working with developers.'
        card='/static/social-previews/designkits-preview.jpg'
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository='https://github.com/mui/mui-design-kits' />
      <main id='main-content'>
        <DesignKitHero />
        <DesignKitValues />
        <DesignKitDemo />
        <DesignKitFAQ />
        <Testimonials />
        <HeroEnd />
      </main>
      <Divider />
      <AppFooter />
    </BrandingCssVarsProvider>
  )
}
