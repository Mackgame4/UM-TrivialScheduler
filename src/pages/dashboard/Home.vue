<script setup lang="ts">
import { useAuth } from '@/stores/auth'

const auth = useAuth()

import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
    auth.logout()
    router.push('/')
}
</script>

<template>
    <div>
        <p v-if="auth.user">Logged in as: {{ auth.user.email }}</p>
        <button v-if="auth.user" @click="logout">Logout</button>
    </div>
</template>