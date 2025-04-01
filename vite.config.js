import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cafes: resolve(__dirname, 'cafes.html'),
        conhecimentos: resolve(__dirname, 'conhecimentos.html')
      },
      output: {
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js'
      }
    }
  }
})