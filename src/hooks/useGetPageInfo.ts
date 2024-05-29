import { usePageInfoStore } from '@/stores/pageInfo'
import { storeToRefs } from 'pinia'

function useGetPageInfo() {
  const store = usePageInfoStore()
  const { pageInfo } = storeToRefs(store)
  const { resetPageInfo, changePageTitle } = store

  return {
    pageInfo,
    resetPageInfo,
    changePageTitle
  }
}

export default useGetPageInfo
