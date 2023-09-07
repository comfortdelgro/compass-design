process.env.NODE_ENV = 'production'

function withDocsInfra(nextConfig) {
  return {
    trailingSlash: true,
    // Can be turned on when https://github.com/vercel/next.js/issues/24640 is fixed
    output: 'export',
    optimizeFonts: false,
    reactStrictMode: true,
    ...nextConfig,
    env: {
      ...nextConfig.env,
    },
    images: {
      unoptimized: true,
    },
    assetPrefix: `/${process.env.BASE_PATH}/`,
    basePath: process.env.BASE_PATH || '',
    experimental: {
      scrollRestoration: true,
      esmExternals: false,
      ...nextConfig.experimental,
    },
    eslint: {
      ignoreDuringBuilds: true,
      ...nextConfig.eslint,
    },
    typescript: {
      ignoreBuildErrors: true,
      ...nextConfig.typescript,
    },
  }
}

module.exports = withDocsInfra
