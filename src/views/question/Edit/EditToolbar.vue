<template>
  <ASpace>
    <ATooltip title="删除">
      <AButton shape="circle" :icon="h(DeleteOutlined)" @click="handleDelete" />
    </ATooltip>
    <ATooltip title="隐藏">
      <AButton shape="circle" :icon="h(EyeInvisibleOutlined)" @click="handleHidden" />
    </ATooltip>
    <ATooltip title="锁定">
      <AButton
        shape="circle"
        :icon="h(LockOutlined)"
        @click="handleLock"
        :type="selectedComponent?.isLocked ? 'primary' : 'default'"
      />
    </ATooltip>
  </ASpace>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons-vue'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

const {
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  selectedComponent,
  selectedId
} = useGetComponentInfo()

// 删除功能
function handleDelete() {
  removeSelectedComponent()
}

// 隐藏功能
function handleHidden() {
  changeComponentHidden({ fe_id: selectedId.value, isHidden: true })
}

// 锁定功能
function handleLock() {
  toggleComponentLocked({ fe_id: selectedId.value })
}
</script>

<style scoped></style>
