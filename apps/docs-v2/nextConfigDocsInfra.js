let DEPLOY_ENV = 'development'

// Same as process.env.PULL_REQUEST_ID
if (process.env.CONTEXT === 'deploy-preview') {
  DEPLOY_ENV = 'pull-request'
}

if (
  process.env.CONTEXT === 'production' ||
  process.env.CONTEXT === 'branch-deploy'
) {
  DEPLOY_ENV = 'production'
}

// The 'master' and 'next' branches are NEVER a production environment. We use these branches for staging.
if (
  (process.env.CONTEXT === 'production' ||
    process.env.CONTEXT === 'branch-deploy') &&
  (process.env.HEAD === 'master' || process.env.HEAD === 'next')
) {
  DEPLOY_ENV = 'staging'
}
/**
 * ====================================================================================
 */

process.env.DEPLOY_ENV = DEPLOY_ENV

function withDocsInfra(nextConfig) {
  return {
    trailingSlash: true,
    // Can be turned on when https://github.com/vercel/next.js/issues/24640 is fixed
    optimizeFonts: false,
    reactStrictMode: true,
    ...nextConfig,
    env: {
      DEPLOY_ENV,
      ...nextConfig.env,
      COMMIT_REF: process.env.COMMIT_REF,
      PULL_REQUEST_ID: process.env.REVIEW_ID,
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
