<template>
  <ATypographyParagraph :style="{ textAlign: isCenter ? 'center' : 'start', marginBottom: 0 }">
    <span v-for="(t, index) in textList" :key="index">
      <br v-if="index > 0" />
      {{ t }}
    </span>
  </ATypographyParagraph>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type QuestionParagraphPropsType, QuestionParagraphDefaultProps } from './interface'

defineOptions({ name: 'QuestionParagraph' })
const props = withDefaults(defineProps<QuestionParagraphPropsType>(), {
  ...QuestionParagraphDefaultProps
})
const textList = computed(() => props.text.split('\n'))
</script>
