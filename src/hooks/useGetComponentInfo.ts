import { useComponentsStore } from '@/stores/components'
import { storeToRefs } from 'pinia'

function useGetComponentInfo() {
  const store = useComponentsStore()
  const { componentList, selectedId, selectedComponent, copiedComponent } = storeToRefs(store)
  const {
    changeSelectedId,
    addComponent,
    changeComponentProps,
    removeSelectedComponent,
    changeComponentHidden,
    toggleComponentLocked,
    copySelectedComponent,
    pasteCopiedComponent,
    selectedPrevComponent,
    selectedNextComponent
  } = store

  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent,
    changeSelectedId,
    addComponent,
    changeComponentProps,
    removeSelectedComponent,
    changeComponentHidden,
    toggleComponentLocked,
    copySelectedComponent,
    pasteCopiedComponent,
    selectedPrevComponent,
    selectedNextComponent
  }
}

export default useGetComponentInfo
