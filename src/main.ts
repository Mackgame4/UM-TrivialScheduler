import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router';
import i18n from '@/i18n';
import './assets/index.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)

// Auth is a global store
import { useAuth } from '@/stores/auth'
const auth = useAuth()
auth.checkAuth() // Restaura login state ao recarregar a página

app.mount('#app')