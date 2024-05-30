import { reactive } from 'vue'
import { defineStore } from 'pinia'

export type PageInfoType = {
  title: string
  desc?: string
  js?: string
  css?: string
  isPublished: boolean
}

export const usePageInfoStore = defineStore('pageInfo', () => {
  const pageInfo = reactive<PageInfoType>({
    title: '',
    desc: '',
    js: '',
    css: '',
    isPublished: false
  })

  function resetPageInfo(payload: PageInfoType) {
    Object.assign(pageInfo, payload)
  }

  // 修改标题
  function changePageTitle(title: string) {
    pageInfo.title = title
  }

  return {
    pageInfo,
    resetPageInfo,
    changePageTitle
  }
})
