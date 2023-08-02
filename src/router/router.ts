import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Coctail from '../pages/Cocktail.vue';
import CocktailRandom from '../pages/CocktailRandom.vue';

 const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes:[
      { path: '/', name:'Home', component: Home,   meta: { transition: 'slide-left' }, },
      { path: '/cocktails/:cid', name:'Cocktail', component: Coctail,   meta: { transition: 'slide-right' }, },
      { path: '/random', name:'randomCoctail', component: CocktailRandom,  meta: { transition: 'slide-right' }, },
    ], // short for `routes: routes`
  })

  export default router;