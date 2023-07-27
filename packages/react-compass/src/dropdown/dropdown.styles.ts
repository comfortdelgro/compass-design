import {styled} from '../theme'
import {keyframes} from '../theme/stitches.config'
import {VariantProps} from '../utils/stitches.types'

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
  '&.cdg-dropdown-opening .cdg-dropdown-input .cdg-dropdown-button': {
    lineHeight: '$normal',
  },
  '&.cdg-dropdown-opening .cdg-dropdown-input .cdg-dropdown-button .cdg-dropdown-button-icon':
    {
      transform: 'rotate(180deg)',
      transition: 'transform 0.3s linear',
    },
})

export const StyledDropdownList = styled('ul', {})

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
        button: {
          span: {
            color: '$disabledText',
          },
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
        button: {
          span: {
            color: '$disabledText',
          },
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
        button: {
          span: {
            color: '$disabledText',
          },
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
        '&:hover': {
          backgroundColor: 'transparent',
        },
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      '*': {
        color: '$disabledText',
      },
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

export const StyledEmptyData = styled('div', {
  fontSize: '$label1',
  fontWeight: '$medium',
  color: '$disabledText',
  padding: '$2 $4',
  lineHeight: '$normal',
})

export const StyledIcon = styled('svg', {
  color: '$primaryText',
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

export const StyledFlagItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '$6',
  height: '$6',
  overflow: 'hidden',
  svg: {
    width: '$6',
    height: '$6',
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
    },
  },
})

export const StyledItemIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '$4',
  height: '$4',
  overflow: 'hidden',
})

export const StyledColor = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '$6',
  height: '$6',
  borderRadius: '$md',
  background: '$$bg',
})

export const StyledContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  lineHeight: '$normal',
})

export const StyledDropdownHeader = styled('div', {})

export const StyledDropdownListItem = styled('div', {
  height: '$0_25',
})

export const StyledDropdownPopover = styled('div', {
  zIndex: 60,
})

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

export type DropdownHeaderVariantProps = VariantProps<
  typeof StyledDropdownHeader
>

export type DropdownItemVariantProps = VariantProps<typeof StyledOption>

export type DropdownSectionVariantProps = VariantProps<
  typeof StyledDropdownSection
>

export type DropdownVariantProps = VariantProps<typeof StyledDropdownWrapper>
