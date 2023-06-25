import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

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

export const StyledIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '$4',
  height: '$4',
  overflow: 'hidden',
})

export const StyledFlag = styled('div', {
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
})

export type OptionVariantProps = VariantProps<typeof StyledOption>
