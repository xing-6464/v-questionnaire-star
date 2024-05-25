<template>
  <div class="header">
    <div class="left">
      <a-typography-title :level="3">我的问卷</a-typography-title>
    </div>
    <div class="right">
      <ListSearch />
    </div>
  </div>
  <div class="content">
    <div v-if="loading" style="text-align: center">
      <a-spin></a-spin>
    </div>
    <template v-if="!loading && list.length > 0">
      <template v-for="item in list" :key="item._id">
        <QuestionCard
          :_id="item._id"
          :answer-count="item.answerCount"
          :created-at="item.createdAt"
          :is-published="item.isPublished"
          :is-star="item.isStar"
          :title="item.title"
        />
      </template>
    </template>
  </div>
  <div class="footer">
    <div ref="loadMoreRef">loadMore ...</div>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import ListSearch from '@/components/ListSearch.vue'
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { useRequest } from 'vue-request'
import { getQuestionListService } from '@/services/question'
import { LIST_SEARCH_PARAM_KEY, PAGE_SIZE } from '@/constant'

const route = useRoute()
const loadMoreRef = ref<HTMLDivElement | null>(null)
const list = ref<any[]>([]) // 列表数据
const page = ref(1) // 请求页码
const total = ref(0)
const haveMoreData = computed(() => total.value > list.value.length)

// 真正加载
const { run: load, loading } = useRequest(
  async () => {
    const data = await getQuestionListService({
      page: page.value,
      pageSize: PAGE_SIZE,
      keyword: (route.query[LIST_SEARCH_PARAM_KEY] || '') as string
    })

    return data
  },
  {
    manual: true,
    onSuccess: (res) => {
      const { list: l = [], total: t = 0 } = res
      list.value = list.value.concat(l)
      console.log(list.value)
      total.value = t
      page.value += 1
    }
  }
)

// 尝试加载
const tryLoadMore = useDebounceFn(() => {
  const elem = loadMoreRef.value
  if (elem === null) return

  const domRect = elem.getBoundingClientRect()
  if (domRect === null) return

  const { bottom } = domRect
  if (bottom <= document.body.clientHeight) {
    load()
  }
}, 500)

// 监听路由变化，开始加载数据
watch(
  () => route.query,
  () => {
    tryLoadMore()
  },
  {
    immediate: true
  }
)

// 监听列表数据变化，更新数据
watch(haveMoreData, (newValue) => {
  if (newValue) {
    window.addEventListener('scroll', tryLoadMore)
  }

  return () => {
    window.removeEventListener('scroll', tryLoadMore)
  }
})
</script>

<style scoped lang="scss">
@import url('./common.scss');
</style>
