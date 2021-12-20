import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from '@/'
// base api
console.log(import.meta.env.VITE_APP_BASE_API);

// title
console.log(import.meta.env.VITE_APP_TITLE);

createApp(App).use(router).mount('#app')
