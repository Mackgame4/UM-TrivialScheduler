<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail } from 'lucide-vue-next'
import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast()

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = useAuth()

const login = (event: Event) => {
    event.preventDefault() // Evita recarregar a página
    if (email.value && password.value) {
        try {
            auth.login(email.value, password.value)
            router.push('/dashboard')
        } catch(e: any) {
            toast({
                title: e.message || 'An error occurred',
                description: 'Please check your email and password.',
                variant: 'destructive'
            });
        }
    }
}

defineEmits(['toggle-auth']);
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
            <form @submit="login" class="grid gap-5 mt-4 px-7">
                <div class="grid gap-2">
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required v-model="email" />
                </div>
                <div class="grid gap-2">
                    <div class="flex items-center">
                        <Label for="password">Password</Label>
                        <a href="#" class="ml-auto inline-block text-xs underline">{{ t('login.forgotPassword') }}</a>
                    </div>
                    <Input id="password" type="password" placeholder="●●●●●●●●●●●●" required v-model="password" />
                </div>
                <div class="grid gap-1.5">
                    <span class="mt-4 text-center text-sm">
                        {{ t('login.dontHaveAccount') }} 
                        <a href="#" class="underline" @click="$emit('toggle-auth')">Sign up</a>
                    </span>
                    <Button type="submit" class="w-full">
                        <Mail class="w-4 h-4" /> Login
                    </Button>
                </div>
            </form>
        </CardContent>
    </Card>
</template>