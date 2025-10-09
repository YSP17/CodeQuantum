import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'   // <-- use -swc
export default defineConfig({
  plugins: [react()],
  base: '/CodeQuantum/'                        // <-- repo name
})


