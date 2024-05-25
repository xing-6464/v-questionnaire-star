<template>
  <template v-if="userInfo && userInfo.username">
    <span style="color: #e8e8e8">
      <UserOutlined />
      {{ userInfo.nickname }}
    </span>
    <AButton type="link" @click="logout">退出</AButton>
  </template>
  <template v-else>
    <router-link :to="LOGIN_PATHNAME">登录</router-link>
  </template>
</template>

<script setup lang="ts">
import { LOGIN_PATHNAME } from '@/router'
import { useUserInfo } from '@/stores/user'
import { removeToken } from '@/utils/user-token'
import { UserOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const router = useRouter()

// const { data } = useRequest(getUserInfoService)
const store = useUserInfo()
const { userInfo } = storeToRefs(store)
const { logout: logoutInfo } = store

function logout() {
  // 清除token
  logoutInfo()
  removeToken()
  router.push(LOGIN_PATHNAME)
  message.success('退出成功')
}
</script>
