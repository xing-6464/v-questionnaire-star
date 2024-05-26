<template>
  <ASpace>
    <ATooltip title="删除">
      <AButton shape="circle" :icon="h(DeleteOutlined)" @click="handleDelete" />
    </ATooltip>
  </ASpace>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { DeleteOutlined } from '@ant-design/icons-vue'
import { useComponentsStore } from '@/stores/components'

const { removeSelectedComponent } = useComponentsStore()

function handleDelete() {
  removeSelectedComponent()
}
</script>

<style scoped></style>
