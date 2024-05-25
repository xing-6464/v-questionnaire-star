<template>
  <a-layout class="common-layout">
    <a-layout-header class="header">
      <div class="left">
        <Logo />
      </div>
      <div class="right">
        <UserInfo />
      </div>
    </a-layout-header>
    <a-layout-content class="main">
      <template v-if="!waitingUserData">
        <router-view></router-view>
      </template>
      <div v-else style="text-align: center; margin-top: 60px">
        <ASpin />
      </div>
    </a-layout-content>
    <a-layout-footer class="footer">小星问卷 &copy; 2024 - present. Created by 星</a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import UserInfo from '@/components/UserInfo.vue'
import useLoadUserData from '@/hooks/useLoadUserData'
import useRouterPage from '@/hooks/useRouterPage'

const { waitingUserData } = useLoadUserData()
useRouterPage(waitingUserData)
</script>

<style scoped lang="scss">
.header {
  padding: 0 24px;

  .left {
    float: left;
  }

  .right {
    float: right;
  }
}

.main {
  min-height: calc(100vh - 64px - 65px);
}

.footer {
  text-align: center;
  background-color: #f7f7f7;
  border-top: 1px solid #e8e8e8;
}
</style>
