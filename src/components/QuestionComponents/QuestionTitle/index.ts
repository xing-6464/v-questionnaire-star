import { QuestionTitleDefaultProps } from './interface'
import Component from './Component.vue'

export * from './interface'

// 组件配置
export default {
  title: '输入框',
  type: 'questionTitle',
  Component,
  defaultProps: QuestionTitleDefaultProps
}
