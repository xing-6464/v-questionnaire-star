<template>
  <div>
    <ATypographyParagraph>{{ title }}</ATypographyParagraph>
    <div>
      <AInput :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuestionInputDefaultProps, type QuestionInputPropsType } from './interface'

defineOptions({ name: 'QuestionInput' })
withDefaults(defineProps<QuestionInputPropsType>(), QuestionInputDefaultProps)
</script>
