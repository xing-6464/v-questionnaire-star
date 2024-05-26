<template>
  <ASpace>
    <ATooltip title="删除">
      <AButton shape="circle" :icon="h(DeleteOutlined)" @click="handleDelete" />
    </ATooltip>
    <ATooltip title="隐藏">
      <AButton shape="circle" :icon="h(EyeInvisibleOutlined)" @click="handleHidden" />
    </ATooltip>
  </ASpace>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { DeleteOutlined, EyeInvisibleOutlined } from '@ant-design/icons-vue'
import { useComponentsStore } from '@/stores/components'

const { removeSelectedComponent, changeComponentHidden } = useComponentsStore()

// 删除功能
function handleDelete() {
  removeSelectedComponent()
}

// 隐藏功能
function handleHidden() {
  changeComponentHidden({ isHidden: true })
}
</script>

<style scoped></style>
