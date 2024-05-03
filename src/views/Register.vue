<template>
  <div class="container">
    <div>
      <ASpace>
        <ATypographyTitle :level="2"><UserAddOutlined /></ATypographyTitle>
        <ATypographyTitle :level="2">注册新用户</ATypographyTitle>
      </ASpace>
    </div>
    div>
  </div>
</template>

<script setup lang="ts">
import { UserAddOutlined } from '@ant-design/icons-vue'
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px - 65px);
}
</style>
