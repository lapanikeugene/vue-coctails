import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Coctail from '../pages/Cocktail.vue';
import CocktailRandom from '../pages/CocktailRandom.vue';

 const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes:[
      { path: '/', name:'Home', component: Home },
      { path: '/coctails/:cid', name:'Cocktail', component: Coctail },
      { path: '/random', name:'randomCoctail', component: CocktailRandom },
    ], // short for `routes: routes`
  })

  export default router;