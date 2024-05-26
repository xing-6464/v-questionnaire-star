import { computed, ref } from 'vue'
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

  const selectedComponent = computed(() =>
    componentList.value?.find((c) => c.fe_id === selectedId.value)
  )

  // 重置 componentList
  function resetComponents(payload: { componentList: ComponentInfoType[]; selectedId: string }) {
    componentList.value = payload.componentList
    selectedId.value = payload.selectedId
  }

  // 修改 selectedId
  function changeSelectedId(id: string) {
    selectedId.value = id
  }

  // 新增 component
  function addComponent(payload: ComponentInfoType) {
    const newComponent = payload
    const selectedIdVal = selectedId.value
    const componentListVal = componentList.value

    const index = componentListVal?.findIndex((c) => c.fe_id === selectedIdVal)
    if (index == null) return
    if (index < 0) {
      componentListVal?.push(newComponent)
    } else {
      componentListVal?.splice(index + 1, 0, newComponent)
    }
    selectedId.value = newComponent.fe_id
  }

  // 修改组件属性
  function changeComponentProps(payload: { fe_id: string; props: ComponentPropsType }) {
    const { fe_id, props } = payload
    // 当前要修改的组件
    const curComp = componentList.value?.find((c) => c.fe_id === fe_id)
    if (curComp) {
      curComp.props = {
        ...curComp.props,
        ...props
      }
    }
  }

  return {
    componentList,
    selectedId,
    selectedComponent,
    resetComponents,
    changeSelectedId,
    addComponent,
    changeComponentProps
  }
})
