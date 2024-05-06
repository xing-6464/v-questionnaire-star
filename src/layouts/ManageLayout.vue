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
          @click="router.push('/manage/list')"
        >
          我的问卷
        </a-button>
        <a-button
          :type="route.path.startsWith('/manage/star') ? 'default' : 'text'"
          size="large"
          :icon="h(StarOutlined)"
          @click="router.push('/manage/star')"
        >
          星标问卷
        </a-button>
        <a-button
          :type="route.path.startsWith('/manage/trash') ? 'default' : 'text'"
          size="large"
          :icon="h(DeleteOutlined)"
          @click="router.push('/manage/trash')"
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
import { h, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import { createQuestionService } from '@/services/question'
import { message } from 'ant-design-vue'

const router = useRouter()
const route = useRoute()
const loading = ref(false)

async function handleCreateClick() {
  loading.value = true

  const data = await createQuestionService()
  const { id } = data || {}
  if (id) {
    router.push(`/question/edit/${id}`) // 跳转到编辑页面
    message.success('创建成功')
  }

  loading.value = false
}
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
