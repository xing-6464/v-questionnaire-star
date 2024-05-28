<template>
  <AForm layout="vertical" :model="formState" :disabled="disabled">
    <AFormItem label="标题" name="title" :rules="[{ required: true, message: '请输入标题' }]">
      <AInput v-model:value="formState.title" />
    </AFormItem>

    <AFormItem name="isVertical">
      <ACheckbox v-model:checked="formState.isVertical">竖排显示</ACheckbox>
    </AFormItem>
  </AForm>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { type QuestionCheckboxPropsType } from './interface'

const props = defineProps<QuestionCheckboxPropsType>()
const emits = defineEmits<{ change: [value: QuestionCheckboxPropsType] }>()

const formState = reactive({
  title: props.title || '',
  list: props.list || [],
  isVertical: props.isVertical || false
})

watch(formState, (value) => {
  emits('change', value)
})
</script>
