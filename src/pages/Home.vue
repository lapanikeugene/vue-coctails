<template>
    <transition>
        
    <div >
        
            <AppLayout imgUrl="./src/assets/img/img1.jpg" :backFunc="removeIngridient" :isBackButHide="ing.value===null">
            <div class="flex items-center w-screen  md:w-[50vw]">
                <section v-if="!ingredient || !cocktails" class="pt-[80px] p-0 text-center justify-center">
                    <div class="uppercase text-[32px] font-medium tracking-wide">Choose your drink</div>
                    <hr class="w-[100px] h-1 mx-auto mt-[32px] mb-0 ">
                    <div class="select-wrapper">
                        <el-select v-model="rootStore.ingredient"  
                                    placeholder="Choose main ingredient" 
                                    size="large"
                                    filterable 
                                    allow-create
                                    class="select pt-12 w-56"
                                    @change="getCocktails"
                                    >
                            <el-option
                              v-for="item in ingredients"
                              :key="item.strIngredient1"
                              :label="item.strIngredient1"
                              :value="item.strIngredient1"
                            />
                          </el-select>

                          <section class="px-[102px] mt-[50px] w-full max-w-[516px] ">
                            <p class="text-center text-xs leading-9	">
                                Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.
                            </p>
                          </section>
                          <img src="../assets/img/img2.png" alt="Coctails" class=" w-[345px] mx-auto ">
                    </div>
                    
                </section>
                <section  v-else class="pt-[80px] p-0 text-center justify-center mx-auto">
                    <div class="uppercase text-[32px] font-medium tracking-wide">Coctails with {{ ingredient }}</div>
                    <hr class="w-[100px] h-1 mx-auto mt-[32px] mb-0 ">
                    <div class="cocktails grid grid-cols-2 lg:grid-cols-3 md:gap-4 items-center pt-16 overflow-auto max-h-[500px] ">
                        <CocktailThumb  v-for="cocktail in cocktails" 
                                        :key="cocktail.idDrink"
                                        :cocktail="cocktail" />
                    </div>

                </section>
            </div>    
            </AppLayout>

    </div>
    
</transition>
</template>

<script lang="ts" setup>
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';
    import AppLayout from '../components/AppLayout.vue'
    import CocktailThumb from '../components/CocktailThumb.vue'
    import {useRootStore} from "../stores/root"

    const rootStore = useRootStore();
    rootStore.getIngridients();
    //make it reactive; 
    const {ingredients, cocktails,ingredient} = storeToRefs( rootStore);
    // const ingredient = ref(null);
    const ing = ref(null);
    ing.value = ingredient;

    function getCocktails() {
        rootStore.getCocktails(rootStore.ingredient)
    }

    const removeIngridient = ()=>{
        rootStore.setIngredient(null);
    }
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'
div
    font-family: 'Raleway', sans-serif
hr
    border-color:$accent
p
    color: $textMuted

.cocktails
    &::-webkit-scrollbar
        width: 10px

    &::-webkit-scrollbar-track 
        box-shadow: inset 0 0 5px grey
        border-radius: 10px

    &::-webkit-scrollbar-thumb 
        background: $accent
        border-radius: 10px

</style>