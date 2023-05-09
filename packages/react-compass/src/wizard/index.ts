import WizardItem from './item'
import Wizard from './wizard'

export type {WizardItemProps} from './item'
export type {WizardProps} from './wizard'

Wizard.Item = WizardItem

Wizard.displayName = 'Wizard'
Wizard.Item.displayName = 'Wizard.Item'

export default Wizard
