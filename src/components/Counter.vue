<script setup lang="ts">
defineProps<{ msg: string }>()

import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

import { Button } from '@/components/ui/button'
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>Counter: {{ counter.count }}</p>
  <Button @click="counter.increment">Increment</Button>
  <Button @click="counter.decrement">Decrement</Button>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
