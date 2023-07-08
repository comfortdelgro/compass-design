import * as React from 'react';
import Head from 'docs/src/modules/components/Head';
import SignInSideTemplate from 'docs/data/joy/getting-started/templates/sign-in-side/App';
import { NextNProgressBar } from 'docs/src/modules/components/AppFrame';

export default function SignInSide() {
  return (
    <React.Fragment>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextNProgressBar />
      <SignInSideTemplate />
    </React.Fragment>
  );
}
