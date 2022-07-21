import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
  },
  plugins: [
    vanillaExtractPlugin()
  ]
})
