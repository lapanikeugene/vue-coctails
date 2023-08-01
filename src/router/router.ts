import VueRouter from 'vue-router'
import App from '../App'
export const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes:[
      { path: '/', component: App },
      { path: '/about', component: About },
    ], // short for `routes: routes`
  })