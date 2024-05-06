<template>
  <div>
    <p>Edit page</p>
    <p v-if="loading">loading...</p>
    <div v-else>{{ JSON.stringify(data) }}</div>
  </div>
</template>

<script setup lang="ts">
import useQuestionData from '@/hooks/useQuestionData'

const { data, loading, error } = useQuestionData()
</script>

<style scoped lang="scss"></style>
