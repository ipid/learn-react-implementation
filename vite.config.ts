import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'ipidCreateElement',
    jsxFragment: 'IpidFragment',
  },
})
