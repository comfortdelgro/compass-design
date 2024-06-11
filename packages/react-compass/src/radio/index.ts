import _Radio from './radio'
import RadioGroup from './radio-group'

const Radio = _Radio as typeof _Radio & {Group: typeof RadioGroup}

export type {RadioProps} from './radio'
export type {RadioGroupProps} from './radio-group'

Radio.Group = RadioGroup

Radio.displayName = 'Radio'

export default Radio
