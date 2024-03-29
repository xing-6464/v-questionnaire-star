<template>
  <div class="container">
    <router-link to="/">
      <el-space>
        <h1>
          <FormOutlined />
        </h1>
        <h1>小星问卷</h1>
      </el-space>
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
    font-weight: 600;
  }
}
</style>
