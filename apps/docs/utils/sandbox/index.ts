import {getSandboxDependencies, openSandbox} from './common'
import * as CRA from './const'

const sandbox = (demo: {
  title: string
  language: string
  raw: string
  githubLocation: string
}) => {
  const {title, githubLocation: description} = demo

  const files: Record<string, object> = {
    'public/index.html': {
      content: CRA.getHtml(demo),
    },
    [`index.tsx`]: {
      content: CRA.getRootIndex(),
    },
    [`demo.tsx`]: {
      content: demo.raw,
    },
    'tsconfig.json': {
      content: CRA.getTsconfig(),
    },
  }

  const {dependencies, devDependencies} = getSandboxDependencies(demo)

  files['package.json'] = {
    content: {
      description,
      dependencies,
      devDependencies,
      main: 'index.tsx',
      scripts: {
        start: 'react-scripts start',
      },
    },
  }

  return {
    title,
    description,
    files,
    dependencies,
    devDependencies,
    openSandbox: (initialFile?: string) => openSandbox({files, initialFile}),
  }
}

export default sandbox
