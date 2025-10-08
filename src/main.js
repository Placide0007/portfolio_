import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css';
import 'typeface-inter'
import 'typeface-montserrat'
import 'animate.css';
import router from './route';


createApp(App).use(router).mount('#app')
