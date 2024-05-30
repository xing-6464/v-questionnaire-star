<template>
  <div style="height: 100vh">
    <div v-if="waitingUserData" style="text-align: center; margin-top: 60px">
      <a-spin />
    </div>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script lang="ts" setup>
import useLoadUserData from '@/hooks/useLoadUserData'
import useRouterPage from '@/hooks/useRouterPage'
import { useTitle } from '@vueuse/core'
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import useGetPageInfo from '@/hooks/useGetPageInfo'

const { pageInfo } = useGetPageInfo()
const { waitingUserData } = useLoadUserData()
const route = useRoute()
const titleComputed = computed(() => {
  return route.path.startsWith('/question/edit')
    ? `编辑问卷 - ${pageInfo.value.title}`
    : route.path.startsWith('/question/stat')
      ? '问卷统计'
      : '问卷'
})
useTitle(titleComputed)
useRouterPage(waitingUserData)
</script>

<style scoped lang="scss"></style>
