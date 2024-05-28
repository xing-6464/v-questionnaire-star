<template>
  <div>
    <ATypographyParagraph strong>{{ title }}</ATypographyParagraph>
    <ASpace :direction="isVertical ? 'vertical' : 'horizontal'">
      <ACheckbox v-for="{ text, value, checked } in list" :key="value" :checked="checked">
        {{ text }}
      </ACheckbox>
    </ASpace>
  </div>
</template>

<script setup lang="ts">
import { type QuestionCheckboxPropsType, QuestionCheckboxDefaultProps } from './interface'

withDefaults(defineProps<QuestionCheckboxPropsType>(), {
  ...QuestionCheckboxDefaultProps,
  list: () => QuestionCheckboxDefaultProps.list!
})
</script>
