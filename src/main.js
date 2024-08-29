
import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css' // import '@/assets/style.css' @ -> src klasoru ifade eder

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


createApp(App).use(Toast).mount('#app')
