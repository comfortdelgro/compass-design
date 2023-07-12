const fse = require('fs-extra')
const path = require('path')

const alias = {
  docs: './',
  modules: '../modules',
  pages: './pages',
  components: './components',
  constants: './constants',
  utils: './utils',
  types: './types',
}

const {version: transformRuntimeVersion} = fse.readJSONSync(
  require.resolve('@babel/runtime-corejs2/package.json'),
)

module.exports = {
  // TODO: Enable once nextjs uses babel 7.13
  // assumptions: {
  //   noDocumentAll: true,
  // },
  presets: [
    // backport of https://github.com/vercel/next.js/pull/9511
    [
      'next/babel',
      {
        'preset-react': {runtime: 'automatic'},
        'transform-runtime': {corejs: 2, version: transformRuntimeVersion},
      },
    ],
  ],
  plugins: [
    'babel-plugin-optimize-clsx',
    // for IE11 support
    '@babel/plugin-transform-object-assign',
    [
      'babel-plugin-module-resolver',
      {
        alias,
        transformFunctions: ['require', 'require.context'],
      },
    ],
  ],
  ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
  env: {
    production: {
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        [
          'babel-plugin-react-remove-properties',
          {properties: ['data-mui-test']},
        ],
        ['babel-plugin-transform-react-remove-prop-types', {mode: 'remove'}],
      ],
    },
  },
}
