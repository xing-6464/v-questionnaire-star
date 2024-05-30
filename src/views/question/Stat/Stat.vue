<template>
  <div class="container">
    <div>Header</div>
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
          <div class="left">left</div>
          <div class="main">main</div>
          <div class="right">right</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import useGetPageInfo from '@/hooks/useGetPageInfo'

defineProps<{ id: string }>()

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
