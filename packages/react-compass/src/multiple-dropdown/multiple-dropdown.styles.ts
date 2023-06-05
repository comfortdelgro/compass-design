import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledDropdown = styled('div', {
  maxWidth: '100%',
  minHeight: '$11',
  borderRadius: '$md',
  cursor: 'text',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$1_5 $4',
  gap: '$1',
  backgroundColor: '#FFFFFF',
  transition: '$default',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#E6E6E6',
  '.dropdown-icon': {
    cursor: 'pointer',
    flexShrink: 0,
    // width: '$6',
    // height: '$6',
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
  '&:focus-within': {
    borderColor: '$cdgBlue',
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

export const StyledSelectedItemWrapper = styled('div', {
  flexGrow: 1,
  alignItems: 'center',
  minHeight: '$7',
  display: 'flex',
  gap: '$2_5',
  flexWrap: 'wrap',
  '.placeholder': {
    color: '#B4B4B4',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: '$label1',
    fontWeight: '$semibold',
    maxWidth: '100%',
    height: 'fit-content',
    lineHeight: '1em',
    border: 'none',
    textAlign: 'left',
    padding: 0,
    margin: 0,
  },
})

export const StyledSelectedItem = styled('div', {
  border: '1px solid #E6E6E6',
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
  variants: {
    variant: {
      chip: {},
      string: {
        [`${StyledSelectedItemWrapper}`]: {
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          maxWidth: 'calc(100% - 1rem - 1rem)',
          '.itemListString': {
            maxWidth: '100%',
            height: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
      },
    },
  },
})

export type DropdownVariantProps = VariantProps<typeof StyledDropdownWrapper>
