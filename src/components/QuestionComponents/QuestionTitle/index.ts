import Component from './Component.vue'
import { QuestionTitleDefaultProps } from './interface'

export * from './interface'

export default {
  title: '输入框',
  type: 'questionTitle',
  Component,
  defaultProps: QuestionTitleDefaultProps
}
