<template>
<v-app>
    <v-main>  
      <v-container>
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transitionName||' fade'" mode="out-in" append>
            <component :is="Component" />
          </transition>
        </router-view>  
      </v-container>
    </v-main>      
</v-app>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>


