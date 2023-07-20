const path = require('path')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const withDocsInfra = require('./nextConfigDocsInfra')
const {findPages} = require('./utils/find')
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
      r.resourceQuery = {not: [/raw/]}
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
            oneOf: [
              {
                resourceQuery: /@comfortdelgro\/compass-design/,
                use: [
                  options.defaultLoaders.babel,
                  {
                    loader: require.resolve('@comfortdelgro/markdown/loader'),
                    options: {
                      ignoreLanguagePages: [],
                    },
                  },
                ],
              },
              {
                // used in some /getting-started/templates
                type: 'asset/source',
              },
            ],
          },
          {
            test: /\.(js|mjs|tsx|ts)$/,
            resourceQuery: {not: [/raw/]},
            include: [workspaceRoot],
            exclude: /(node_modules|mui-icons-material)/,
            use: options.defaultLoaders.babel,
          },
          {
            resourceQuery: /raw/,
            type: 'asset/source',
          },
        ]),
      },
    }
  },
  // Next.js provides a `defaultPathMap` argument, we could simplify the logic.
  // However, we don't in order to prevent any regression in the `findPages()` method.
  exportPathMap: () => {
    const pages = findPages()
    const map = {}

    function traverse(pages2, userLanguage) {
      pages2.forEach((page) => {
        if (!page.children) {
          map[
            `${page.pathname.replace(
              /^(\/[^/]+)?\/api-docs\/(.*)/,
              '$1/api/$2',
            )}`
          ] = {
            page: page.pathname,
            query: {
              userLanguage,
            },
          }
          return
        }

        traverse(page.children, userLanguage)
      })
    }

    traverse(pages, 'en')
    return map
  },
  // rewrites has no effect when run `next export` for production
  rewrites: async () => {
    return [
      // Make sure to include the trailing slash if `trailingSlash` option is set
      {source: '/api/:rest*/', destination: '/api-docs/:rest*/'},
      {
        source: `/static/x/:rest*`,
        destination: 'http://0.0.0.0:3001/static/x/:rest*',
      },
    ]
  },
})
