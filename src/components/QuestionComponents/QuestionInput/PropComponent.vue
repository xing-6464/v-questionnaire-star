<template>
  <AForm layout="vertical" :model="formState">
    <AFormItem label="标题" name="title" :rules="[{ required: true, message: '请输入标题' }]">
      <AInput v-model:value="formState.title" />
    </AFormItem>
    <AFormItem label="Placeholder" name="placeholder">
      <AInput v-model:value="formState.placeholder" />
    </AFormItem>
  </AForm>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { type QuestionInputPropsType } from './interface'

const props = defineProps<QuestionInputPropsType>()
const emits = defineEmits<{ change: [newProps: QuestionInputPropsType] }>()

const formState = reactive({
  title: props.title || '',
  placeholder: props.placeholder || ''
})

watch(
  [() => props.title, () => props.placeholder],
  ([newTitle, newPlaceholder]) => {
    formState.title = newTitle ? newTitle : ''
    formState.placeholder = newPlaceholder ? newPlaceholder : ''
  },
  { immediate: true }
)

watch(formState, (newState) => {
  emits('change', newState)
})
</script>
