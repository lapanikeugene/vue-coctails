import { createApp } from 'vue'
import './style.css'
import './assets/styles/main.sass'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(createPinia()).use(ElementPlus).mount('#app')
