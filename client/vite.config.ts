import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const certPath = path.resolve(__dirname, 'localhost+2.pem')
const keyPath = path.resolve(__dirname, 'localhost+2-key.pem')
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: '127.0.0.1',
    https: {
      cert: fs.readFileSync(certPath),
      key: fs.readFileSync(keyPath),
    }
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    })
  ],
})
