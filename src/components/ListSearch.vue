<template>
  <a-input-search
    placeholder="输入关键字搜索"
    v-model:value="searchVal"
    size="large"
    @Search="handleSearch"
    allow-clear
    style="width: 260px"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { LIST_SEARCH_PARAM_KEY } from '@/constant'

const router = useRouter()
const route = useRoute()

const searchVal = ref('')

watch(
  () => route.query,
  (newVal) => {
    const keyword = newVal[LIST_SEARCH_PARAM_KEY] || ''
    searchVal.value = keyword as string
  },
  { immediate: true }
)

function handleSearch(searchVal: string) {
  router.push({ path: route.path, query: { [LIST_SEARCH_PARAM_KEY]: searchVal } })
}
</script>

<style scoped lang="scss"></style>
