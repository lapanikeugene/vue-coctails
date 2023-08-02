<template>
    <transition>
        
<div class="overflow-hidden">
    
    <AppLayout :imgUrl="rootStore.cocktail?.strDrinkThumb" >

    <div class="flex flex-col justify-center items-center w-1/2" v-if="rootStore.cocktail">
        <section class="pt-[80px] p-0 text-center justify-center">
            <div class="uppercase text-[32px] font-medium tracking-wide">{{rootStore.cocktail.strDrink}}</div>
            <hr class="w-[100px] h-2 mx-auto mt-[32px] mb-0 ">
            </section>
        <section>
            <ul class="w-[560px] pt-[50px] pb-[80px] text-start relative ">
               
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
        <article class="text-center text-sm leading-8 w-[516px] text-slate-300">
            {{ rootStore.cocktail?.strInstructions }}
        </article>
        
    </div>
    </AppLayout>
</div>
</transition>
</template>

<script lang="ts" setup>
    import { computed, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router'
    import AppLayout from '../components/AppLayout.vue'
    import { useRootStore } from '../stores/root';
    // console.log("open cocktail")

    const route = useRoute();
    const router = useRouter();
    const cocktailId = computed(()=>route.params).value.cid;
    console.log(cocktailId, String(cocktailId));
    const rootStore = useRootStore();
    rootStore.getCocktailByID(String(cocktailId));
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