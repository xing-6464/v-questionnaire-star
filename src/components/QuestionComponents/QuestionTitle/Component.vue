<template>
  <ATypographyTitle
    :level="level"
    :style="{
      textAlign: isCenter ? 'center' : 'start',
      marginBottom: '0',
      fontSize: genFontSize(level)
    }"
  >
    {{ title }}
  </ATypographyTitle>
</template>

<script setup lang="ts">
import { QuestionTitleDefaultProps, type QuestionTitlePropsType } from './interface'

defineOptions({ name: 'QuestionTitle' })

const props = withDefaults(defineProps<QuestionTitlePropsType>(), QuestionTitleDefaultProps)

function genFontSize(level: number) {
  if (level === 1) return '24px'
  if (level === 2) return '20px'
  if (level === 3) return '16px'
  return '16px'
}
</script>

<style scoped></style>
