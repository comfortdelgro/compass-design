/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path')
const withDocsInfra = require('./nextConfigDocsInfra')
const workspaceRoot = path.join(__dirname, '../')

module.exports = withDocsInfra({
  webpack: (config, options) => {
    const plugins = config.plugins.slice()
    if (
      options.isServer &&
      (options.nextRuntime === undefined || options.nextRuntime === 'nodejs')
    ) {
      const [nextExternals, ...externals] = config.externals

      config.externals = [
        (ctx, callback) => {
          return nextExternals(ctx, callback)
        },
        ...externals,
      ]
    }

    config.module.rules.forEach((r) => {
      r.resourceQuery = { not: [/raw/] }
    })

    return {
      ...config,
      plugins,
      resolve: {
        ...config.resolve,
        // resolve .tsx first
        extensions: [
          '.tsx',
          ...config.resolve.extensions.filter(
            (extension) => extension !== '.tsx',
          ),
        ],
      },
      module: {
        ...config.module,
        rules: config.module.rules.concat([
          {
            test: /\.md$/,
            use: [
              options.defaultLoaders.babel,
              {
                loader: require.resolve('@comfortdelgro/markdown/loader')
              },
            ],
          },
          {
            test: /\.(js|mjs|tsx|ts)$/,
            resourceQuery: { not: [/raw/] },
            include: [workspaceRoot],
            use: options.defaultLoaders.babel,
          }
        ]),
      },
    }
  },
})
