import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // styleImport({
    //   libs: [{
    //    libraryName: 'ant-design-vue',
    //    esModule: true,
    //    resolveStyle: (name) => {
    //     return `ant-design-vue/es/${name}/style/css`;
    //    },
    //   }]
    //  })
    ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    open: false,
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});
