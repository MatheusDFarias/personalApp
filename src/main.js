import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'

require('./assets/styles/styles.css');

const vuetify = createVuetify({
  components,
  directives,
})


const app = createApp(App).use(router)

app.use(vuetify)

app.mount('#app')