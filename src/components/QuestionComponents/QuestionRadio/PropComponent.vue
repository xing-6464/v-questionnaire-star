<template>
  <AForm :model="formState" layout="vertical" :disabled="disabled">
    <AFormItem label="标题" name="title" :rules="[{ required: true, message: '请输入标题' }]">
      <AInput v-model:value="formState.title" />
    </AFormItem>

    <AFormItem label="默认选中" name="value">
      <ASelect
        v-model:value="formState.value"
        :options="() => formState.options.map((item) => ({ label: item.text, value: item.value }))"
      />
    </AFormItem>

    <AFormItem label="是否垂直显示" name="isVertical">
      <ACheckbox v-model:checked="formState.isVertical">垂直显示</ACheckbox>
    </AFormItem>
  </AForm>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { QuestionRadioPropsType } from './interface'

const props = defineProps<QuestionRadioPropsType>()
const emits = defineEmits<{ change: [value: QuestionRadioPropsType] }>()

const formState = reactive({
  title: props.title || '',
  isVertical: props.isVertical || false,
  options: props.options || [],
  value: props.value || ''
})

watch(
  props,
  (newProps) => {
    Object.assign(formState, newProps)
    emits('change', newProps)
  },
  { deep: true }
)
</script>
