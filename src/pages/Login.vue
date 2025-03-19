<script setup lang="ts">
import LocaleSwitch from '@/components/LocaleSwitch.vue';
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';

import { ref } from 'vue';

// Make the state reactive
const wantToRegister = ref(false);

// Function to toggle between login and register forms
const toggleAuthForm = () => {
    wantToRegister.value = !wantToRegister.value;
};
</script>

<template>
    <div class="flex min-h-screen w-full items-center justify-center px-4">
        <div class="absolute top-4 right-4">
            <LocaleSwitch />
        </div>
        <template v-if="wantToRegister">
            <RegisterForm @toggle-auth="toggleAuthForm" />
        </template>
        <template v-else>
            <LoginForm @toggle-auth="toggleAuthForm" />
        </template>
    </div>
</template>