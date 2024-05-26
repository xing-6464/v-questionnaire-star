import { useComponentsStore } from '@/stores/components'
import { storeToRefs } from 'pinia'

function useGetComponentInfo() {
  const store = useComponentsStore()
  const { componentList, selectedId, selectedComponent } = storeToRefs(store)
  const { changeSelectedId, addComponent } = store

  return { componentList, selectedId, selectedComponent, changeSelectedId, addComponent }
}

export default useGetComponentInfo
