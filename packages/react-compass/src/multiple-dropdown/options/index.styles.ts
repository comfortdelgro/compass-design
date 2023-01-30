import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

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
        '&:hover': {
          backgroundColor: '#D2D0CE',
        },
        color: '#828180',
        backgroundColor: '#D2D0CE',
      },
    },
  },
})

export const StyledIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '$4',
  height: '$4',
  overflow: 'hidden',
})

export const StyledRightIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '$6',
  height: '$6',
  div: {
    border: '1px solid #323130',
    borderRadius: '3px',
    width: '$4',
    height: '$4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FFFFFF',
  },
  variants: {
    isSelected: {
      true: {
        div: {
          border: 0,
          background: '$cdgBlue100',
          svg: {
            display: 'block',
          },
        },
      },
      false: {
        div: {
          svg: {
            display: 'none',
          },
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
