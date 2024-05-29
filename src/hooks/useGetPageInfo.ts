import { usePageInfoStore } from '@/stores/pageInfo'
import { storeToRefs } from 'pinia'

function useGetPageInfo() {
  const store = usePageInfoStore()
  const { pageInfo } = storeToRefs(store)
  const { resetPageInfo } = store

  return {
    pageInfo,
    resetPageInfo
  }
}

export default useGetPageInfo
