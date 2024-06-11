import WizardItem from './item'
import _Wizard from './wizard'

export type {WizardItemProps} from './item'
export type {WizardProps} from './wizard'

const Wizard = _Wizard as typeof _Wizard & {
  Item: typeof WizardItem
}

Wizard.Item = WizardItem

Wizard.displayName = 'Wizard'
Wizard.Item.displayName = 'Wizard.Item'

export default Wizard
