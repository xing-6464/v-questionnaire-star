<template>
  <AForm :model="formState" layout="vertical">
    <AFormItem
      label="标题内容"
      name="text"
      :rules="[{ required: true, message: '请输入标题内容' }]"
    >
      <AInput v-model:value="formState.text" />
    </AFormItem>
    <AFormItem label="层级" name="level">
      <ASelect
        :options="[
          { value: 1, text: 1 },
          { value: 2, text: 2 },
          { value: 3, text: 3 }
        ]"
        v-model:value="formState.level"
      ></ASelect>
    </AFormItem>
    <AFormItem label="居中" name="isCenter">
      <ACheckbox v-model:checked="formState.isCenter">是否居中</ACheckbox>
    </AFormItem>
  </AForm>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { type QuestionTitlePropsType } from './interface'

const props = defineProps<QuestionTitlePropsType>()

const formState = reactive({
  text: props.text || '',
  level: props.level || 1,
  isCenter: props.isCenter || false
})

watch([() => props.text, () => props.level, () => props.isCenter], ([text, level, isCenter]) => {
  formState.text = text ? text : ''
  formState.level = level ? level : 1
  formState.isCenter = isCenter ? isCenter : false
})
</script>
