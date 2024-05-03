<template>
  <div class="header">
    <div class="left">
      <a-typography-title :level="3">回收站</a-typography-title>
    </div>
    <div class="right">
      <ListSearch />
    </div>
  </div>
  <div class="content">
    <a-empty v-if="questionList.length === 0" />
    <template v-else>
      <div style="margin-bottom: 16px">
        <a-space>
          <a-button type="primary" :disabled="selectedIds.length === 0">恢复</a-button>
          <a-button danger :disabled="selectedIds.length === 0" @click="del">彻底删除</a-button>
        </a-space>
      </div>
      <a-table
        :data-source="questionList"
        :columns="tableColumns"
        style="width: 100%"
        :row-key="(q) => q._id"
        :row-selection="{
          type: 'checkbox',
          onChange: (selectedRowKeys) => {
            selectedIds = selectedRowKeys as string[]
          }
        }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'isPublished'">
            <a-tag v-if="record.isPublished" color="processing">已发布</a-tag>
            <a-tag v-else>未发布</a-tag>
          </template>
        </template>
      </a-table>
    </template>
  </div>
  <div class="footer">分页</div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { useTitle } from '@vueuse/core'
import { Modal, message } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import ListSearch from '@/components/ListSearch.vue'

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
const tableColumns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '发布状态',
    dataIndex: 'isPublished',
    key: 'isPublished'
  },
  {
    title: '答卷',
    dataIndex: 'answerCount',
    key: 'answerCount'
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt'
  }
]

useTitle('小星问卷 - 回收站')
const questionList = ref(rawQuestionList)
const selectedIds = ref<string[]>([])

function del() {
  Modal.confirm({
    title: '确认彻底删除问卷？',
    content: '删除后将无法恢复，请谨慎操作！',
    okText: '确认',
    cancelText: '取消',
    icon: h(ExclamationCircleOutlined),
    onOk: () => {
      message.success(`删除${JSON.stringify(selectedIds)}`)
    }
  })
}
</script>

<style scoped lang="scss">
@import url('./common.scss');
</style>
