import Component from './Component.vue'
import PropComponent from './PropComponent.vue'
import { QuestionInputDefaultProps } from './interface'

export * from './interface'

// 组件配置
export default {
  title: '输入框',
  type: 'questionInput',
  Component,
  PropComponent,
  defaultProps: QuestionInputDefaultProps
}
