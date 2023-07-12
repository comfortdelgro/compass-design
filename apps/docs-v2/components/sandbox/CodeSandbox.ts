// @ts-ignore
import LZString from 'lz-string'
import addHiddenInput from 'utils/addHiddenInput'
import * as CRA from './CreateReactApp'
import SandboxDependencies from './Dependencies'
import getFileExtension from './FileExtension'
import {CodeStyling, CodeVariant, Product} from './types'

function compress(object: any) {
  return LZString.compressToBase64(JSON.stringify(object))
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, '') // Remove ending '='
}

function openSandbox({files, codeVariant, initialFile = '/App'}: any) {
  const extension = codeVariant === 'TS' ? '.tsx' : '.js'
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
      initialFile.match(/(\.tsx|\.ts|\.js)$/) ? '' : extension
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
  codeVariant: CodeVariant
  githubLocation: string
  productId?: Product
  codeStyling: CodeStyling
}) => {
  const ext = getFileExtension(demo.codeVariant)
  const {title, githubLocation: description} = demo

  const files: Record<string, object> = {
    'public/index.html': {
      content: CRA.getHtml(demo),
    },
    [`index.${ext}`]: {
      content: CRA.getRootIndex(),
    },
    [`demo.${ext}`]: {
      content: demo.raw,
    },
    ...(demo.codeVariant === 'TS' && {
      'tsconfig.json': {
        content: CRA.getTsconfig(),
      },
    }),
  }

  const {dependencies, devDependencies} = SandboxDependencies(demo, {
    commitRef: process.env.PULL_REQUEST_ID ? process.env.COMMIT_REF : undefined,
  })

  files['package.json'] = {
    content: {
      description,
      dependencies,
      devDependencies,
      ...(demo.codeVariant === 'TS' && {
        main: 'index.tsx',
        scripts: {
          start: 'react-scripts start',
        },
      }),
    },
  }

  return {
    title,
    description,
    files,
    dependencies,
    devDependencies,
    openSandbox: (initialFile?: string) =>
      openSandbox({files, codeVariant: demo.codeVariant, initialFile}),
  }
}

export default {
  createReactApp,
}
