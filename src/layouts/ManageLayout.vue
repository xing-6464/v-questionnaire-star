<template>
  <div class="container">
    <div class="left">
      <a-space direction="vertical">
        <a-button type="primary" size="large" :icon="h(PlusOutlined)">创建问卷</a-button>
        <a-divider style="border-top: 'transparent'" />
        <a-button
          :type="route.path.startsWith('/manage/list') ? 'default' : 'text'"
          size="large"
          :icon="h(BarsOutlined)"
          @click="routerPath('/manage/list')"
        >
          我的问卷
        </a-button>
        <a-button
          :type="route.path.startsWith('/manage/star') ? 'default' : 'text'"
          size="large"
          :icon="h(StarOutlined)"
          @click="routerPath('/manage/star')"
        >
          星标问卷
        </a-button>
        <a-button
          :type="route.path.startsWith('/manage/trash') ? 'default' : 'text'"
          size="large"
          :icon="h(DeleteOutlined)"
          @click="routerPath('/manage/trash')"
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
import { h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons-vue'

const router = useRouter()
const route = useRoute()

function routerPath(url: string) {
  router.push(url)
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
