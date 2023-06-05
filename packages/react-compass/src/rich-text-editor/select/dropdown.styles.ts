import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledSelect = styled('div', {
  overflow: 'hidden',
  borderRadius: '$lg',
  zIndex: 0,
  transition: '$default',
  '&:hover': {
    backgroundColor: '#e1dfdd',
  },
  // borderWidth: '1px',
  // borderStyle: 'solid',
  // borderColor: '#E6E6E6',
  // '&:focus-within': {
  //   borderColor: '$cdgBlue',
  // },

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
            color: '#B4B4B4',
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

export const StyledListBoxWrapper = styled('div', {
  position: 'relative',
  minWidth: '100%',
})

export const StyledPopoverWrapper = styled('div', {
  position: 'relative',
  zIndex: 1,
  marginTop: '$1',
})

export type DropdownVariantProps = VariantProps<typeof StyledSelect>
