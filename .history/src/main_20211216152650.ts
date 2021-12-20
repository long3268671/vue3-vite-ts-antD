import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store, { key } from './store/index';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
app.config.productionTip = false;
// base api
console.log(import.meta.env.VITE_APP_BASE_API);

// title
console.log(import.meta.env.VITE_APP_TITLE);

const app = createApp();
createApp(App).use(router).use(store, key).mount('#app')
