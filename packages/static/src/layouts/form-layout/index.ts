import FormLayout from './form-layout'
import FormExplaination from './form-layout-explaination'
import FormGroup from './form-layout-group'
import FormRow from './form-layout-row'

export type {Props as FormLayoutProps} from './form-layout'
export type {Props as FormExplainationProps} from './form-layout-explaination'
export type {Props as FormGroupProps} from './form-layout-group'
export type {Props as FormRowProps} from './form-layout-row'

FormLayout.Row = FormRow
FormLayout.Group = FormGroup
FormLayout.Explaination = FormExplaination

FormLayout.displayName = 'FormLayout'

export default FormLayout
