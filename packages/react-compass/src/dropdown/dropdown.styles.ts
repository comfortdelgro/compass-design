import {styled} from '../theme'
import {keyframes} from '../theme/stitches.config'
import type {VariantProps} from '../utils/stitches.types'

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const StyledDropdownWrapper = styled('div', {
  width: '100%',
  label: {
    fontSize: '$label1',
    fontWeight: '$semibold',
    marginBottom: '$2',
    display: 'inline-block',
    width: '100%',
  },
})

export const StyledDropdown = styled('div', {
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
    isErrored: {
      true: {
        borderColor: '$danger',
        borderWidth: 2,
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
    isErrored: {
      true: {
        borderColor: '$danger',
        borderWidth: 2,
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
    isErrored: {
      true: {
        borderColor: '$danger',
        borderWidth: 2,
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

export const StyledPopover = styled('div', {
  margin: 0,
  padding: '$2 0',
  borderRadius: '$md',
  width: '100%',
  background: '#FFFFFF',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  ul: {
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

export const StyledHeaderList = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '$2 $4',
  borderBottom: '2px solid #EDEBE9',
  span: {
    color: '#323130',
    fontSize: '$label2',
    fontWeight: '$bold',
    padding: 0,
    margin: 0,
  },
  button: {
    fontSize: '$label2',
    fontWeight: '$bold',
    color: '#A4262C',
    border: 0,
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
})

export const StyledPopoverWrapper = styled('div', {
  position: 'relative',
  zIndex: 2,
  marginTop: '$1',
})

export const StyledLoading = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  margin: '$4 auto',
  '.spinner': {
    display: 'inline-block',
    position: 'relative',
    width: '$4',
    height: '$4',
    div: {
      boxSizing: 'border-box',
      display: 'block',
      position: 'absolute',
      width: '$4',
      height: '$4',
      border: '2px solid #757575',
      borderRadius: '50%',
      animation: `${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
      borderColor: '#757575 transparent transparent transparent',
    },
    '.spinner-1': {
      animationDelay: '-0.45s',
    },
    '.spinner-2': {
      animationDelay: '-0.3s',
    },
    '.spinner-3': {
      animationDelay: '-0.15s',
    },
  },
})

export const StyledTextFieldHelperText = styled('div', {
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
