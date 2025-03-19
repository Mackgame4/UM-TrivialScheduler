import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

// A store that fakes a authentication system
export const useAuth = defineStore('auth', {
    state: () => ({
        user: null as { name: string } | null
    }),
    actions: {
        login(username: string) {
            this.user = { name: username }
            localStorage.setItem('user', JSON.stringify(this.user)) // Para persistência
            //console.log('User logged in:', username)
        },
        logout() {
            this.user = null
            localStorage.removeItem('user')
        },
        checkAuth() {
            const storedUser = localStorage.getItem('user')
            if (storedUser) {
                this.user = JSON.parse(storedUser)
            }
        }
    }
})