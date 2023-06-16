import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledDropdownWrapper = styled('div', {
  width: '100%',
  label: {
    fontSize: '$label1',
    fontWeight: '$semibold',
    marginBottom: '$2',
    display: 'inline-block',
    width: '100%',
    span: {
      marginLeft: '$1',
      color: '$danger',
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
    },
    span: {
      color: '$primaryText',
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
            color: '$gray50',
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
    },
  },
  variants: {
    isEmpty: {
      true: {
        input: {
          '&::placeholder': {
            color: '$gray50',
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
          color: '$disabledText',
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
    },
  },
  variants: {
    isEmpty: {
      true: {
        input: {
          padding: '$3 $11 $3 $4',
          '&::placeholder': {
            color: '$gray50',
            fontSize: '$label1',
            fontWeight: '$semibold',
          },
        },
      },
    },
    isDisabled: {
      true: {
        color: '$gray20 !important',
        input: {
          color: '$gray20 !important',
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

export const StyledFlagIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  left: '$3',
  flexShrink: 0,
  width: '$6',
  height: '$6',
  overflow: 'hidden',
  position: 'absolute',
  svg: {
    width: '$6',
    height: '$6',
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

export const StyledHelperText = styled('div', {
  fontSize: '$label2',
  fontWeight: '$medium',
  transition: '$default',
  marginTop: '$1',
  color: '$gray70',

  variants: {
    error: {
      true: {
        color: '$danger',
      },
      false: {
        color: '$gray70',
      },
    },
  },
})

export type DropdownVariantProps = VariantProps<typeof StyledDropdownWrapper>
