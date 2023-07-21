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
  contexts: './contexts',
  layouts: './layouts',
}

const {version: transformRuntimeVersion} = fse.readJSONSync(
  require.resolve('@babel/runtime-corejs2/package.json'),
)

module.exports = {
  presets: [
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
        ['babel-plugin-react-remove-properties'],
      ],
    },
  },
}
