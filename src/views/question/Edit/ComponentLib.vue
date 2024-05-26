<template>
  <div v-for="(group, index) in componentConfGroup" :key="group.groupId">
    <ATypographyTitle
      :level="3"
      :style="{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0px' }"
      >{{ group.groupName }}</ATypographyTitle
    >
    <div>
      <div v-for="c in group.components" :key="c.type" class="wrapper" @click="handleClick(c)">
        <div class="component">
          <component :is="c.Component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'
import { componentConfGroup, type ComponentConfType } from '@/components/QuestionComponents'
import { useComponentsStore } from '@/stores/components'

const { addComponent } = useComponentsStore()

function handleClick(c: ComponentConfType) {
  const { title, type, defaultProps } = c
  addComponent({ fe_id: nanoid(), title, type, props: defaultProps })
}
</script>

<style scoped lang="scss">
.wrapper {
  margin-bottom: 12px;
  cursor: pointer;
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
