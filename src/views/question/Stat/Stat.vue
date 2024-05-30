<template>
  <template v-if="loading">
    <div style="text-align: center; margin-top: 60px">
      <ASpin />
    </div>
  </template>
  <template v-else-if="!pageInfo.isPublished">
    <div style="flex: 1">
      <AResult status="warning" title="该问卷尚未发布">
        <template #extra>
          <AButton type="primary" @click="$router.back()" />
        </template>
      </AResult>
    </div>
  </template>
  <template v-else>
    <div>stat</div>
  </template>
</template>

<script setup lang="ts">
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import useGetPageInfo from '@/hooks/useGetPageInfo'

const props = defineProps<{ id: string }>()
console.log(props.id)

const { loading } = useLoadQuestionData()
const { pageInfo } = useGetPageInfo()
</script>

<style scoped lang="scss"></style>
