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
  <div class="footer">loadMore... 上滑加载更多...</div>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import ListSearch from '@/components/ListSearch.vue'
import { useTitle } from '@vueuse/core'
import { getQuestionListService } from '@/services/question'
import { useRequest } from 'vue-request'

const { data, loading } = useRequest(getQuestionListService)

useTitle('小星问卷 - 我的问卷')
</script>

<style scoped lang="scss">
@import url('./common.scss');
</style>
