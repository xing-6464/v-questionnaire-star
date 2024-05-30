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
    <ATooltip title="上移">
      <AButton shape="circle" :icon="h(UpOutlined)" @click="moveUp" :disabled="isFirst" />
    </ATooltip>
    <ATooltip title="下移">
      <AButton shape="circle" :icon="h(DownOutlined)" @click="moveDown" :disabled="isLast" />
    </ATooltip>
  </ASpace>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined,
  UpOutlined,
  DownOutlined
} from '@ant-design/icons-vue'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

const {
  componentList,
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  copySelectedComponent,
  pasteCopiedComponent,
  selectedComponent,
  selectedId,
  copiedComponent,
  moveComponent
} = useGetComponentInfo()
const selectedIndex = computed(() => {
  if (selectedId.value == null || componentList.value == null) return
  return componentList.value.findIndex((item) => item.fe_id === selectedId.value)
})
const isFirst = computed(() => {
  if (selectedIndex.value == null || componentList.value == null) return
  return selectedIndex.value <= 0
})
const isLast = computed(() => {
  if (componentList.value == null || selectedIndex.value == null) return
  return selectedIndex.value >= componentList.value.length - 1
})

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

// 上移
function moveUp() {
  if (isFirst.value || selectedIndex.value == null) return
  moveComponent({ fromIndex: selectedIndex.value, toIndex: selectedIndex.value - 1 })
}

// 下移
function moveDown() {
  if (isLast.value || selectedIndex.value == null) return
  moveComponent({ fromIndex: selectedIndex.value, toIndex: selectedIndex.value + 1 })
}
</script>
