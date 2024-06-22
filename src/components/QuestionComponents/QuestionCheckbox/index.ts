import Component from './Component.vue'
import PropComponent from './PropComponent.vue'
import StatComponent from './StatComponent.vue'
import { QuestionCheckboxDefaultProps } from './interface'

export * from './interface'

export default {
  title: '多选',
  type: 'questionCheckbox',
  Component,
  PropComponent,
  StatComponent,
  defaultProps: QuestionCheckboxDefaultProps
}
