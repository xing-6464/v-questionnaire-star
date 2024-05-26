<template>
  <div v-for="(group, index) in componentConfGroup" :key="group.groupId">
    <ATypographyTitle
      :level="3"
      :style="{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0px' }"
      >{{ group.groupName }}</ATypographyTitle
    >
  </div>
</template>

<script setup lang="ts">
import { componentConfGroup } from '@/components/QuestionComponents'
</script>
