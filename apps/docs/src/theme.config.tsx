/* eslint-disable react-hooks/rules-of-hooks */

import {DocsThemeConfig} from 'nextra-theme-docs/.'

const githubUrl = 'https://github.com/comfortdelgro/compass-design'

const nextraConfig: DocsThemeConfig = {
  banner: {
    key: 'work-in-progress',
    text: 'This site is a heavy work in progress. Expect bugs & changes.',
  },
  docsRepositoryBase: `${githubUrl}/blob/main/apps/docs`,
  project: {
    link: 'https://github.com/comfortdelgro/compass-design',
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  logo: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundImage: 'url(/compass-design/logo.svg)',
          width: '1.75rem',
          aspectRatio: '1 / 1',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div style={{fontWeight: 700}}>Compass Design</div>
    </div>
  ),
  useNextSeoProps: () => {
    return {
      description: "Comfortdelgro's Compass Design System",
      openGraph: {
        images: [
          {
            url: 'https://comfortdelgro.github.io/compass-design/banner.png',
          },
        ],
      },
      titleTemplate: '%s – Compass Design System',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://comfortdelgro.github.io/compass-design',
      },
    }
  },
}

export default nextraConfig
