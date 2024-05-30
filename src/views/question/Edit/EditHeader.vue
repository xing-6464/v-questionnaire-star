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
          <AButton
            :loading="saveLoading"
            @click="save"
            :icon="!saveLoading ? h(SaveOutlined) : null"
          >
            保存
          </AButton>
          <AButton type="primary" @click="pub" :loading="pubLoading">发布</AButton>
        </ASpace>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { LeftOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { useRequest } from 'vue-request'
import { message } from 'ant-design-vue'
import { useKeyPress } from 'vue-hooks-plus'
import { watchDebounced } from '@vueuse/core'

import EditToolbar from './EditToolbar.vue'
import useGetPageInfo from '@/hooks/useGetPageInfo'
import { updateQuestionService } from '@/services/question'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'

const editTitleState = ref(false)
const { componentList } = useGetComponentInfo()
const { pageInfo, changePageTitle } = useGetPageInfo()

const router = useRouter()
const route = useRoute()

// 保存
const { loading: saveLoading, run: save } = useRequest(
  async () => {
    await updateQuestionService(route.params.id, {
      ...pageInfo.value,
      componentList: componentList.value
    })
  },
  {
    manual: true
  }
)
// 发布
const { loading: pubLoading, run: pub } = useRequest(
  async () => {
    await updateQuestionService(route.params.id, {
      ...pageInfo.value,
      componentList: componentList.value,
      isPublished: true // 发布
    })
  },
  {
    manual: true,
    onSuccess: () => {
      message.success('发布成功')
      router.push(`/question/stat/${route.params.id}`)
    }
  }
)

// 自动保存
watchDebounced(
  [componentList, pageInfo],
  () => {
    save()
  },
  { deep: true, debounce: 1000 }
)

// 快捷键保存
useKeyPress(['ctrl.s', 'mate.s'], (e: KeyboardEvent) => {
  e.preventDefault()
  if (!saveLoading.value) save()
})

// 修改标题
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
