<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Home, Table, Bell, User, List, LogOut } from 'lucide-vue-next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useAuth } from '@/stores/auth'

const auth = useAuth()

const getUniqueAvatar = (name: string) => {
    const api = 'https://api.dicebear.com/9.x/adventurer/svg?seed='
    return `${api}${name}`
}

import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
    auth.logout()
    router.push('/')
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
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                    <Button variant="ghost" class="relative h-8 w-8 rounded-full">
                        <Avatar>
                            <AvatarImage :src="getUniqueAvatar(auth.user?.email || 'trivialscheduler')" />
                            <AvatarFallback>TS</AvatarFallback>
                        </Avatar>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-56" align="end">
                    <DropdownMenuLabel class="font-normal flex">
                        <div class="flex flex-col space-y-1">
                        <p class="text-sm font-medium leading-none">
                            TrivialScheduler
                        </p>
                        <p class="text-xs leading-none text-muted-foreground">
                            {{ auth.user?.email }}
                        </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem class="text-red-600" @click="logout">
                        <LogOut class="w-4 h-4" /> Log out
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    </div>
</template>