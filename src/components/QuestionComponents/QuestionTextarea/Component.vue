<template>
  <div>
    <ATypographyParagraph>{{ title }}</ATypographyParagraph>
    <div>
      <ATextarea :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuestionTextareaDefaultProps, type QuestionTextareaPropsType } from './interface'

withDefaults(defineProps<QuestionTextareaPropsType>(), QuestionTextareaDefaultProps)
</script>
