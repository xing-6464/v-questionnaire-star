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
    <template v-if="!loading && data && data.list.length > 0">
      <template v-for="item in data.list" :key="item._id">
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
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'

const route = useRoute()
const loadMoreRef = ref<HTMLDivElement | null>(null)
const list = ref<any[]>([]) // 列表数据
const page = ref(1) // 请求页码
const total = ref(0)
const haveMoreData = computed(() => total.value > list.value.length)

const { data, loading } = useLoadQuestionListData()

const tryLoadMore = useDebounceFn(() => {
  const elem = loadMoreRef.value
  if (elem === null) return

  const domRect = elem.getBoundingClientRect()
  if (domRect === null) return

  const { bottom } = domRect
  if (bottom <= document.body.clientHeight) {
    console.log('执行加载')
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

// 监听列表数据变化，更新页码
watch(
  () => route.query,
  () => {
    // if (haveMoreData.value) {
    window.addEventListener('scroll', tryLoadMore)
    // }

    return () => {
      window.removeEventListener('scroll', tryLoadMore)
    }
  },
  {
    immediate: true
  }
)
</script>

<style scoped lang="scss">
@import url('./common.scss');
</style>
