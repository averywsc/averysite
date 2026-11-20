import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  publicDir: false,
  server: { port: 5173, host: true, headers: { 'Cache-Control': 'no-store' } },
  build: {
    outDir: 'assets',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1200,
    target: 'es2022',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        gallery: 'src/main.js',
        pages: 'src/pages-entry.js',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const n = assetInfo.names?.[0] || assetInfo.name || ''
          if (n.endsWith('.css')) return '[name][extname]'
          return '[name]-[hash][extname]'
        },
      },
    },
  },
})
