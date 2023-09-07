process.env.NODE_ENV = 'production'

function withDocsInfra(nextConfig) {
  return {
    trailingSlash: true,
    // Can be turned on when https://github.com/vercel/next.js/issues/24640 is fixed
    optimizeFonts: false,
    reactStrictMode: true,
    ...nextConfig,
    env: {
      ...nextConfig.env,
    },
    images: {
      unoptimized: true,
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
    output: 'export',
  }
}

module.exports = withDocsInfra
