import Component from './Component.vue'
import { QuestionInputDefaultProps } from './interface'

export * from './interface'

// 组件配置
export default {
  title: '输入框',
  type: 'questionInput',
  Component,
  defaultProps: QuestionInputDefaultProps
}
