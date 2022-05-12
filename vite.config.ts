// @ts-ignore

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        // 自定义的主题色
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    vue(), 
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    })],
  server: {
      open: true,
      port: 8088,
      host: '0.0.0.0',
      proxy: {
        // 选项写法
        '/dev': {
          target: 'http://10.10.12.219:9001',
          // target:'http://58.42.237.177:8082/dev',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev/, '')
        },
        '/lin': {
          // target:'http://58.42.237.177:8082/lin',
          target: 'http://10.10.12.219:9002',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/lin/, '')
        }
      }
    }
})


