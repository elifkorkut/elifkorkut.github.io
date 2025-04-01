import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // default entry
        about: 'aboutme.html',
        resume: 'resume.html',
      
        // Add other HTML files here
      },
    },
  },
  base: '/', // IMPORTANT for GitHub Pages
 
})
