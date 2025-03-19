<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
    <nav>
        <RouterLink to="/dashboard">
            <Button>Go to Home</Button>
        </RouterLink>
        <RouterLink to="/">
            <Button>Go to Login</Button>
        </RouterLink>
    </nav>
</template>