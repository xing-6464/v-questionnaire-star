<template>
  <div>
    <p>Stat page</p>
    <p v-if="loading">loading...</p>
    <div v-else>{{ JSON.stringify(data) }}</div>
  </div>
</template>

<script setup lang="ts">
import useQuestionData from '@/hooks/useQuestionData'

const { data, error, loading } = useQuestionData()
</script>

<style scoped lang="scss"></style>
