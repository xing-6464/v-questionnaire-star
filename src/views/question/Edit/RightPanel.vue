<template>
  <a-tabs :active-key="activeKey">
    <a-tab-pane :key="TAB_KEYS.PROP_KEY">
      <template #tab>
        <span>
          <FileTextOutlined />
          属性
        </span>
      </template>
      <ComponentProp />
    </a-tab-pane>
    <a-tab-pane :key="TAB_KEYS.SETTING_KEY">
      <template #tab>
        <span>
          <SettingOutlined />
          页面设置
        </span>
      </template>
      <PageSetting />
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons-vue'
import ComponentProp from './ComponentProp.vue'
import PageSetting from './PageSetting.vue'
import useGetComponentInfo from '@/hooks/useGetComponentInfo'

enum TAB_KEYS {
  PROP_KEY = 'prop',
  SETTING_KEY = 'setting'
}

const activeKey = ref(TAB_KEYS.PROP_KEY)
const { selectedId } = useGetComponentInfo()

watch(selectedId, (newVal) => {
  if (newVal) activeKey.value = TAB_KEYS.PROP_KEY
  else activeKey.value = TAB_KEYS.SETTING_KEY
})
</script>
