<template>
  <p>QuestionCard</p>
</template>

<script setup lang="ts">
type PropsType = {
  data: {
    _id: string
    title: string
    isStar: boolean
    isPublished: boolean
    answerCount: number
    createdAt: string
  }
}

defineProps<PropsType>()
</script>

<style scoped lang="scss"></style>
