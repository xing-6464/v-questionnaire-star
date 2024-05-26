<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="left">
        <ASpace>
          <AButton type="link" :icon="h(LeftOutlined)" @click="router.back()">返回</AButton>
          <ATypographyTitle>问卷标题</ATypographyTitle>
        </ASpace>
      </div>
      <div class="main">
        <EditToolbar />
      </div>
      <div class="right">
        <ASpace>
          <AButton>保存</AButton>
          <AButton type="primary">发布</AButton>
        </ASpace>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { LeftOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import EditToolbar from './EditToolbar.vue'

const router = useRouter()
</script>

<style scoped lang="scss">
.header-wrapper {
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 12px 0;

  .header {
    display: flex;
    margin: 0 24px;

    h1 {
      font-size: 18px;
      margin-bottom: 0;
      line-height: 1;
    }

    .left {
      flex: 1;
    }

    .main {
      flex: 1;
      text-align: center;
    }

    .right {
      flex: 1;
      text-align: right;
    }
  }
}
</style>
