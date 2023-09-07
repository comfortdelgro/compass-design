process.env.NODE_ENV = 'production'

function withDocsInfra(nextConfig) {
  return {
    output: 'export',
    trailingSlash: true,
    // Can be turned on when https://github.com/vercel/next.js/issues/24640 is fixed
    optimizeFonts: false,
    reactStrictMode: true,
    ...nextConfig,
    env: {
      ...nextConfig.env,
    },
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
