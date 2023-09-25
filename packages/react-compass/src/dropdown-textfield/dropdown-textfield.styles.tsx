import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledDropdownTextfield = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  '.dropdown-textfield__label': {
    fontSize: '$label1',
    fontWeight: '$semibold',
    marginBottom: '$2',
  },
  '.dropdown-textfield__error': {
    marginTop: '$1',
    color: '$danger',
    fontSize: '$label2',
    fontWeight: '$medium',
  },
})
export const InputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '$1',
})

export type DropdownTextfieldVariantProps = VariantProps<
  typeof StyledDropdownTextfield
>
