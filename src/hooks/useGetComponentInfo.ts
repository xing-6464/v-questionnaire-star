import { useComponentsStore } from '@/stores/components'
import { storeToRefs } from 'pinia'

function useGetComponentInfo() {
  const store = useComponentsStore()
  const { componentList, selectedId } = storeToRefs(store)
  const { changeSelectedId } = store

  return { componentList, selectedId, changeSelectedId }
}

export default useGetComponentInfo
