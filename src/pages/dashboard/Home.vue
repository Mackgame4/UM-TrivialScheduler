<script setup lang="ts">
import { Button } from '@/components/ui/button'

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
        <Button v-if="auth.user" @click="logout">Logout</Button>
    </div>
</template>