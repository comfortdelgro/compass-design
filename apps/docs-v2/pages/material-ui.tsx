import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider'
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner'
import MaterialComponents from 'docs/src/components/productMaterial/MaterialComponents'
import MaterialHero from 'docs/src/components/productMaterial/MaterialHero'
import MaterialHeroEnd from 'docs/src/components/productMaterial/MaterialHeroEnd'
import MaterialStyling from 'docs/src/components/productMaterial/MaterialStyling'
import MaterialTheming from 'docs/src/components/productMaterial/MaterialTheming'
import AppFooter from 'docs/src/layouts/AppFooter'
import AppHeader from 'docs/src/layouts/AppHeader'
import Head from 'docs/src/modules/components/Head'

export default function Core() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="Material UI: An open-source React component library that implements Google's Material Design"
        description='A comprehensive collection of prebuilt components that are ready for use in production right out of the box.'
        card='/static/social-previews/core-preview.jpg'
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository='https://github.com/mui/material-ui' />
      <main id='main-content'>
        <MaterialHero />
        <MaterialComponents />
        <MaterialTheming />
        <MaterialStyling />
        <MaterialHeroEnd />
      </main>
      <AppFooter stackOverflowUrl='https://stackoverflow.com/questions/tagged/material-ui' />
    </BrandingCssVarsProvider>
  )
}
