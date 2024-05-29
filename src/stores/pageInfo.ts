import { reactive } from 'vue'
import { defineStore } from 'pinia'

export type PageInfoType = {
  title: string
  desc?: string
  js?: string
  css?: string
}

export const usePageInfoStore = defineStore('pageInfo', () => {
  const pageInfo = reactive<PageInfoType>({
    title: '',
    desc: '',
    js: '',
    css: ''
  })

  function resetPageInfo(payload: PageInfoType) {
    Object.assign(pageInfo, payload)
  }

  return {
    pageInfo,
    resetPageInfo
  }
})
