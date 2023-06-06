import {styled} from '../../../theme'
import type {VariantProps} from '../../../utils/stitches.types'

export const StyledOption = styled('li', {
  fontSize: '$label1',
  fontWeight: '$medium',
  padding: '$2 $4',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  color: '333333',
  '&:hover': {
    backgroundColor: '#F3F2F1',
  },
  variants: {
    isFocused: {
      true: {
        backgroundColor: '#F3F2F1',
      },
    },
    isSelected: {
      true: {
        backgroundColor: '#F3F2F1',
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

export const StyledRightIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '$6',
  height: '$6',
  variants: {
    isSelected: {
      true: {},
      false: {
        svg: {
          display: 'none',
        },
      },
    },
  },
})

export const StyledContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
})

export type OptionVariantProps = VariantProps<typeof StyledOption>
