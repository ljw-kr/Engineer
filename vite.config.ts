/*
 * @Author: zoie.lai
 * @Date: 2022-01-01 15:24:12
 * @LastEditor: zoie.lai
 * @LastEditTime: 2022-01-06 17:41:49
 */
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const env = process.argv[process.argv.length - 1];

const IS_PROD_MODE = env === 'production';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: IS_PROD_MODE,
  },
  resolve: {
    alias: [
      {find: /^~/, replacement: ''},
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true
      }
    }
  }
})
