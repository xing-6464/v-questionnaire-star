<template>
  <div v-if="selectedComponent == null || componentConf == null" style="text-align: center">
    未选中组件
  </div>
  <template v-else>
    <component
      :is="componentConf.PropComponent"
      v-bind="selectedComponent.props"
      @change="onChange"
    />
  </template>
</template>

<script setup lang="ts">
import { getComponentConfByType } from '@/components/QuestionComponents'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { computed } from 'vue'

const { selectedComponent, changeComponentProps } = useGetComponentInfo()
const componentConf = computed(() => getComponentConfByType(selectedComponent.value?.type || ''))

function onChange(value: any) {
  if (selectedComponent.value == null) return
  const { fe_id } = selectedComponent.value
  changeComponentProps({ fe_id, props: value })
}
</script>
