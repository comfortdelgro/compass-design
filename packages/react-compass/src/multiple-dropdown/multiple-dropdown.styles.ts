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
    span: {
      marginLeft: '$1',
      color: '$danger',
    },
  },
})

export const StyledDropdown = styled('div', {
  width: '100%',
  border: '1px solid #E6E6E6',
  borderRadius: '$md',
  cursor: 'text',
  display: 'flex',
  padding: '$3 $4',
  gap: '$1',
  backgroundColor: '#FFFFFF',
  '.dropdown-icon': {
    cursor: 'pointer',
    flexShrink: 0,
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
  input: {
    height: '$6_5',
    width: 4,
    padding: 0,
    margin: 0,
    border: 'none',
    '&:focus': {
      outline: 'none',
    },
    '&:focus-visible': {
      outline: 'none',
    },
  },
  variants: {
    isEmpty: {
      true: {
        button: {
          p: {
            color: '#B4B4B4',
          },
        },
      },
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed !important',
        '& > *': {
          cursor: 'not-allowed !important',
        },
      },
    },
    isErrored: {
      true: {
        borderWidth: 1,
        borderColor: '$danger',
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
})

export const StyledPopover = styled('div', {
  margin: 0,
  padding: '$2 0',
  borderRadius: '$md',
  // position: 'absolute',
  // top: '0px',
  // left: '0px',
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

export const StyledSelectedItemWrapper = styled('div', {
  flexGrow: 1,
  alignItems: 'center',
  minHeight: '$7',
  display: 'flex',
  gap: '$2_5',
  flexWrap: 'wrap',
  p: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: '$label1',
    fontWeight: '$semibold',
    height: '$6',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    border: 'none',
    textAlign: 'start',
    padding: 0,
    margin: 0,
  },
})

export const StyledSelectedItem = styled('div', {
  border: '1px solid #EDEBE9',
  borderRadius: '$full',
  padding: '$1 $3',
  fontSize: '$label1',
  cursor: 'default',
  fontWeight: '$semibold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  div: {
    width: 'fit-content',
    height: 'fit-content',
  },
})

export const StyledPopoverWrapper = styled('div', {
  position: 'relative',
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
