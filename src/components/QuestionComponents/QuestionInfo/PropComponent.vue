<template>
  <AForm layout="vertical" :model="formState" :disabled="disabled">
    <AFormItem label="标题" name="title" :rules="[{ required: true, message: '请输入标题' }]">
      <AInput v-model:value="formState.title" />
    </AFormItem>

    <AFormItem label="描述" name="desc">
      <ATextarea v-model:value="formState.desc" />
    </AFormItem>
  </AForm>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { type QuestionInfoPropsType } from './interface'

const props = defineProps<QuestionInfoPropsType>()
const emits = defineEmits<{ change: [value: QuestionInfoPropsType] }>()

const formState = reactive({
  title: props.title || '',
  desc: props.desc || ''
})

watch([() => props.title, () => props.desc], (newValue) => {
  const [title, desc] = newValue
  formState.title = title || ''
  formState.desc = desc || ''
})

watch(formState, (value) => {
  emits('change', value)
})
</script>
