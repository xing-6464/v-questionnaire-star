<template>
  <div class="container">
    <div class="left">
      <el-space direction="vertical">
        <el-button type="primary" size="large" :icon="Plus">创建问卷</el-button>
        <el-divider></el-divider>
        <el-button
          :type="route.path.startsWith('/manage/list') ? 'default' : 'text'"
          size="large"
          :icon="List"
          @click="routerPath('/manage/list')"
        >
          我的问卷
        </el-button>
        <el-button
          :type="route.path.startsWith('/manage/star') ? 'default' : 'text'"
          :icon="Star"
          @click="routerPath('/manage/star')"
        >
          星标问卷
        </el-button>
        <el-button
          :type="route.path.startsWith('/manage/trash') ? 'default' : 'text'"
          size="large"
          :icon="Delete"
          @click="routerPath('/manage/trash')"
        >
          回收问卷
        </el-button>
      </el-space>
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
import { useRoute, useRouter } from 'vue-router'
import { Star, Plus, List, Delete } from '@element-plus/icons-vue'

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

.el-button {
  margin-left: 0;
}

.el-button--text {
  color: #606266;
}

.el-divider {
  margin: 14px 0;
}

.left {
  width: 120px;
}

.right {
  flex: 1;
  margin-left: 60px;
}
</style>
