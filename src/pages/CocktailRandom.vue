<template>
    <transition>
        
<div class="overflow-hidden">
    
    <AppLayout :imgUrl="rootStore.cocktail?.strDrinkThumb" >

    <div class="flex flex-col justify-center items-center w-screen md:w-1/2" v-if="rootStore.cocktail">
        <section class="pt-[80px] p-0 text-center justify-center">
            <div class="uppercase text-[32px] font-medium tracking-wide">{{rootStore.cocktail.strDrink}}</div>
            <hr class="w-[100px] h-2 mx-auto mt-[32px] mb-0 ">
            <img :src="rootStore.cocktail?.strDrinkThumb" class="w-[300px] mx-auto md:hidden my-4" />
            </section>
        <section>
            <ul class="w-[200px] md:w-[560px] pt-[50px] pb-[80px] text-start relative ">
               
                <li v-for="(item,key) in ingridients" :key="key" 
                    class="item mb-5 [&>*:last-child]:mb-0 relative text-sm 
                   ">
                        {{ item.name }} 
                        <template v-if="item.measure">
                            | {{ item.measure }}

                        </template>
                </li>
            </ul>
        </section>
        <section>
            <swiper
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="w-[300px] md:w-[512px] mb-10"
          
          >
            <swiper-slide v-for="(item,key) in swiperIngridients" :key="key" 
            class="text-sm flex flex-col text-center gap-y-2 justify-start items-center">
                <img :src="`${IMG_INGR}${item}-Small.png`" class="w-[100px] mx-auto" />
                <div>{{ item }}</div>
            </swiper-slide>
            
            </swiper>
        </section>
        <article class="text-center text-sm leading-8 w-[300px] md:w-[516px] text-slate-300 mb-14">
            {{ rootStore.cocktail?.strInstructions }}
        </article>
        
    </div>
    </AppLayout>
</div>
</transition>
</template>

<script lang="ts" setup>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';


    // Import Swiper styles
    import 'swiper/css';
    import { computed } from 'vue';
    import AppLayout from '../components/AppLayout.vue'
    import { useRootStore } from '../stores/root';
import { IMG_INGR } from '../constants';
    // console.log("open cocktail")

    import 'swiper/css/navigation';

    // const route = useRoute();
    // const router = useRouter();
    // const cocktailId = computed(()=>route.params).value.cid;
    // console.log(cocktailId, String(cocktailId));
    const rootStore = useRootStore();
    rootStore.getRandomCocktail();
    // console.log(rootStore.cocktail);
    // const curCocktail = ref(null);
    // curCocktail.value = 
    const ingridients = computed(()=>{
        const ingr = [];
        for(let i = 0 ; i < 15; i++){
            if(!rootStore.cocktail || !rootStore.cocktail['strIngredient'+(i+1)]) break;
            console.log(rootStore.cocktail['strIngredient'+(i+1)]);
            ingr[i] = {name: rootStore.cocktail['strIngredient'+(i+1)],measure:rootStore.cocktail['strMeasure'+(i+1)]};

        }

        return ingr;
    });
        
    const swiperIngridients = computed(()=>{
        const ingr = [];
        for(let i = 0 ; i < 15; i++){
            if(!rootStore.cocktail || !rootStore.cocktail['strIngredient'+(i+1)]) break;
            console.log(rootStore.cocktail['strIngredient'+(i+1)]);
            ingr[i] =rootStore.cocktail['strIngredient'+(i+1)];

        }

        return ingr;
    });
        
   
    const onSwiper = (swiper: any) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

    console.table(ingridients[0]);
</script>

<style  lang="sass" scope>
@import '../assets/styles/main'

hr
    border-color:$accent

.item
    &::before
        content: ''
        position: absolute
        top: 50%
        left:-40px 
        transform: translateY(-50%)
        width:17px
        height: 17px
        background-image: url('../assets/img/bullet.svg')
        background-repeat: no-repeat
   

    
</style>