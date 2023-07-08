import Divider from '@mui/material/Divider'
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider'
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner'
import HeroEnd from 'docs/src/components/home/HeroEnd'
import Testimonials from 'docs/src/components/home/Testimonials'
import ValueProposition from 'docs/src/components/home/ValueProposition'
import TemplateDemo from 'docs/src/components/productTemplate/TemplateDemo'
import TemplateHero from 'docs/src/components/productTemplate/TemplateHero'
import AppFooter from 'docs/src/layouts/AppFooter'
import AppHeader from 'docs/src/layouts/AppHeader'
import Head from 'docs/src/modules/components/Head'

export default function Templates() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title='Fully built templates for your app - MUI'
        description="A collection of 4.5 average rating templates, selected and curated by MUI's team of maintainers to get your projects up and running today."
        card='/static/social-previews/templates-preview.jpg'
      />
      <AppHeaderBanner />
      <AppHeader />
      <main id='main-content'>
        <TemplateHero />
        <ValueProposition />
        <TemplateDemo />
        <Testimonials />
        <HeroEnd />
      </main>
      <Divider />
      <AppFooter />
    </BrandingCssVarsProvider>
  )
}
