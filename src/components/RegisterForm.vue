<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MailPlus } from 'lucide-vue-next'
import { ref } from 'vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineEmits(['toggle-auth'])

const email = ref('')
const password = ref('')

const register = (event: Event) => {
    event.preventDefault() // Evita recarregar a página
    console.log('User registered:', email.value)
}
</script>

<template>
    <Card class="mx-auto w-xl px-14 py-8 shadow-lg">
        <CardHeader>
            <div class="flex items-center">
                <img src="/gestorhorarioslogo.png" alt="TrivialScheduler" class="w-16 h-16 mr-4 inline-block" />
                <span class="text-5xl tracking-wide font-medium">TrivialScheduler</span>
            </div>
        </CardHeader>
        <CardContent>
            <form @submit="register" class="grid gap-5 mt-4 px-7">
                <div class="grid gap-2">
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required v-model="email" />
                </div>
                <div class="grid gap-2">
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" placeholder="●●●●●●●●●●●●" required v-model="password" />
                </div>
                <div class="grid gap-1.5">
                    <span class="mt-4 text-center text-sm">
                        {{ t('login.alreadyHaveAccount') }} 
                        <a href="#" class="underline" @click="$emit('toggle-auth')">Login</a>
                    </span>
                    <Button type="submit" class="w-full">
                        <MailPlus class="w-4 h-4" /> Register
                    </Button>
                </div>
            </form>
        </CardContent>
    </Card>
</template>