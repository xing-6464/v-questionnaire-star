<template>
  <div style="text-align: center">
    <ATypographyTitle style="font-size: 24px">{{ title }}</ATypographyTitle>
    <ATypographyParagraph>
      <span v-for="(text, index) in descTextList" :key="index">
        <br v-if="index > 0" />
        {{ text }}
      </span>
    </ATypographyParagraph>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type QuestionInfoPropsType, QuestionInfoDefaultProps } from './interface'

const props = withDefaults(defineProps<QuestionInfoPropsType>(), {
  ...QuestionInfoDefaultProps
})

const descTextList = computed(() => props.desc.split('\n'))
</script>
