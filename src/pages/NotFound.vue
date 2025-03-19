<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { OctagonX } from 'lucide-vue-next'

const router = useRouter()

const goBack = () => {
    router.go(-1)
}
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen text-center">
        <OctagonX class="w-24 h-24 text-gray-400 dark:text-gray-600" />
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white mt-2">404</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mt-2">Oops! Page not found.</p>
        <Button class="mt-4" @click="goBack">Go Back</Button>
    </div>
</template>