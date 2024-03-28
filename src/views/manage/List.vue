<template>
  <div class="header">
    <div class="left">
      <h3>我的问卷</h3>
    </div>
    <div class="right">搜索</div>
  </div>
  <div class="content">
    <template v-for="item in questionList" :key="item._id">
      <QuestionCard :data="item" />
    </template>
  </div>
  <div class="footer">footer</div>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
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
const route = useRoute()

console.log(route.query.key)
</script>

<style scoped lang="scss">
.header {
  display: flex;

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
    text-align: right;
  }
}
.content {
  margin-bottom: 20px;
}
.footer {
  text-align: center;
}
</style>
