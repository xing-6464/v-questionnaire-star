<template>
  <template v-if="componentConf == null"></template>
  <template v-else>
    <component :is="componentConf.Component" v-bind="componentInfo.props" />
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getComponentConfByType } from '@/components/QuestionComponents'
import type { ComponentInfoType } from '@/stores/components'

const props = defineProps<{ componentInfo: ComponentInfoType }>()
const componentConf = computed(() => getComponentConfByType(props.componentInfo.type))
</script>
