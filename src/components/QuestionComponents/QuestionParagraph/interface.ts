export type QuestionParagraphPropsType = {
  text?: string
  isCenter?: boolean

  // 属性表单
  disabled?: boolean
}

export const QuestionParagraphDefaultProps: QuestionParagraphPropsType = {
  text: '一行段落',
  isCenter: false
}
