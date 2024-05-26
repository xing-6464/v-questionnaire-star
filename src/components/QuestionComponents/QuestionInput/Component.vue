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

const props = withDefaults(defineProps<QuestionInputPropsType>(), QuestionInputDefaultProps)
</script>
