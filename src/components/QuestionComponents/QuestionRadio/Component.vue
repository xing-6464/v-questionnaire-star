<template>
  <div>
    <ATypographyParagraph strong>{{ title }}</ATypographyParagraph>
    <ARadioGroup v-model:value="$props.value">
      <ASpace :direction="isVertical ? 'vertical' : 'horizontal'">
        <ARadio v-for="(option, index) in options" :key="index" :value="option.value">
          {{ option.text }}
        </ARadio>
      </ASpace>
    </ARadioGroup>
  </div>
</template>

<script setup lang="ts">
import { type QuestionRadioPropsType, QuestionRadioDefaultProps } from './interface'

defineOptions({ name: 'QuestionRadio' })
withDefaults(defineProps<QuestionRadioPropsType>(), {
  ...QuestionRadioDefaultProps,
  options: () => QuestionRadioDefaultProps.options!
})
</script>
