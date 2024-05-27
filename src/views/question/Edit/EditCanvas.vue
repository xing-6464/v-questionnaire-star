<template>
  <template v-if="loading">
    <div style="text-align: center; margin-top: 24px">
      <ASpin />
    </div>
  </template>
  <div v-else class="canvas">
    <template
      v-for="component in componentList?.filter((c: any) => !c.isHidden)"
      :key="component.fe_id"
    >
      <div
        :class="{
          'component-wrapper': true,
          selected: component.fe_id === selectedId,
          locked: component.isLocked
        }"
        @click.stop="handleClick(component.fe_id)"
      >
        <div class="component">
          <GenComponent :component-info="component" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import GenComponent from './GenComponent.vue'

import useBindCanvasKeyPress from '@/hooks/useBindCanvasKeyPress'

defineProps<{ loading: boolean }>()

const { componentList, selectedId, changeSelectedId } = useGetComponentInfo()
// 绑定键盘事件
useBindCanvasKeyPress()

function handleClick(id: string) {
  changeSelectedId(id)
}
</script>

<style scoped lang="scss">
.canvas {
  min-height: 100%;
  background-color: #fff;
  overflow: hidden;
}
.component-wrapper {
  margin: 12px;
  border: 1px solid #fff;
  padding: 12px;
  border-radius: 3px;

  &:hover {
    border-color: #d9d9d9;
  }
}
.locked {
  opacity: 0.5;
  cursor: not-allowed;
}
.selected {
  border-color: #1890ff !important;
}
.component {
  pointer-events: none;
}
</style>
