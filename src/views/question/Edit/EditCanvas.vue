<template>
  <template v-if="loading">
    <div style="text-align: center; margin-top: 24px">
      <ASpin />
    </div>
  </template>
  <div v-else class="canvas">
    <div class="component-wrapper">
      <div class="component">
        <QuestionTitle />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="component">
        <QuestionInput />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QuestionInput from '@/components/QuestionComponents/QuestionInput/Component.vue'
import QuestionTitle from '@/components/QuestionComponents/QuestionTitle/Component.vue'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

defineProps<{ loading: boolean }>()

const { componentList } = useGetComponentInfo()
console.log(componentList.value)
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
