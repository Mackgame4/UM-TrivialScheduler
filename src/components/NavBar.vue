<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Home, Table, Bell, User, List } from 'lucide-vue-next';

import { useAuth } from '@/stores/auth'
const auth = useAuth()
const getUniqueAvatar = (name: string) => {
    const api = 'https://api.dicebear.com/9.x/adventurer/svg?seed='
    return `${api}${name}`
}
</script>

<template>
    <div class="border-b">
        <div class="flex h-16 items-center px-4">
            <a class="flex items-center space-x-4" href="/dashboard">
                <img src="/gestorhorarioslogo.png" alt="Logo" class="h-8" />
                <span class="font-medium text-xl">TrivialScheduler</span>
            </a>
            <div class="ml-auto flex items-center space-x-4">
                <nav class="flex items-center space-x-2">
                    <RouterLink to="/dashboard">
                        <Button variant="secondary">
                            <Home class="w-4 h-4" />
                            Home
                        </Button>
                    </RouterLink>
                    <Button variant="ghost">
                        <Table class="w-4 h-4" />
                        Salas
                    </Button>
                    <Button variant="ghost">
                        <Bell class="w-4 h-4" />
                        Pedidos
                    </Button>
                    <Button variant="ghost">
                        <User class="w-4 h-4" />
                        Alunos
                    </Button>
                    <Button variant="ghost">
                        <List class="w-4 h-4" />
                        UCs
                    </Button>
                </nav>
                <Avatar>
                    <AvatarImage :src="getUniqueAvatar(auth.user?.email || 'trivialscheduler')" />
                    <AvatarFallback>TS</AvatarFallback>
                </Avatar>
            </div>
        </div>
    </div>
</template>