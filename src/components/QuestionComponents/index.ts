import type { Component } from 'vue'
import QuestionInputConf, { type QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConf, { type QuestionTitlePropsType } from './QuestionTitle'
import QuestionParagraphConf, { type QuestionParagraphPropsType } from './QuestionParagraph'
import QuestionInfoConf, { type QuestionInfoPropsType } from './QuestionInfo'
import QuestionTextareaConf, { type QuestionTextareaPropsType } from './QuestionTextarea'

// 各个组件的 prop type
export type ComponentPropsType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType &
  QuestionInfoPropsType &
  QuestionTextareaPropsType

export type ComponentConfType = {
  title: string
  type: string
  Component: Component<ComponentPropsType>
  PropComponent: Component<ComponentPropsType>
  defaultProps: ComponentPropsType
}

// 全部组件配置列表
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
  QuestionParagraphConf,
  QuestionInfoConf,
  QuestionTextareaConf
]

// 组件分组
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionInfoConf, QuestionTitleConf, QuestionParagraphConf]
  },
  {
    groupId: 'inputGroup',
    groupName: '输入框',
    components: [QuestionInputConf, QuestionTextareaConf]
  }
]

export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type)
}
