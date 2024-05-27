<template>
  <a-tabs default-active-key="componentLib">
    <a-tab-pane key="componentLib">
      <template #tab>
        <span>
          <AppstoreOutlined />
          Tab 1
        </span>
      </template>
      <ComponentLib />
    </a-tab-pane>
    <a-tab-pane key="layers">
      <template #tab>
        <span>
          <BarsOutlined />
          Tab 2
        </span>
      </template>
      <div>图层</div>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons-vue'
import ComponentLib from './ComponentLib.vue'
</script>
