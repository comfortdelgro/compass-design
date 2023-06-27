import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledDropdownWrapper = styled('div', {
  '&.cdg-dropdown-opening .cdg-dropdown-input svg': {
    transform: 'rotate(180deg)',
    transition: 'transform 0.3s linear',
  },
})

export const StyledDropdownList = styled('div', {})

export const StyledPopover = styled('div', {
  margin: 0,
  padding: '$2 0',
  borderRadius: '$md',
  width: 'fit-content',
  height: 'fit-content',
  minWidth: '100%',
  background: '$background',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  ul: {
    overscrollBehavior: 'contain',
    maxHeight: '$64',
    overflowY: 'auto',
    listStyle: 'none',
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: 0,
    '&:focus': {
      outline: 'none',
    },
  },
})

export const StyledSelect = styled('div', {
  width: '100%',
  height: '$11',
  background: '$background',
  overflow: 'hidden',
  borderRadius: '$md',
  zIndex: 0,
  transition: '$default',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$divider',
  '&:focus-within': {
    borderColor: '$cdgBlue',
  },

  button: {
    padding: '$3 $4',
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
      transition: 'transform 0.3s linear',
    },
    span: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      flexGrow: 1,
      textAlign: 'start',
      color: '$primaryText',
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
            color: '$disabledText',
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
    isErrored: {
      true: {
        borderColor: '$danger',
        '&:focus-within': {
          borderColor: '$danger',
        },
      },
    },
  },
})

export const StyledComboBox = styled('div', {
  width: '100%',
  height: '$11',
  border: '1px solid $divider',
  background: '$background',
  overflow: 'hidden',
  borderRadius: '$md',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  zIndex: 0,
  transition: '$default',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$divider',
  '&:focus-within': {
    borderColor: '$cdgBlue',
  },
  input: {
    color: '$primaryText',
    boxSizing: 'border-box',
    background: '$background',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: '$label1',
    fontWeight: '$semibold',
    width: '100%',
    height: '100%',
    flexGrow: 1,
    border: 'none',
    padding: '$3 $11 $3 $4',
    margin: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  button: {
    position: 'absolute',
    cursor: 'pointer',
    top: '50%',
    right: '$3',
    transform: 'translateY(-50%)',
    width: '$6',
    height: '$6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    border: 'none',
    background: 'transparent',
    svg: {
      width: '$4',
      height: '$4',
      transition: 'transform 0.3s linear',
    },
  },
  variants: {
    isEmpty: {
      true: {
        input: {
          '&::placeholder': {
            color: '$gray40',
            fontSize: '$label1',
            fontWeight: '$semibold',
          },
        },
      },
    },
    isDisabled: {
      true: {
        color: '$disabledText',
        input: {
          backgroundColor: '$gray20',
        },
        cursor: 'not-allowed !important',
        '*': {
          color: '$disabledText',
          cursor: 'not-allowed !important',
        },
      },
    },
    isErrored: {
      true: {
        borderColor: '$danger',
        '&:focus-within': {
          borderColor: '$danger',
        },
      },
    },
  },
})

export const StyledFlag = styled('div', {
  width: '100%',
  border: '1px solid $divider',
  background: '$background',
  overflow: 'hidden',
  borderRadius: '$md',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  zIndex: 0,
  transition: '$default',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$divider',
  '&:focus-within': {
    borderColor: '$cdgBlue',
  },
  input: {
    color: '$primaryText',
    boxSizing: 'border-box',
    background: '$background',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: '$label1',
    fontWeight: '$semibold',
    width: '100%',
    height: '$11',
    flexGrow: 1,
    border: 'none',
    padding: '$3 $11 $3 $12',
    margin: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  button: {
    position: 'absolute',
    cursor: 'pointer',
    top: '50%',
    right: '$3',
    transform: 'translateY(-50%)',
    width: '$6',
    height: '$6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    border: 'none',
    background: 'transparent',
    svg: {
      width: '$4',
      height: '$4',
      transition: 'transform 0.3s linear',
    },
  },
  variants: {
    isEmpty: {
      true: {
        input: {
          padding: '$3 $11 $3 $4',
          '&::placeholder': {
            color: '$gray40',
            fontSize: '$label1',
            fontWeight: '$semibold',
          },
        },
      },
    },
    isDisabled: {
      true: {
        color: '$disabledText',
        input: {
          backgroundColor: '$gray20',
          color: '$disabledText !important',
        },
        cursor: 'not-allowed !important',
        '& > *': {
          cursor: 'not-allowed !important',
        },
      },
    },
    isErrored: {
      true: {
        borderColor: '$danger',
        '&:focus-within': {
          borderColor: '$danger',
        },
      },
    },
  },
})

export const StyledOption = styled('li', {
  fontSize: '$label1',
  fontWeight: '$medium',
  padding: '$2 $4',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  color: '$primaryText',
  '&:hover': {
    backgroundColor: '$gray20',
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
        // '&:hover': {
        //   backgroundColor: 'transparent',
        // },
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
  },
  // compoundVariants: [
  //   {
  //     isDisabled: true,
  //     isFocused: true,
  //     css: {
  //       '&:hover': {
  //         backgroundColor: 'transparent',
  //       },
  //       opacity: 0.4,
  //     },
  //   },
  // ],
})

export const StyledIcon = styled('svg', {
  color: '$primaryText',
})

export type DropdownVariantProps = VariantProps<typeof StyledDropdownWrapper>
