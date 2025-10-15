import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset paths so built files work when served from a subpath
  // or on static hosts that don't use a domain root. This prevents requests
  // for modules (e.g. /src/main.jsx) from resolving to index.html (text/html)
  // which causes the MIME type module error in the browser.
  base: './',
  plugins: [react()],
})
