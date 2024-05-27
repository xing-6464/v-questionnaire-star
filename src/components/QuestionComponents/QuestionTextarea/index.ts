// 问卷输入框组件

import Component from './Component.vue'
import PropComponent from './PropComponent.vue'
import { QuestionTextareaDefaultProps } from './interface'

export * from './interface'

export default {
  title: '多行输入框',
  type: 'questionTextarea',
  Component,
  PropComponent,
  defaultProps: QuestionTextareaDefaultProps
}
