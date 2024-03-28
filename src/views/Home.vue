<template>
  <div>
    <div>
      <button @click="handelClick">登录</button>
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
