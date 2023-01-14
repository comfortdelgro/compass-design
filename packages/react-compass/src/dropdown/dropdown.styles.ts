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
  borderRadius: '$md',
  button: {
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    display: 'flex',
    padding: '$3 $4',
    gap: '$1',
    backgroundColor: '#FFFFFF',
    '.dropdown-icon': {
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
    input: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontSize: '$label1',
      fontWeight: '$semibold',
      height: '$6',
      flexGrow: 1,
      border: 'none',
      padding: 0,
      margin: 0,
      '&:focus': {
        outline: 'none',
      },
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
  },
})

export const StyledPopover = styled('div', {
  margin: 0,
  padding: '$2 0',
  borderRadius: '$md',
  position: 'absolute',
  width: '100%',
  top: '0px',
  left: '0px',
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

export type DropdownVariantProps = VariantProps<typeof StyledDropdownWrapper>
