<template>
  <div>
    <p>Home</p>
    <div>
      <el-button @click="handelClick">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handelClick() {
  router.push('/login')
}
</script>

<style lang="scss" scoped></style>
