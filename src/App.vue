<template>
<v-layout>
    <v-main class="d-flex flex-row align-center">
      <v-app-bar color="transparent" class="pa-2" collapse :elevation="0">
          <v-btn
            :variant="theme.global.current.value.dark?'tonal':'text'" 
            size="x-large"
            :icon="theme.global.current.value.dark?'mdi-white-balance-sunny':'mdi-weather-night'" 
            color="third" 
            @click="toggleTheme">
          </v-btn>            
      </v-app-bar> 
      <v-container> 
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transitionName||' fade'" mode="out-in" append>
            <component :is="Component" />
          </transition>
        </router-view>  
      </v-container>
    </v-main>      
</v-layout>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  setup() {
    const theme = useTheme();
    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark")
    };
  },
  data() {
    return {

    }
  },
  methods: {
  }  
}
</script>


