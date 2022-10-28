/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  unstable_staticImage: true,
  unstable_flexsearch: {
    codeblock: false,
  },
})

module.exports = withNextra(nextConfig)
