import { useComponentsStore } from '@/stores/components'
import { storeToRefs } from 'pinia'

function useGetComponentInfo() {
  const store = useComponentsStore()
  const { componentList } = storeToRefs(store)

  return { componentList }
}

export default useGetComponentInfo
