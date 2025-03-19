<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

const router = useRouter()
const auth = useAuth()

// If user not logged in, redirect to login page (Prevent unauthorized access to dashboard)
if (!auth.user?.isLoggedIn) {
  router.push('/')
}
</script>

<template>
  <RouterView />
</template>