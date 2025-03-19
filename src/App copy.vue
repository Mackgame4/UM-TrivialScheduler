<script setup lang="ts">
import Counter from '@/components/Counter.vue'
import LocaleSwitch from '@/components/LocaleSwitch.vue';
import LoginForm from '@/components/LoginForm.vue';
</script>

<template>
  <Counter msg="Text" />
  <LocaleSwitch />
  <p>{{ $t('message.hello') }}</p>
  <div class="flex h-screen w-full items-center justify-center px-4">
    <LoginForm />
  </div>
</template>