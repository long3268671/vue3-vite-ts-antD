import  styleImport from 'vite-plugin-style-import';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    }),
————————————————
版权声明：本文为CSDN博主「FORMAT-qi」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_46602773/article/details/116048113
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  },
  build: {
    // 去除console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: false,
    https: false,
    cors: true, // 允许跨域
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
