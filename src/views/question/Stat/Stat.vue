<template>
  <div class="container">
    <StatHeader />
    <div class="content-wrapper">
      <template v-if="loading">
        <div style="text-align: center; margin-top: 60px">
          <ASpin />
        </div>
      </template>
      <div v-else class="content">
        <template v-if="typeof pageInfo.isPublished === 'boolean' && !pageInfo.isPublished">
          <div style="flex: 1">
            <AResult status="warning" title="该问卷尚未发布">
              <template #extra>
                <AButton type="primary" @click="$router.back()">返回</AButton>
              </template>
            </AResult>
          </div>
        </template>
        <template v-else>
          <div class="left">
            <ComponentList
              :selectedComponentId="selectedComponentId"
              :selectedComponentType="selectedComponentType"
              @change-selected-component-id="handleChangeId"
              @change-selected-component-type="handleChangeType"
            />
          </div>
          <div class="main">
            <PageStat
              :selectedComponentId="selectedComponentId"
              :selectedComponentType="selectedComponentType"
              @change-selected-component-id="handleChangeId"
              @change-selected-component-type="handleChangeType"
            />
          </div>
          <div class="right">
            <ChartStat
              :selectedComponentId="selectedComponentId"
              :selectedComponentType="selectedComponentType"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import useGetPageInfo from '@/hooks/useGetPageInfo'
import StatHeader from './StatHeader.vue'
import ComponentList from './ComponentList.vue'
import PageStat from './PageStat.vue'
import ChartStat from './ChartStat.vue'

defineProps<{ id: string }>()
const selectedComponentId = ref('')
const selectedComponentType = ref('')

function handleChangeId(id: string) {
  selectedComponentId.value = id
}

function handleChangeType(type: string) {
  selectedComponentType.value = type
}

const { loading } = useLoadQuestionData()
const { pageInfo } = useGetPageInfo()
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
  min-height: 100vh;

  .content-wrapper {
    flex: auto;
    padding: 12px 0;

    .content {
      margin: 0 24px;
      display: flex;

      .left {
        width: 350px;
        margin-right: 24px;
      }

      .main {
        flex: auto;
        background-color: #fff;
        padding: 12px 18px;
      }

      .right {
        width: 400px;
        margin-left: 24px;
        background-color: #fff;
        padding: 12px 18px;
        overflow: hidden;
      }
    }
  }
}
</style>
