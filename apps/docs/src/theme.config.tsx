import {DocsThemeConfig} from 'nextra-theme-docs'

const githubUrl = 'https://github.com/comfortdelgro/workbench-design'

const nextraResets = {
  chat: false,
  footer: false,
}

const nextraConfig: DocsThemeConfig = {
  ...(nextraResets as Record<string, unknown>),
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
          backgroundImage: 'url(/logo.svg)',
        }}
      />
      <div className='font-bold'>Admin Portal Design System</div>
    </div>
  ),
}

export default nextraConfig
