<template>
  <div>Question</div>

  <div>
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
import { RouterView } from 'vue-router'

const { waitingUserData } = useLoadUserData()
useRouterPage(waitingUserData)
</script>

<style scoped lang="scss"></style>
