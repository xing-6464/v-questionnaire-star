<template>
  <div v-if="selectedComponent == null || componentConf == null" style="text-align: center">
    未选中组件
  </div>
  <template v-else>
    <component :is="componentConf.PropComponent" v-bind="selectedComponent.props" />
  </template>
</template>

<script setup lang="ts">
import { getComponentConfByType } from '@/components/QuestionComponents'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { computed } from 'vue'

const { selectedComponent } = useGetComponentInfo()
const componentConf = computed(() => getComponentConfByType(selectedComponent.value?.type || ''))
</script>
