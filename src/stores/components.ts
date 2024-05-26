import { defineStore } from 'pinia'
import { type ComponentPropsType } from '@/components/QuestionComponents'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  props: ComponentPropsType
}

export const useComponentsStore = defineStore('components', () => {})
