import Component from './Component.vue'
import PropComponent from './PropComponent.vue'
import StatComponent from './StatComponent.vue'
import { QuestionRadioDefaultProps } from './interface'

export * from './interface'

export default {
  title: '单选',
  type: 'questionRadio',
  Component,
  PropComponent,
  StatComponent,
  defaultProps: QuestionRadioDefaultProps
}
