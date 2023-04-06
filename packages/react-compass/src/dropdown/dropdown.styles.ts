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
  border: '1px solid #E6E6E6',
  background: '#FFFFFF',
  overflow: 'hidden',
  borderRadius: '$md',
  zIndex: 1,
  button: {
    padding: '$3 $4',
    width: '100%',
    height: '$11',
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
        button: {
          cursor: 'default',
        },
      },
    },
    isErrored: {
      true: {
        borderColor: '$danger',
        borderWidth: 1,
        button: {
          '&:focus': {
            borderColor: '$danger',
            outlineColor: '$danger',
          },
          '&:focus-within': {
            borderColor: '$danger',
            outlineColor: '$danger',
          },
        },
      },
    },
  },
})

export const StyledComboBox = styled('div', {
  width: '100%',
  border: '1px solid #E6E6E6',
  background: '#FFFFFF',
  overflow: 'hidden',
  borderRadius: '$md',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  zIndex: 1,
  input: {
    boxSizing: 'border-box',
    background: '#FFFFFF',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: '$label1',
    fontWeight: '$semibold',
    width: '100%',
    height: '$11',
    flexGrow: 1,
    border: 'none',
    padding: '$3 $11 $3 $4',
    margin: 0,
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
            color: '#B4B4B4',
            fontSize: '$label1',
            fontWeight: '$semibold',
          },
        },
      },
    },
    isDisabled: {
      true: {
        color: '#b7b7b7 !important',
        input: {
          color: '#b7b7b7 !important',
        },
      },
    },
    isErrored: {
      true: {
        borderColor: '$danger',
        borderWidth: 1,
        input: {
          '&:focus': {
            borderColor: '$danger',
            outlineColor: '$danger',
          },
          '&:focus-within': {
            borderColor: '$danger',
            outlineColor: '$danger',
          },
        },
      },
    },
  },
})

export const StyledFlag = styled('div', {
  width: '100%',
  border: '1px solid #E6E6E6',
  background: '#FFFFFF',
  overflow: 'hidden',
  borderRadius: '$md',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  zIndex: 1,
  input: {
    boxSizing: 'border-box',
    background: '#FFFFFF',
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
            color: '#B4B4B4',
            fontSize: '$label1',
            fontWeight: '$semibold',
          },
        },
      },
    },
    isDisabled: {
      true: {
        color: '#b7b7b7 !important',
        input: {
          color: '#b7b7b7 !important',
        },
      },
    },
    isErrored: {
      true: {
        borderColor: '$danger',
        borderWidth: 1,
        input: {
          '&:focus': {
            borderColor: '$danger',
            outlineColor: '$danger',
          },
          '&:focus-within': {
            borderColor: '$danger',
            outlineColor: '$danger',
          },
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
  marginTop: '$2',
  position: 'relative',
  minWidth: '100%',
})

export const StyledPopoverWrapper = styled('div', {
  position: 'relative',
  zIndex: 2,
  marginTop: '$1',
})

export const StyledErrorMessage = styled('div', {
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
