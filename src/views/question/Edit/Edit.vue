<template>
  <div>
    <p>Edit page</p>
    <p v-if="loading">loading...</p>
    <div v-else>{{ JSON.stringify(data) }}</div>
  </div>
</template>

<script setup lang="ts">
import useLoadQuestionData from '@/hooks/useLoadQuestionData'

const { data, loading } = useLoadQuestionData()
</script>

<style scoped lang="scss"></style>
