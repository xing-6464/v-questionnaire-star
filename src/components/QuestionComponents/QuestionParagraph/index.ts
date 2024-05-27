import Component from './Component.vue'
import PropComponent from './PropComponent.vue'
import { QuestionParagraphDefaultProps } from './interface'

export * from './interface'

export default {
  title: '段落',
  type: 'questionParagraph',
  Component,
  PropComponent,
  defaultProps: QuestionParagraphDefaultProps
}
