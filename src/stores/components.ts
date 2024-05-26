import { ref } from 'vue'
import { defineStore } from 'pinia'

import { type ComponentPropsType } from '@/components/QuestionComponents'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  props: ComponentPropsType
}

export const useComponentsStore = defineStore('components', () => {
  const componentList = ref<ComponentInfoType[]>()
  const selectedId = ref('')

  // 重置 componentList
  function resetComponents(payload: { componentList: ComponentInfoType[]; selectedId: string }) {
    componentList.value = payload.componentList
    selectedId.value = payload.selectedId
  }

  // 修改 selectedId
  function changeSelectedId(id: string) {
    selectedId.value = id
  }

  return {
    componentList,
    selectedId,
    resetComponents,
    changeSelectedId
  }
})
