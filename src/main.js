require('./bootstrap')
require('./plugins')
import { createApp } from 'vue'
import BaseTemplate from './layouts/BaseTemplate.vue'
import router from './routes'
import store from './store'

/**
 * Global Components
 */
//Vue.component('preloader-component', () => import('./components/Preloader') ;

createApp(BaseTemplate).use(router).use(store).mount('#app')