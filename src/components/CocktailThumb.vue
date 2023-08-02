<template>
    <div class="md:root  pb-5 flex flex-col items-center justify-center  ">
        <RouterLink :to="`/cocktails/${cocktail.idDrink}`">

        <div    :style="`background-image:url(${cocktail.strDrinkThumb})`" 
                :title="`${cocktail.strDrink}`"
                class="pic w-[120px] h-[120px] mx-auto bg-no-repeat bg-center bg-contain">

        </div>
        <div  :title="`${cocktail.strDrink}`" class="name text-base mt-4  w-[150px] overflow-ellipsis whitespace-nowrap overflow-hidden">
            {{ cocktail.strDrink }}
        </div>
        </RouterLink>

    </div>
</template>

<script lang="ts" setup>
 const probs = defineProps(
    {
        cocktail:{
            type: Object,
            required:true,
        }
    }
 )
</script>

<style lang="sass" scoped>
.root
    padding-right: 38px

    &:nth-child(3n+3)
        padding-right: 0
    


</style>