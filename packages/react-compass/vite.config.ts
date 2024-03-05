import react from '@vitejs/plugin-react-swc'
import swcPreserveDirectives from 'rollup-swc-preserve-directives'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: [
        '**/__tests__/**/*',
        '**/*.test-d.ts',
        '*.stories',
        '.storybook',
      ],
      include: ['src'],
    }),
    swcPreserveDirectives(),
  ],
  // library mode
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'compass',
      fileName: 'compass',
      formats: ['es', 'umd', 'cjs'],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  css: {
    modules: {},
  },
})
