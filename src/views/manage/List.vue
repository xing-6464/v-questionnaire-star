<template>
  <div class="header">
    <div class="left">
      <h3>我的问卷</h3>
    </div>
    <div class="right">搜索</div>
  </div>
  <div class="content">
    <template v-if="questionList.length > 0">
      <template v-for="item in questionList" :key="item._id">
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
import { useTitle } from '@vueuse/core'
import { ref } from 'vue'
const rawQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23'
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: true,
    answerCount: 5,
    createdAt: '3月11日 13:23'
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: true,
    answerCount: 6,
    createdAt: '3月12日 13:23'
  }
]

const questionList = ref(rawQuestionList)
useTitle('小星问卷 - 我的问卷')
</script>

<style scoped lang="scss">
@import url(./common.scss);
</style>
