import FormLayout from './FormLayout'
import {FormLayoutExplaination} from './FormLayoutExplaination'
import {FormLayoutGroup} from './FormLayoutGroup'
import {FormLayoutRow} from './FormLayoutRow'

export type {FormLayoutProps} from './FormLayout'
export type {FormLayoutExplainationProps} from './FormLayoutExplaination'
export type {FormLayoutGroupProps} from './FormLayoutGroup'
export type {FormLayoutRowProps} from './FormLayoutRow'

FormLayout.Row = FormLayoutRow
FormLayout.Group = FormLayoutGroup
FormLayout.Explaination = FormLayoutExplaination
FormLayout.displayName = 'FormLayout'
export default FormLayout
