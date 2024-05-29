import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import cloneDeep from 'lodash.clonedeep'
import { nanoid } from 'nanoid'

import { type ComponentPropsType } from '@/components/QuestionComponents'
import { getNextSelectedId, insertNewComponent } from './utils'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  isHidden?: boolean
  isLocked?: boolean
  props: ComponentPropsType
}

export const useComponentsStore = defineStore('components', () => {
  const componentList = ref<ComponentInfoType[]>()
  const selectedId = ref('')
  const copiedComponent = ref<ComponentInfoType | null>(null)

  const selectedComponent = computed(() =>
    componentList.value?.find((c) => c.fe_id === selectedId.value)
  )

  // 重置 componentList
  function resetComponents(payload: {
    componentList: ComponentInfoType[]
    selectedId: string
    copiedComponent: ComponentInfoType | null
  }) {
    componentList.value = payload.componentList
    selectedId.value = payload.selectedId
    copiedComponent.value = payload.copiedComponent
  }

  // 修改 selectedId
  function changeSelectedId(id: string) {
    selectedId.value = id
  }

  // 新增 component
  function addComponent(payload: ComponentInfoType) {
    insertNewComponent({ componentList, selectedId }, payload)
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

  // 删除选中的组件
  function removeSelectedComponent() {
    const selectedIdVal = selectedId.value
    const componentListVal = componentList.value

    const nextSelectedId = getNextSelectedId(selectedIdVal, componentListVal!)

    const index = componentListVal?.findIndex((c) => c.fe_id === selectedIdVal)
    componentListVal?.splice(index!, 1)
    selectedId.value = nextSelectedId
  }

  // 隐藏/显示组件
  function changeComponentHidden(payload: { fe_id: string; isHidden: boolean }) {
    const { isHidden, fe_id } = payload
    const componentListVal = componentList.value

    let newSelectedId = ''
    if (isHidden) {
      // 隐藏当前组件
      newSelectedId = getNextSelectedId(fe_id, componentListVal!)
    } else {
      // 显示当前组件
      newSelectedId = fe_id
    }
    selectedId.value = newSelectedId

    const curComp = componentListVal?.find((c) => c.fe_id === fe_id)
    if (curComp) {
      curComp.isHidden = isHidden
    }
  }

  // 锁定/解锁组件
  function toggleComponentLocked(payload: { fe_id: string }) {
    const { fe_id } = payload
    const componentListVal = componentList.value

    const curComp = componentListVal?.find((c) => c.fe_id === fe_id)
    if (curComp) {
      curComp.isLocked = !curComp.isLocked
    }
  }

  // 复制选中的组件
  function copySelectedComponent() {
    const selectedComponentVal = selectedComponent.value

    if (selectedComponentVal == null) return
    copiedComponent.value = cloneDeep(selectedComponentVal) // 深拷贝
  }

  // 粘贴组件
  function pasteCopiedComponent() {
    const copiedComponentVal = { ...copiedComponent.value }

    if (copiedComponentVal == null) return
    copiedComponentVal.fe_id = nanoid(10)

    // 新增组件
    insertNewComponent({ componentList, selectedId }, copiedComponentVal as ComponentInfoType)
  }

  // 选中上一个
  function selectedPrevComponent() {
    const selectedIdVal = selectedId.value
    const componentListVal = componentList.value

    const selectedIndex = componentListVal?.findIndex((c) => c.fe_id === selectedIdVal)
    if (selectedIndex == null) return
    if (selectedIndex < 0) return
    if (selectedIndex <= 0) return

    selectedId.value = componentListVal?.[selectedIndex - 1].fe_id!
  }

  // 选中下一个
  function selectedNextComponent() {
    const selectedIdVal = selectedId.value
    const componentListVal = componentList.value

    const selectedIndex = componentListVal?.findIndex((c) => c.fe_id === selectedIdVal)

    if (selectedIndex == null) return
    if (selectedIndex < 0) return
    if (selectedIndex + 1 === componentListVal?.length) return

    selectedId.value = componentListVal?.[selectedIndex + 1].fe_id!
  }

  // 修改组件标题
  function changeComponentTitle(payload: { fe_id: string; title: string }) {
    const { fe_id, title } = payload
    const curComp = componentList.value?.find((c) => c.fe_id === fe_id)
    if (curComp) curComp.title = title
  }

  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent,
    resetComponents,
    changeSelectedId,
    addComponent,
    changeComponentProps,
    removeSelectedComponent,
    changeComponentHidden,
    toggleComponentLocked,
    copySelectedComponent,
    pasteCopiedComponent,
    selectedPrevComponent,
    selectedNextComponent,
    changeComponentTitle
  }
})
