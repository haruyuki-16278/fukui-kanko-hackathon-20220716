import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  root: 'src',
  plugins: [vanillaExtractPlugin()]
})
