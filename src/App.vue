<template>
<v-layout class="d-flex">
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName||' fade'" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>  
</v-layout>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>


