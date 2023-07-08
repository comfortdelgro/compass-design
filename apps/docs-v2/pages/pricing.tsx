import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider'
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner'
import HeroEnd from 'docs/src/components/home/HeroEnd'
import EarlyBird from 'docs/src/components/pricing/EarlyBird'
import FAQ from 'docs/src/components/pricing/FAQ'
import HeroPricing from 'docs/src/components/pricing/HeroPricing'
import PricingList from 'docs/src/components/pricing/PricingList'
import PricingTable from 'docs/src/components/pricing/PricingTable'
import WhatToExpect from 'docs/src/components/pricing/WhatToExpect'
import AppFooter from 'docs/src/layouts/AppFooter'
import AppHeader from 'docs/src/layouts/AppHeader'
import Head from 'docs/src/modules/components/Head'

export default function Pricing() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title='Pricing - MUI'
        description='The community edition lets you get going right away. Switch to a commercial plan for more components & technical support.'
      />
      <AppHeaderBanner />
      <AppHeader />
      <main id='main-content'>
        <HeroPricing />
        <PricingList /> {/* Mobile, Tablet */}
        <Container sx={{display: {xs: 'none', md: 'block'}}}>
          <PricingTable /> {/* Desktop */}
        </Container>
        <EarlyBird />
        <WhatToExpect />
        <Divider sx={{mx: 'auto', maxWidth: 1200}} />
        <FAQ />
        <HeroEnd />
        <Divider />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  )
}
