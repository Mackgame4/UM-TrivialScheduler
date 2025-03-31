<script setup lang="ts">
import { Book, BookHeader, BookTitle, BookDescription } from '@/components/ui/book'

import { Info } from 'lucide-vue-next';

import { Button } from '@/components/ui/button'

const ucs = [
    {
        name: "IPM",
        description: "Interface Pessoa-Máquina",
        image: "https://www.di.uminho.pt/~jfc/images/jfc-haslab-2022.jpg"
    },
    {
        name: "PDM",
        description: "Programação em Dispositivos Móveis",
        image: "https://api.dicebear.com/9.x/glass/svg?seed=Jameson2"
    },
    {
        name: "PDS",
        description: "Processamento Digital de Sinais",
        image: "https://api.dicebear.com/9.x/glass/svg?seed=Jameson3"
    },
    {
        name: "PPI",
        description: "Programação para a Internet",
        image: "https://api.dicebear.com/9.x/glass/svg?seed=Jameson4"
    },
    {
        name: "PPI",
        description: "Programação para a Internet",
        image: "https://api.dicebear.com/9.x/glass/svg?seed=Jameson2"
    },
    {
        name: "PPI",
        description: "Programação para a Internet",
        image: "https://api.dicebear.com/9.x/glass/svg?seed=Jameson2"
    },
    {
        name: "PPI",
        description: "Programação para a Internet",
        image: "https://api.dicebear.com/9.x/glass/svg?seed=Jameson2"
    }
]
</script>

<template>
    <h2 class="text-2xl font-semibold text-center mb-6 mt-2">As Suas Unidades Curriculares</h2>
    <div class="flex justify-center items-center">
        <div class="grid place-content-center p-4 gap-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <Book v-for="uc in ucs" :key="uc.name">
                <BookHeader>
                    <div class="flex justify-center items-center w-full h-28">
                        <img :src="uc.image" alt="UC Image" class="w-full h-full rounded-md object-cover shadow-lg" />
                    </div>
                </BookHeader>
                <BookTitle>
                    <h1 class="text-2xl">{{ uc.name }}</h1>
                    <h1>TP1</h1>
                </BookTitle>
                <BookDescription>
                    <p class="whitespace-nowrap overflow-hidden overflow-ellipsis">{{ uc.description }}</p>
                    <div class="mt-2 flex">
                        <Button variant="secondary">Pedir Troca</Button>
                        <Button class="ml-auto" variant="ghost" size="icon">
                            <Info class="w-4 h-4" />
                        </Button>
                    </div>
                </BookDescription>
            </Book>
        </div>
    </div>
</template>