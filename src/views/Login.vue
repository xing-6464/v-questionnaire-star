<template>
  <div>
    <button
      @click="
        () => {
          router.back()
        }
      "
    >
      返回
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped></style>
