<template>
  <AForm :model="formState" layout="vertical">
    <AFormItem label="标题" name="title" :rules="[{ required: true, message: '请输入标题' }]">
      <AInput v-model:value="formState.title" placeholder="请输入标题" />
    </AFormItem>

    <AFormItem label="描述" name="desc">
      <ATextarea v-model:value="formState.desc" placeholder="请输入描述" />
    </AFormItem>

    <AFormItem label="样式" name="css">
      <ATextarea v-model:value="formState.css" placeholder="请输入样式" />
    </AFormItem>

    <AFormItem label="脚本" name="js">
      <ATextarea v-model:value="formState.js" placeholder="请输入脚本" />
    </AFormItem>
  </AForm>
</template>

<script setup lang="ts">
import useGetPageInfo from '@/hooks/useGetPageInfo'
import { reactive, watch } from 'vue'

const { pageInfo, resetPageInfo } = useGetPageInfo()

const formState = reactive({
  ...pageInfo.value
})

watch(formState, (value) => {
  resetPageInfo(value)
})
</script>
