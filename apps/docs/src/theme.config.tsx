/* eslint-disable react-hooks/rules-of-hooks */

import {DocsThemeConfig, useConfig} from 'nextra-theme-docs'

const githubUrl = 'https://github.com/comfortdelgro/workbench-design'

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
    link: 'https://github.com/comfortdelgro/workbench-design',
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  logo: () => (
    <div className='flex flex-row items-center space-x-2'>
      <div
        className='w-7 aspect-square bg-no-repeat bg-cover'
        style={{
          backgroundImage: 'url(/workbench-design/logo.svg)',
        }}
      />
      <div className='font-bold'>Admin Portal Design System</div>
    </div>
  ),
  getNextSeoProps: () => {
    const {frontMatter} = useConfig()
    return {
      description:
        frontMatter.description || "Comfortdelgro's Admin Portal Design System",
      openGraph: {
        images: [
          {
            url:
              frontMatter.image ||
              'https://comfortdelgro.github.io/workbench-design/banner.png',
          },
        ],
      },
      titleTemplate: '%s – Admin Portal Design System',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://comfortdelgro.github.io/workbench-design',
      },
    }
  },
}

export default nextraConfig
