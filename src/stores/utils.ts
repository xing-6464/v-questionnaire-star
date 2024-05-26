import type { Ref } from 'vue'
import { type ComponentInfoType } from './components'
export function getNextSelectedId(fe_id: string, componentList: ComponentInfoType[]) {
  const visibleComponentList = componentList.filter((c) => !c.isHidden)
  const index = visibleComponentList.findIndex((c) => c.fe_id === fe_id)
  if (index < 0) return ''

  // 重新计算 selectedId
  let newSelectedId = ''
  const length = visibleComponentList.length
  if (length <= 1) {
    newSelectedId = ''
  } else {
    if (index + 1 === length) {
      // 删掉最后一个
      newSelectedId = visibleComponentList[index - 1].fe_id
    } else {
      // 正常移动
      newSelectedId = visibleComponentList[index + 1].fe_id
    }
  }

  return newSelectedId
}

export function insertNewComponent(
  state: { componentList: Ref<ComponentInfoType[] | undefined>; selectedId: Ref<string> },
  newComponent: ComponentInfoType
) {
  const selectedIdVal = state.selectedId.value
  const componentListVal = state.componentList.value

  const index = componentListVal?.findIndex((c) => c.fe_id === selectedIdVal)
  if (index == null) return
  if (index < 0) {
    componentListVal?.push(newComponent)
  } else {
    componentListVal?.splice(index + 1, 0, newComponent)
  }
  state.selectedId.value = newComponent.fe_id
}
