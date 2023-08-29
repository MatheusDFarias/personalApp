import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import router from './router'

require('./assets/styles/styles.css');


const app = createApp(App).use(router)

app.use(vuetify)

app.mount('#app')