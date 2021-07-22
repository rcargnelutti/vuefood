import { createApp } from 'vue'
import BaseTemplate from './layouts/DefaultTemplate.vue'
import router from './routes'

createApp(BaseTemplate).use(router).mount('#app')