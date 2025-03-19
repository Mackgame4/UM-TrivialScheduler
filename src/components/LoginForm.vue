<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail } from 'lucide-vue-next'
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
        <div class="grid gap-5 mt-4 px-7">
            <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div class="grid gap-2">
                <div class="flex items-center">
                    <Label for="password">Password</Label>
                    <a href="#" class="ml-auto inline-block text-xs underline">Forgot your password?</a>
                </div>
                <Input id="password" type="password" placeholder="************" required />
            </div>
            <div class="grid gap-1.5">
                <span class="mt-4 text-center text-sm">Don't have an account? <a href="#" class="underline">Sign up</a></span>
                <Button type="submit" class="w-full"><Mail class="w-4 h-4" /> Login</Button>
            </div>
        </div>
        </CardContent>
    </Card>
</template>