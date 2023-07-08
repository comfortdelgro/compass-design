import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider'
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner'
import XComponents from 'docs/src/components/productX/XComponents'
import XDataGrid from 'docs/src/components/productX/XDataGrid'
import XHero from 'docs/src/components/productX/XHero'
import XPlans from 'docs/src/components/productX/XPlans'
import XRoadmap from 'docs/src/components/productX/XRoadmap'
import XTheming from 'docs/src/components/productX/XTheming'
import AppFooter from 'docs/src/layouts/AppFooter'
import AppHeader from 'docs/src/layouts/AppHeader'
import Head from 'docs/src/modules/components/Head'

export default function X() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title='MUI X: Performant advanced components'
        description="Build data-rich applications using a growing list of advanced React components. We're kicking it off with the most powerful Data Grid on the market."
        card='/static/social-previews/x-preview.jpg'
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository='https://github.com/mui/mui-x' />
      <main id='main-content'>
        <XHero />
        <XComponents />
        <XDataGrid />
        <XTheming />
        <XPlans />
        <XRoadmap />
      </main>
      <AppFooter stackOverflowUrl='https://stackoverflow.com/questions/tagged/mui-x' />
    </BrandingCssVarsProvider>
  )
}
