<template>
  <div class="header">
    <div class="left">
      <a-typography-title :level="3">星标问卷</a-typography-title>
    </div>
    <div class="right">
      <ListSearch />
    </div>
  </div>
  <div class="content">
    <div v-if="loading" style="text-align: center">
      <a-spin />
    </div>
    <a-empty v-if="!loading && data && data.list.length === 0" description="暂无数据" />
    <template v-if="!loading && data && data.list.length > 0">
      <template v-for="q in data.list" :key="q._id">
        <QuestionCard
          :_id="q._id"
          :title="q.title"
          :isPublished="q.isPublished"
          :isStar="q.isStar"
          :answerCount="q.answerCount"
          :createdAt="q.createdAt"
        />
      </template>
    </template>
  </div>
  <div class="footer">
    <ListPage :total="data?.total" />
  </div>
</template>

<script setup lang="ts">
import QuestionCard from '@/components/QuestionCard.vue'
import ListSearch from '@/components/ListSearch.vue'
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData'

const { data, loading } = useLoadQuestionListData({ isStar: true })
</script>

<style scoped lang="scss">
@import url('./common.scss');
</style>
