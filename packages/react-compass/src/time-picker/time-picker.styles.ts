import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTextField = styled('input', {
  width: '100%',
  fontSize: '$label1',
  fontWeight: '$semibold',
  lineHeight: '$normal',
  padding: '$1_5 $3',
  border: 0,
  borderRadius: '$md',
  backgroundColor: 'transparent',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    color: '#B4B4B4',
    fontSize: '$label1',
    fontWeight: '$semibold',
  },
})
export const TimePickerContainer = styled('div', {})

export const TimePickerDropdownWrapper = styled('div', {
  background: '$background',
  border: '1px solid #e6e6e6',
  borderRadius: '4px',
  zIndex: 9999,
})
export const TimePickerDropdownContent = styled('div', {
  display: 'flex',
  height: '320px',
  width: '100%',
  overflowY: 'hidden',
  marginTop: '4px',
})
export const TimePickerDropdownControl = styled('div', {
  padding: '4px',
  overflowY: 'auto',
  height: '100%',
  position: 'relative',

  '&.border-right': {
    borderRight: '1px solid #e6e6e6',
  },
})
export const TimePickerDropdownItem = styled('button', {
  backgroundColor: '$background',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px',
  borderRadius: '4px',
  width: '42px',
  height: '42px',
  cursor: 'pointer',
  fontWeight: 500,
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: '$primaryBg',
  },
  fontSize: '$body3',
  lineHeight: '$5_25',

  '&.active': {
    backgroundColor: '$cdgBlue100',
    color: '$background',
  },
})
export const TimePickerDropdownFooter = styled('div', {
  padding: '8px',
  display: 'flex',
  justifyContent: 'flex-end',
  borderTop: '1px solid #e6e6e6',
  button: {
    fontWeight: 500,
    fontSize: '$body3',
    lineHeight: '$5_25',
  },
})

export type ButtonVariantProps = VariantProps<typeof StyledTextField>
