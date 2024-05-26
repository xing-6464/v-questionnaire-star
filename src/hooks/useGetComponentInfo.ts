import { useComponentsStore } from '@/stores/components'
import { storeToRefs } from 'pinia'

function useGetComponentInfo() {
  const store = useComponentsStore()
  const { componentList, selectedId, selectedComponent } = storeToRefs(store)
  const {
    changeSelectedId,
    addComponent,
    changeComponentProps,
    removeSelectedComponent,
    changeComponentHidden,
    toggleComponentLocked
  } = store

  return {
    componentList,
    selectedId,
    selectedComponent,
    changeSelectedId,
    addComponent,
    changeComponentProps,
    removeSelectedComponent,
    changeComponentHidden,
    toggleComponentLocked
  }
}

export default useGetComponentInfo
