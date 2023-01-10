import {initPlugin} from '@frsource/cypress-plugin-visual-regression-diff/plugins'
import {defineConfig} from 'cypress'

export default defineConfig({
  projectId: 'n2mq23',
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config)
    },
  },
  component: {
    setupNodeEvents(on, config) {
      initPlugin(on, config)
    },
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
