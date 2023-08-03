import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledSelect = styled('div', {
  overflow: 'hidden',
  borderRadius: '$lg',
  zIndex: 0,
  transition: '$default',
  '&:hover': {
    backgroundColor: '$gray40',
  },
  button: {
    padding: '4px 8px',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    gap: '$1',
    background: 'transparent',
    fontSize: '$label1',
    fontWeight: '$semibold',
    svg: {
      flexShrink: 0,
      width: '$4',
      height: '$4',
    },
    span: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      flexGrow: 1,
      textAlign: 'start',
      display: 'flex',
      alignItems: 'center',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  variants: {
    isEmpty: {
      true: {
        button: {
          span: {
            color: '$gray30',
          },
        },
      },
    },
    isDisabled: {
      true: {
        backgroundColor: '$gray20',
        '*': {
          color: '$disabledText',
          cursor: 'not-allowed !important',
        },
      },
    },
  },
})

export type DropdownVariantProps = VariantProps<typeof StyledSelect>
