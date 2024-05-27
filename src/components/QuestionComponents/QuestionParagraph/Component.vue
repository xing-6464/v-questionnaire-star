<template>
  <ATypographyParagraph :style="{ textAlign: isCenter ? 'center' : 'start', marginBottom: 0 }">
    {{ text }}
  </ATypographyParagraph>
</template>

<script setup lang="ts">
import { type QuestionParagraphPropsType, QuestionParagraphDefaultProps } from './interface'

const props = withDefaults(defineProps<QuestionParagraphPropsType>(), {
  ...QuestionParagraphDefaultProps
})
</script>

<style scoped lang="scss"></style>
