<script setup lang="ts">
import Counter from '@/components/Counter.vue'
import LocaleSwitch from '@/components/LocaleSwitch.vue';
</script>

<template>
    <Counter msg="Text" />
    <LocaleSwitch />
    <p>{{ $t('message.hello') }}</p>
    <RouterView />
</template>