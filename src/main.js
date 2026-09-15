import { createApp } from 'vue'
import './style.css'
import '@fontsource/poppins'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import App from './App.vue'
import router from './router/index.js'
import i18n from './i18n/index.js'

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
