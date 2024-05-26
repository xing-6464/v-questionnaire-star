<template>
  <div>
    <p>Stat page</p>
    <p v-if="loading">loading...</p>
    <div v-else></div>
  </div>
</template>

<script setup lang="ts">
import useLoadQuestionData from '@/hooks/useLoadQuestionData'

const { loading } = useLoadQuestionData()
</script>

<style scoped lang="scss"></style>
