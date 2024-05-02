<template>
  <div class="header">
    <div class="left">
      <h3>星标问卷</h3>
    </div>
    <div class="right">（搜索）</div>
  </div>
  <div class="content">
    <el-empty v-if="questionList.length === 0" description="暂无数据" />
    <template v-else v-for="q in questionList" :key="q._id">
      <QuestionCard
        :_id="q._id"
        :title="q.title"
        :isPublished="q.isPublished"
        :isStar="q.isStar"
        :answerCount="q.answerCount"
        :createdAt="q.createdAt"
      />
    </template>
  </div>
  <div class="footer">分页</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'
const rawQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: true,
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
</script>

<style scoped lang="scss">
@import url('./common.scss');
</style>
