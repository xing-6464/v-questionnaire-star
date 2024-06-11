<template>
  <div class="container">
    <div class="info">
      <a-typography-title> 问卷调查 | 在线投票 </a-typography-title>
      <a-typography-paragraph
        >已累计创建问卷 100 份，发布问卷 90 份，收到问卷 980 份</a-typography-paragraph
      >
      <div>
        <a-button type="primary" @click="() => router.push(MANAGE_INDEX_PATHNAME)">
          开始使用
        </a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useLoadUserData from '@/hooks/useLoadUserData'
import { MANAGE_INDEX_PATHNAME } from '@/router'
import { useRouter } from 'vue-router'

const router = useRouter()
useLoadUserData()
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  min-height: calc(100vh - 64px - 65px);

  .info {
    text-align: center;

    button {
      height: 60px;
      font-size: 24px;
    }
  }
}
</style>
