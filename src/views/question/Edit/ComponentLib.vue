<template>
  <div v-for="(group, index) in componentConfGroup" :key="group.groupId">
    <ATypographyTitle
      :level="3"
      :style="{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0px' }"
      >{{ group.groupName }}</ATypographyTitle
    >
    <div>
      <div v-for="c in group.components" :key="c.title" class="wrapper">
        <div class="component">
          <component :is="c.Component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { componentConfGroup } from '@/components/QuestionComponents'
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
