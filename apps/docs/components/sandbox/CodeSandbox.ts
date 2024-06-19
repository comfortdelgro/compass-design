// @ts-ignore
import LZString from 'lz-string'
import addHiddenInput from 'utils/addHiddenInput'
import * as CRA from './CreateReactApp'
import SandboxDependencies from './Dependencies'

function compress(object: any) {
  return LZString.compressToBase64(JSON.stringify(object))
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, '') // Remove ending '='
}

function openSandbox({files, initialFile = '/App'}: any) {
  const parameters = compress({files})

  // ref: https://codesandbox.io/docs/api/#define-api
  const form = document.createElement('form')
  form.method = 'POST'
  form.target = '_blank'
  form.action = 'https://codesandbox.io/api/v1/sandboxes/define'
  addHiddenInput(form, 'parameters', parameters)
  addHiddenInput(
    form,
    'query',
    `file=${initialFile}${
      initialFile.match(/(\.tsx|\.ts|\.js)$/) ? '' : '.tsx'
    }`,
  )
  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}

const createReactApp = (demo: {
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

  const {dependencies, devDependencies} = SandboxDependencies(demo, {
    commitRef: undefined,
  })

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

export default {
  createReactApp,
}
