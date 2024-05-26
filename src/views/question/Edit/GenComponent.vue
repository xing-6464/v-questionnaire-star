<template>
  <template v-if="type === 'questionTitle'">
    <QuestionTitle v-bind="props" />
  </template>
  <template v-else-if="type === 'questionInput'">
    <QuestionInput v-bind="props" />
  </template>
</template>

<script setup lang="ts">
import QuestionInput from '@/components/QuestionComponents/QuestionInput/Component.vue'
import QuestionTitle from '@/components/QuestionComponents/QuestionTitle/Component.vue'
defineProps<{ type: string; props: any }>()
</script>
