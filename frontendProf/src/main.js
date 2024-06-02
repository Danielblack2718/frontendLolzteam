import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCarousel)
app.mount('#app')
