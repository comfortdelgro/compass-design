/* eslint-disable react-hooks/rules-of-hooks */

import {DocsThemeConfig, useConfig} from 'nextra-theme-docs'

const githubUrl = 'https://github.com/comfortdelgro/compass-design'

const nextraResets = {
  chat: false,
  footer: false,
  unstable_faviconGlyph: '✦',
}

const nextraConfig: DocsThemeConfig = {
  ...(nextraResets as Record<string, unknown>),
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
          backgroundSize: 'cover'
        }}
      />
      <div style={{fontWeight: 700}}>Compass Design</div>
    </div>
  ),
  getNextSeoProps: () => {
    const {frontMatter} = useConfig()
    return {
      description:
        frontMatter.description || "Comfortdelgro's Compass Design System",
      openGraph: {
        images: [
          {
            url:
              frontMatter.image ||
              'https://comfortdelgro.github.io/compass-design/banner.png',
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
