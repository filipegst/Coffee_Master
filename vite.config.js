import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cafes: resolve(__dirname, 'cafes.html'),
        conhecimentos: resolve(__dirname, 'conhecimentos.html')

      }
    }
  }
}