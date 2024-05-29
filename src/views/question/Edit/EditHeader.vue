<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="left">
        <ASpace>
          <AButton type="link" :icon="h(LeftOutlined)" @click="router.back()">返回</AButton>
          <AInput
            v-if="editTitleState"
            v-model:value="pageInfo.title"
            @blur="editTitleState = false"
            @press-enter="editTitleState = false"
            @change="handleTitleChange"
          />
          <ASpace v-else>
            <ATypographyTitle>{{ pageInfo.title }}</ATypographyTitle>
            <AButton type="text" @click="editTitleState = true" :icon="h(EditOutlined)" />
          </ASpace>
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
import { h, ref } from 'vue'
import { LeftOutlined, EditOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import EditToolbar from './EditToolbar.vue'
import useGetPageInfo from '@/hooks/useGetPageInfo'

const editTitleState = ref(false)
const { pageInfo, changePageTitle } = useGetPageInfo()

const router = useRouter()

function handleTitleChange(e) {
  const title = e.target.value.trim()
  if (!title) return
  changePageTitle(title)
}
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
