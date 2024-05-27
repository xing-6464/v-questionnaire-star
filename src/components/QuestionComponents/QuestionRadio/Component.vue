<template>
  <div>
    <ATypographyParagraph strong>{{ title }}</ATypographyParagraph>
    <ARadioGroup v-model:value="value" :vertical="isVertical">
      <ASpace>
        <ARadio v-for="(option, index) in options" :key="index" :value="option.value">
          {{ option.text }}
        </ARadio>
      </ASpace>
    </ARadioGroup>
  </div>
</template>

<script setup lang="ts">
import { type QuestionRadioPropsType, QuestionRadioDefaultProps } from './interface'
const {
  title: _title,
  options: _options,
  value: _value,
  isVertical: _isVertical
} = QuestionRadioDefaultProps

withDefaults(defineProps<QuestionRadioPropsType>(), {
  title: _title,
  value: _value,
  isVertical: _isVertical,
  options: () => _options!
})
</script>
