<script setup lang="ts">
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import { localeNames } from '@/i18n'
</script>

<template>
    <Select v-model="$i18n.locale">
        <SelectTrigger>
            <SelectValue :placeholder="localeNames[$i18n.locale]">{{ localeNames[$i18n.locale] }}</SelectValue>
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectItem v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ localeNames[locale] }}</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>