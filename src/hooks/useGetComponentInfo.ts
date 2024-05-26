import { useComponentsStore } from '@/stores/components'
import { storeToRefs } from 'pinia'

function useGetComponentInfo() {
  const store = useComponentsStore()
  const { componentList, selectedId, selectedComponent } = storeToRefs(store)
  const { changeSelectedId, addComponent, changeComponentProps } = store

  return {
    componentList,
    selectedId,
    selectedComponent,
    changeSelectedId,
    addComponent,
    changeComponentProps
  }
}

export default useGetComponentInfo
