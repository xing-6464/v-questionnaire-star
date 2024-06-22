<template>
  <ATypographyTitle :level="3">统计列表</ATypographyTitle>
  <div v-if="!selectedComponentId">组件未选中</div>
  <template v-else>
    <template v-if="componentConf">
      <div v-if="!componentConf.StatComponent">该组件无统计图表</div>
      <template v-else>
        <component :is="componentConf.StatComponent" :stat="stat" />
      </template>
    </template>
  </template>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import { useRequest } from 'vue-request'
import { useRoute } from 'vue-router'
import { type PropsType } from './types'
import { getComponentStatService } from '@/services/stat'
import { getComponentConfByType } from '../../../components/QuestionComponents/index'

const props = defineProps<PropsType>()
const route = useRoute()
const stat = ref([])
const componentConf = computed(() => {
  const res = getComponentConfByType(props.selectedComponentType)
  return res
})

const { run } = useRequest(
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
