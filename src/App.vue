<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const loggedIn = true
// If user not logged in, redirect to login page
if (!loggedIn) {
  router.push('/')
}
</script>

<template>
  <RouterView />
</template>