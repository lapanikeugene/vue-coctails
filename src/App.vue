<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template >

  <router-view v-slot="{Component}" >
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>  
  </router-view>
</template>

<style  lang="sass" scoped>
.slide-enter-active,
.slide-leave-active 
  transition: opacity .4s, transform .4s


.slide-enter-from,
.slide-leave-to 
  opacity: 0
  transform: translateX(-30%)

</style>
