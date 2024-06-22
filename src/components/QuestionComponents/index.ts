import type { Component } from 'vue'
import QuestionInputConf, { type QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConf, { type QuestionTitlePropsType } from './QuestionTitle'
import QuestionParagraphConf, { type QuestionParagraphPropsType } from './QuestionParagraph'
import QuestionInfoConf, { type QuestionInfoPropsType } from './QuestionInfo'
import QuestionTextareaConf, { type QuestionTextareaPropsType } from './QuestionTextarea'
import QuestionRadioConf, {
  type QuestionRadioPropsType,
  type QuestionRadioStatPropsType
} from './QuestionRadio'
import QuestionCheckboxConf, {
  type QuestionCheckboxPropsType,
  type QuestionCheckboxStatType
} from './QuestionCheckbox'

// 各个组件的 prop type
export type ComponentPropsType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType &
  QuestionInfoPropsType &
  QuestionTextareaPropsType &
  QuestionRadioPropsType &
  QuestionCheckboxPropsType

// 各个组件的统计实现类型
type ComponentStatPropsType = QuestionRadioStatPropsType & QuestionCheckboxStatType

export type ComponentConfType = {
  title: string
  type: string
  Component: Component<ComponentPropsType>
  PropComponent: Component<ComponentPropsType>
  StatComponent?: Component<ComponentStatPropsType>
  defaultProps: ComponentPropsType
}

// 全部组件配置列表
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
  QuestionParagraphConf,
  QuestionInfoConf,
  QuestionTextareaConf,
  QuestionRadioConf,
  QuestionCheckboxConf
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
    groupName: '用户输入',
    components: [QuestionInputConf, QuestionTextareaConf]
  },
  {
    groupId: 'changeGroup',
    groupName: '用户选择',
    components: [QuestionRadioConf, QuestionCheckboxConf]
  }
]

export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type)
}
