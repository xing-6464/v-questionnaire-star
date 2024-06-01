<template>
  <div>
    <div v-if="!selectedComponentId">未选中组件</div>
    <div v-else>{{ JSON.stringify(stat) }}</div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRequest } from 'vue-request'
import { useRoute } from 'vue-router'
import { type PropsType } from './types'
import { getComponentStatService } from '@/services/stat'

const props = defineProps<PropsType>()
const route = useRoute()
const stat = ref([])

const { run, loading } = useRequest(
  async (questionId, componentId) => await getComponentStatService(questionId, componentId),
  {
    manual: true,
    onSuccess(res) {
      stat.value = res.stat
    }
  }
)

watch(
  [() => route.params.id, () => props.selectedComponentId],
  (value) => {
    const [questionId, selectedComponentId] = value
    if (selectedComponentId) run(questionId, selectedComponentId)
  },
  { immediate: true }
)
</script>
