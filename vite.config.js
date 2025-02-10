import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base:'/elifkorkut.github.io/',
  plugins: [vue()],
})

module.exports = {
publicPath: /elifkorkut.github.io/
}

