import { createApp } from 'vue'
// import App from './App.vue'
import DefaultTemplate from './layouts/DefaultTemplate.vue'
import router from './routes/index'

createApp(DefaultTemplate, router).mount('#app')

