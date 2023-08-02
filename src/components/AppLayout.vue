<template>
    <div class="root max-w-7xl mx-auto relative">
        <div :style="`background-image:url(${imgUrl})`" class="img w-0 md:w-[50vw]"></div>
        <div class="flex justify-between items-center absolute  top-[40px]  md:right-[32px] px-5 md:px-0 md:w-[calc(50%-64px)]">
            <el-button :icon="Back" circle class="back w-8 h-8 " @click="goBack" v-if="!isBackButHide" />
            <el-button class="btn  text-[16px] p-2  " @click="toRandomCocktail">Get random cocktail</el-button>
            
        </div>
        
            <slot></slot>
        
    </div>
</template>

<script lang="ts" setup>
import {
 Back

} from '@element-plus/icons-vue'
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'

    const props = defineProps({
        imgUrl: {
            type: String,
            required:true,
        },
        backFunc: {
            type: Function,
        },
        isBackButHide:{
            type:Boolean,
            required:false,
        }
    })


    const route = useRoute();
    const router = useRouter();


    const routeName = computed(()=>route.name)

    const toRandomCocktail = ()=>{
        router.push('/random');
    
    console.log(routeName.value);
    if(routeName.value === 'randomCoctail'){
        router.go(0);
        // window.location.reload();
    }
}

    const goBack = ()=>{
       props.backFunc ? 
        props.backFunc() :
        router.go(-1);
    }
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
    display: flex
    min-height: 100vh
    width: 100vw
    background-color: $background
.img
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.btn 
    background-color: $accent
    border-color: $accent
    color: $text

    &:hover,
    &:active
        background-color: darken($accent,10%)
        border-color: darken($accent,10%)
.back
    background-color: transparent
    border-color: #fff
    &:hover
        background-color: transparent
        border-color: $accent
        color:#fff
</style>