import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store, { key } from './store/index';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// base api
console.log(import.meta.env.VITE_APP_BASE_API);

// title
console.log(import.meta.env.VITE_APP_TITLE);

const app = ;
createApp(App)app.use(router).use(store, key).mount('#app')
