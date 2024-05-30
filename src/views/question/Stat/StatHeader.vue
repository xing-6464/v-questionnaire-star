<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="left">
        <ASpace>
          <AButton type="link" :icon="h(LeftOutlined)" @click="$router.back()">返回</AButton>
          <ATypographyTitle>统计</ATypographyTitle>
        </ASpace>
      </div>
      <div class="main">中间</div>
      <div class="right">
        <AButton type="primary" @click="() => $router.push(`/question/edit/${$route.params.id}`)">
          编辑问卷
        </AButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { LeftOutlined } from '@ant-design/icons-vue'
</script>

<style scoped lang="scss">
.header-wrapper {
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 12px 0;
}

.header {
  display: flex;
  margin: 0 24px;

  .left {
    flex: 1;

    h1 {
      font-size: 18px;
      margin-bottom: 0;
      line-height: 1;
    }
  }

  .right {
    flex: 1;
    text-align: right;
  }

  .main {
    flex: 1;
    text-align: center;
  }
}
</style>
