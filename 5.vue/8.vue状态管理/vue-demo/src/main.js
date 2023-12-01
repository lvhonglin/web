import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
//引入store默认就会引入store下的index.js
import store from './store'
createApp(App).use(router).use(store).mount('#app')
