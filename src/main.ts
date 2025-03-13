import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/index.css'

export const localeNames: Record<string, string> = {
    en: "English",
    pt: "Português"
};
const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'en',
    messages: {
        en: {
            message: {
                hello: 'hello world'
            }
        },
        pt: {
            message: {
                hello: 'ola mundo'
            }
        }
    }
})
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.mount('#app')