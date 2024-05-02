<template>
  <div class="container">
    <router-link to="/">
      <a-space>
        <a-typography-title>
          <FormOutlined />
        </a-typography-title>
        <a-typography-title>小星问卷</a-typography-title>
      </a-space>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { FormOutlined } from '@ant-design/icons-vue'
</script>

<style scoped lang="scss">
.container {
  width: 200px;
  margin: 12px 0;
  line-height: 1;
  text-align: center;

  h1 {
    font-size: 32px;
    color: #f7f7f7;
  }
}
</style>
