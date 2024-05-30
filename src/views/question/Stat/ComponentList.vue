<template>
  <div class="c">
    <template v-for="component in componentList?.filter((c) => !c.isHidden)" :key="component.fe_id">
      <div
        :class="{
          'component-wrapper': true,
          selected: component.fe_id === selectedComponentId
        }"
        @click.stop="
          () => {
            $emit('changeSelectedComponentId', component.fe_id)
            $emit('changeSelectedComponentType', component.type)
          }
        "
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
import GenComponent from '../Edit/GenComponent.vue'

defineProps<{
  selectedComponentId: string
  selectedComponentType: string
}>()
defineEmits(['changeSelectedComponentId', 'changeSelectedComponentType'])

const { componentList } = useGetComponentInfo()
</script>

<style scoped lang="scss">
.c {
  min-height: 100%;
  overflow-y: auto;
  background-color: #fff;
}

.component-wrapper {
  margin: 12px;
  border: 1px solid #fff;
  padding: 12px 6px;
  border-radius: 3px;

  &:hover {
    border-color: #d9d9d9;
  }
}

.selected {
  border-color: #1890ff !important;
}

.component {
  pointer-events: none;
  opacity: 0.8;
}
</style>
