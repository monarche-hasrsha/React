git remote add origin git@github.com:monarche-hasrsha/React.gitimport { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
