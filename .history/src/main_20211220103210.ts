import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store, { key } from './store/index';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {useAntd} from '@/plugins/ant-design-vue/index'
let app = createApp(App)
// base api
console.log(import.meta.env.VITE_APP_BASE_API);

// title
console.log(import.meta.env.VITE_APP_TITLE);


app.use(router).use(store, key).use(Antd).mount('#app')

