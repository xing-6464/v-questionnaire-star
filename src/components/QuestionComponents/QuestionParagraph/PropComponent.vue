<template>
  <AForm layout="vertical" :model="formState" :disabled="disabled">
    <AFormItem
      label="段落内容"
      name="text"
      :rules="[{ required: true, message: '请输入段落内容' }]"
    >
      <ATextarea v-model:value="formState.text" />
    </AFormItem>
    <AFormItem label="居中" name="isCenter">
      <ACheckbox v-model:checked="formState.isCenter">是否居中</ACheckbox>
    </AFormItem>
  </AForm>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { type QuestionParagraphPropsType } from './interface'

const props = defineProps<QuestionParagraphPropsType>()
const emits = defineEmits<{ change: [newProps: QuestionParagraphPropsType] }>()

const formState = reactive({
  text: props.text || '',
  isCenter: props.isCenter || false
})

watch([() => props.text, () => props.isCenter], ([text, isCenter]) => {
  formState.text = text ? text : ''
  formState.isCenter = isCenter ? isCenter : false
})

watch(formState, (newValue) => {
  emits('change', newValue)
})
</script>

<style scoped lang="scss"></style>
