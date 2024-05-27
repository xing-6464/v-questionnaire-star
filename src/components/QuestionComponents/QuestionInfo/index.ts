import Component from './Component.vue'
import PropComponent from './PropComponent.vue'
import { QuestionInfoDefaultProps } from './interface'

export * from './interface'

export default {
  title: '问卷信息',
  type: 'questionInfo',
  Component,
  PropComponent,
  defaultProps: QuestionInfoDefaultProps
}
