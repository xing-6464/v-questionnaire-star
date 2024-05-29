<template>
  <AForm :model="pageInfo" layout="vertical">
    <AFormItem label="标题" name="title" :rules="[{ required: true, message: '请输入标题' }]">
      <AInput v-model:value="pageInfo.title" placeholder="请输入标题" />
    </AFormItem>

    <AFormItem label="描述" name="desc">
      <ATextarea v-model:value="pageInfo.desc" placeholder="请输入描述" />
    </AFormItem>

    <AFormItem label="样式" name="css">
      <ATextarea v-model:value="pageInfo.css" placeholder="请输入样式" />
    </AFormItem>

    <AFormItem label="脚本" name="js">
      <ATextarea v-model:value="pageInfo.js" placeholder="请输入脚本" />
    </AFormItem>
  </AForm>
</template>

<script setup lang="ts">
import useGetPageInfo from '@/hooks/useGetPageInfo'
import { watch } from 'vue'

const { pageInfo, resetPageInfo } = useGetPageInfo()

watch(
  pageInfo,
  (value) => {
    resetPageInfo(value)
  },
  {
    immediate: true
  }
)
</script>
