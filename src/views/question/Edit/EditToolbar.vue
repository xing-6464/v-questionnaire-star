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
    <ATooltip title="复制">
      <AButton shape="circle" :icon="h(CopyOutlined)" @click="copy" />
    </ATooltip>
    <ATooltip title="粘贴">
      <AButton
        shape="circle"
        :icon="h(BlockOutlined)"
        @click="paste"
        :disabled="copiedComponent == null"
      />
    </ATooltip>
  </ASpace>
</template>

<script setup lang="ts">
import { h } from 'vue'
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined
} from '@ant-design/icons-vue'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

const {
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  copySelectedComponent,
  pasteCopiedComponent,
  selectedComponent,
  selectedId,
  copiedComponent
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

// 复制功能
function copy() {
  copySelectedComponent()
}

// 粘贴功能
function paste() {
  pasteCopiedComponent()
}
</script>

<style scoped></style>
