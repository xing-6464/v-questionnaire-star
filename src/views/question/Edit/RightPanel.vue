<template>
  <a-tabs default-active-key="prop">
    <a-tab-pane key="prop">
      <template #tab>
        <span>
          <FileTextOutlined />
          属性
        </span>
      </template>
      <ComponentProp />
    </a-tab-pane>
    <a-tab-pane key="setting">
      <template #tab>
        <span>
          <SettingOutlined />
          页面设置
        </span>
      </template>
      <div>设置</div>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons-vue'
import ComponentProp from './ComponentProp.vue'
</script>
