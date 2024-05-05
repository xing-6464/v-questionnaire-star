<template>
  <div>id : {{ route.params.id }}</div>
</template>

<script setup lang="ts">
import { getQuestionService } from '@/services/question'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(async () => {
  const data = await getQuestionService(route.params.id as string)
  console.log(data)
})
</script>

<style scoped lang="scss"></style>
