import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'
export const StyledPopover = styled('div', {
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  padding: 0,

  // Custom
  background: '$background',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  borderRadius: '$md',
  minHeight: '2rem',
  maxHeight: '16rem',
  overflowY: 'auto',
})
export const StyledEmptyMessage = styled('div', {
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  padding: 0,

  // Custom
  fontSize: '$label2',
  fontFamily: '$header5',
  color: '$disabledText',
  width: '100%',
  minHeight: '2rem',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
export const StyledOption = styled('div', {
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,

  // Custom
  width: '100%',
  fontSize: '$label1',
  lineHeight: '1em',
  fontFamily: '$sans',
  fontWeight: '$medium',
  padding: '$2 $4',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  '&:hover': {
    backgroundColor: '$gray20',
  },
  '&:focus-visible': {
    backgroundColor: '$cdgBlue20',
  },
  variants: {
    isFocused: {
      true: {
        backgroundColor: '$gray20',
      },
    },
    isSelected: {
      true: {
        backgroundColor: '$gray20',
      },
    },
    isDisabled: {
      true: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
  },
})

export const StyledAutoComplete = styled('div', {
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  padding: 0,

  // Custom
  width: 'fit-content',
  height: 'fit-content',
})

export type AutoCompleteVariantProps = VariantProps<typeof StyledAutoComplete>
