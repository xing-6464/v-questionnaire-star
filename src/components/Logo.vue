<template>
  <div class="container">
    <router-link :to="pathname">
      <a-space>
        <a-typography-title>
          <FormOutlined />
        </a-typography-title>
        <a-typography-title>小星问卷</a-typography-title>
      </a-space>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { FormOutlined } from '@ant-design/icons-vue'
import { ref, watch } from 'vue'
import { HOME_PATHNAME, MANAGE_INDEX_PATHNAME } from '@/router'
import { useUserInfo } from '@/stores/user'
import { storeToRefs } from 'pinia'

const { userInfo } = storeToRefs(useUserInfo())
const pathname = ref(HOME_PATHNAME)

watch(
  pathname,
  () => {
    if (userInfo.value.username) {
      pathname.value = MANAGE_INDEX_PATHNAME
    }
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.container {
  width: 200px;
  margin: 12px 0;
  line-height: 1;
  text-align: center;

  h1 {
    font-size: 32px;
    color: #f7f7f7;
  }
}
</style>
