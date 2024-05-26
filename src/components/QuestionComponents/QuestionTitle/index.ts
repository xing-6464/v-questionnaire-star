import { QuestionTitleDefaultProps } from './interface'
import Component from './Component.vue'
import PropComponent from './PropComponent.vue'

export * from './interface'

// 组件配置
export default {
  title: '输入框',
  type: 'questionTitle',
  Component,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps
}
