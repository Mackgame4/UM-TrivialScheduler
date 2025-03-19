<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
    <nav>
        <RouterLink to="/dashboard">
            <Button>Home</Button>
        </RouterLink>
        <RouterLink to="/">
            <Button>Login</Button>
        </RouterLink>
    </nav>
</template>