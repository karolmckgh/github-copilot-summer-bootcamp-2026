import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { deckPlugin, tailwindPlugin } from '@deckio/deck-engine/vite'

// Served from GitHub Pages project subpath:
// https://karolmckgh.github.io/github-copilot-summer-bootcamp-2026/
export default defineConfig({
  base: '/github-copilot-summer-bootcamp-2026/',
  plugins: [
    react({
      include: [/\.[jt]sx?$/, /node_modules\/@deckio\/deck-engine\/.+\.jsx$/],
    }),
    deckPlugin({ inlineEditing: false }),
    tailwindPlugin(),
  ],
  server: {
    fs: {
      allow: ['..', '../..'],
    },
  },
})
