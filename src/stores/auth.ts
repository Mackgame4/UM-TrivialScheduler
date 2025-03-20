import { defineStore } from 'pinia'

// Define user class
class User {
    email: string;
    password: string;
    isLoggedIn: boolean = false;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
        this.isLoggedIn = false;
    }
}

// List of users (fake database)
const users = [
    new User('user@gmail.com', '123'),
    new User('user1@gmail.com', '123'),
    new User('user2@gmail.com', '123'),
    new User('user3@gmail.com', '123')
]

// A store that fakes a authentication system
export const useAuth = defineStore('auth', {
    state: () => ({
        user: null as User | null
    }),
    actions: {
        login(email: string, password: string) {
            const user = users.find(user => user.email === email && user.password === password)
            if (user) {
                this.user = user
                this.user.isLoggedIn = true
                localStorage.setItem('user', JSON.stringify(user))
            } else {
                throw new Error('Invalid credentials')
            }
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