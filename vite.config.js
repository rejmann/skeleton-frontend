import { defineConfig } from 'vite'
import { join } from 'path'
import react from '@vitejs/plugin-react'
import { readdirSync } from 'fs'
import symfonyPlugin from 'vite-plugin-symfony'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig((config) => ({
  plugins: [
    react({
      include: './assets/**/*.tsx',
    }),
    symfonyPlugin(),
    tsconfigPaths(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        app: join('assets/js', 'app.ts'),
        ...getControllerInputs('./assets/js/controller'),
      },
    },
    sourcemap: config.mode === 'development',
  },
  server: {
    hmr: {
      host: 'localhost',
    },
    port: 5173,
    cors: true,
    origin: 'http://localhost:5173',
  },
}))

function getControllerInputs(controllerPath) {
  const controllerInputs = {}
  const fileRegex = /\.(js|ts)$/i

  readdirSync(controllerPath)
    .filter((file) => !file.startsWith('.') && fileRegex.test(file))
    .forEach((file) => {
      const fileName = file.replace(/\.(js|ts)$/i, '')
      controllerInputs[`controller/${fileName}`] = join(controllerPath, file)
    })

  return controllerInputs
}
