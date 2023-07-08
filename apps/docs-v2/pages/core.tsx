import * as React from 'react';
import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import CoreHero from 'docs/src/components/productMaterial/MaterialHero';
import CoreComponents from 'docs/src/components/productMaterial/MaterialComponents';
import CoreTheming from 'docs/src/components/productMaterial/MaterialTheming';
import CoreStyling from 'docs/src/components/productMaterial/MaterialStyling';
import CoreHeroEnd from 'docs/src/components/productMaterial/MaterialHeroEnd';
import References, { CORE_CUSTOMERS } from 'docs/src/components/home/References';
import AppFooter from 'docs/src/layouts/AppFooter';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';

export default function Core() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="MUI Core: Ready to use components, free forever"
        description="Get a growing list of React components, ready-to-use, free forever and with accessibility always in mind."
        card="/static/social-previews/core-preview.jpg"
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/material-ui" />
      <main id="main-content">
        <CoreHero />
        <References companies={CORE_CUSTOMERS} />
        <CoreComponents />
        <CoreTheming />
        <CoreStyling />
        <CoreHeroEnd />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/material-ui" />
    </BrandingCssVarsProvider>
  );
}
