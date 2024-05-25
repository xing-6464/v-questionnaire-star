<template>
  <div class="container">
    <div class="left">
      <a-space direction="vertical">
        <a-button
          type="primary"
          size="large"
          :icon="h(PlusOutlined)"
          @click="handleCreateClick"
          :loading="loading"
        >
          创建问卷
        </a-button>
        <a-divider style="border-top: 'transparent'" />
        <a-button
          :type="route.path.startsWith('/manage/list') ? 'default' : 'text'"
          size="large"
          :icon="h(BarsOutlined)"
          @click="() => router.push('/manage/list')"
        >
          我的问卷
        </a-button>
        <a-button
          :type="route.path.startsWith('/manage/star') ? 'default' : 'text'"
          size="large"
          :icon="h(StarOutlined)"
          @click="() => router.push('/manage/star')"
        >
          星标问卷
        </a-button>
        <a-button
          :type="route.path.startsWith('/manage/trash') ? 'default' : 'text'"
          size="large"
          :icon="h(DeleteOutlined)"
          @click="() => router.push('/manage/trash')"
        >
          回收问卷
        </a-button>
      </a-space>
    </div>
    <div class="right">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { useRequest } from 'vue-request'
import { createQuestionService } from '@/services/question'
import { useTitle } from '@vueuse/core'

const router = useRouter()
const route = useRoute()
const title = computed(() => {
  return route.path.startsWith('/manage/list')
    ? '小星问卷 - 我的问卷'
    : route.path.startsWith('/manage/star')
      ? '小星问卷 - 星标问卷'
      : route.path.startsWith('/manage/trash')
        ? '小星问卷 - 回收站'
        : '小星问卷'
})
const { loading, run: handleCreateClick } = useRequest(createQuestionService, {
  manual: true,
  onSuccess(res) {
    router.push(`/question/edit/${res.id}`)
    message.success('创建成功')
  }
})
useTitle(title)
</script>

<style scoped lang="scss">
.container {
  padding: 24px 0;
  width: 1200px;
  margin: 0 auto;
  display: flex;
}

.left {
  width: 120px;
}

.right {
  flex: 1;
  margin-left: 60px;
}
</style>
