import { createApp } from 'vue'
import App from './components/HomePage.vue'
import router from './router' // Importa el router

createApp(App).use(router).mount('#app') // Usa el router en tu aplicación