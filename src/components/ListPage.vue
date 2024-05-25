<template>
  <a-pagination
    :current="current"
    :total="total"
    :page-size="pageSize"
    @change="handlePageChange"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE_PARAM_KEY, PAGE_SIZE } from '@/constant'

defineProps<{ total: number }>()

const route = useRoute()
const router = useRouter()

const current = ref(1)
const pageSize = ref(PAGE_SIZE)

watch(
  () => route.query,
  (newQuery) => {
    const page = parseInt((newQuery[LIST_PAGE_PARAM_KEY] || '') as string) || 1
    const size = parseInt((newQuery[LIST_PAGE_SIZE_PARAM_KEY] || '') as string) || PAGE_SIZE
    current.value = page
    pageSize.value = size
  },
  { immediate: true }
)

function handlePageChange(page: number, pageSize: number) {
  const query = {
    ...route.query,
    [LIST_PAGE_PARAM_KEY]: page,
    [LIST_PAGE_SIZE_PARAM_KEY]: pageSize
  }
  router.push({
    path: route.path,
    query
  })
}
</script>
