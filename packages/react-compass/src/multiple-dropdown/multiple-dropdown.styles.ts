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
  backgroundColor: '$background',
  transition: '$default',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#E6E6E6',
  '.dropdown-icon': {
    cursor: 'pointer',
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    border: 'none',
    background: 'transparent',
    svg: {
      width: '$4',
      height: '$4',
      color: '$primaryText',
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
    backgroundColor: '$background',
    color: '$primaryText',
    '&:focus': {
      outline: 'none',
    },
    '&:focus-visible': {
      outline: 'none',
    },
  },
  '& .dropdown-icon': {
    transition: 'transform 0.3s linear',
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
    isOpen: {
      true: {
        '.dropdown-icon': {
          transform: 'rotate(180deg)',
          transition: 'transform 0.3s linear',
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

  '.multiple-dropdown-chip-icon': {
    svg: {
      color: '$primaryText',
    },
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
  color: '$primaryText',
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
    displayedValue: {
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
            color: '$primaryText',
          },
        },
      },
    },
    variant: {
      combobox: {},
      select: {
        [`${StyledDropdown}`]: {
          cursor: 'pointer',
        },
      },
    },
  },
})

export const StyledIcon = styled('svg', {
  color: '$primaryText',
})

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

export const StyledDropdownList = styled('ul', {})

export const StyledRightIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '$6',
  height: '$6',
  variants: {
    isSelected: {
      true: {
        div: {
          border: 0,
          background: '$cdgBlue100 !important',
          svg: {
            display: 'block',
          },
        },
      },
      false: {
        svg: {
          display: 'none',
        },
      },
    },
    checkmark: {
      checkbox: {
        div: {
          border: '1px solid $black',
          borderRadius: '3px',
          width: '$4',
          height: '$4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '$background',
        },

        svg: {
          color: '$whiteText',
        },
      },
      none: {},
      tick: {
        svg: {
          color: '$cdgBlue',
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
        backgroundColor: '$cdgBlue20',
      },
    },
    isSelected: {
      true: {
        backgroundColor: '$gray20',
      },
    },
    isDisabled: {
      true: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
  },
})

export const StyledContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  lineHeight: '$normal',
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
      border: '2px solid $divider',
      borderRadius: '50%',
      animation: `${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
      borderColor: '$divider transparent transparent transparent',
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

export const StyledEmptyData = styled('div', {
  fontSize: '$label1',
  fontWeight: '$medium',
  color: '$disabledText',
  padding: '$2 $4',
  lineHeight: '$normal',
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

export const StyledDropdownSection = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
})

export const StyledSectionContent = styled('div', {
  backgroundColor: '$cdgBlue10',
  padding: '$2 $4',
  fontSize: '$label2',
  fontWeight: '$semibold',
  color: '$gray100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  lineHeight: '$normal',
  variants: {
    isClickable: {
      true: {
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '$cdgBlue20',
        },
      },
      false: {
        '.cdg-multiple-dropdown-section': {
          display: 'none',
        },
      },
    },
  },
})

export const StyledDropdownHeader = styled('div', {})

export const StyledDropdownListItem = styled('div', {
  height: '$0_25',
})

export type DropdownHeaderVariantProps = VariantProps<
  typeof StyledDropdownHeader
>

export type DropdownItemVariantProps = VariantProps<
  typeof StyledDropdownSection
>

export type DropdownVariantProps = VariantProps<typeof StyledDropdownWrapper>
