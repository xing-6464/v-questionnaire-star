<template>
  <template v-if="loading">
    <div style="text-align: center; margin-top: 24px">
      <ASpin />
    </div>
  </template>
  <div v-else class="canvas">
    <template v-for="component in componentList" :key="component.id">
      <div class="component-wrapper">
        <div class="component">
          <GenComponent :type="component.type" :props="component.props" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import GenComponent from './GenComponent.vue'

defineProps<{ loading: boolean }>()

const { componentList } = useGetComponentInfo()
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
.component {
  pointer-events: none;
}
</style>
