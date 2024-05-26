import { defineStore } from 'pinia'
import { type ComponentPropsType } from '@/components/QuestionComponents'
import { ref } from 'vue'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  props: ComponentPropsType
}

export const useComponentsStore = defineStore('components', () => {
  const componentList = ref<ComponentInfoType[]>()

  function resetComponents(payload: ComponentInfoType[]) {
    componentList.value = payload
  }

  return {
    componentList,
    resetComponents
  }
})
