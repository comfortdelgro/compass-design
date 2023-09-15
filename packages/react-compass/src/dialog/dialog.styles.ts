import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledDialogIconContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  //icon container
  width: '100%',
  height: '$57',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& *': {
    height: '100%',
  },
})

export const StyledDialogTitle = styled('h3', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  //title
  width: '100%',
  fontFamily: '$sans',
  fontWeight: '$semibold',
  fontSize: '$header3',
  lineHeight: '$normal',
  color: '$primaryText',
})

export const StyledDialogDescription = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  //title
  flexGrow: 1,
  width: '100%',
  fontFamily: '$sans',
  fontWeight: '$normal',
  fontSize: '$body2',
  lineHeight: '$normal',
  color: '$secondaryText',
})

export const StyledDialogActionsContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // container
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$2',

  variants: {
    responsive: {
      true: {
        '@media (max-width: 900px)': {
          flexDirection: 'column',
          button: {
            div: {
              display: 'block',
            },
          },
        },
      },
      false: {},
    },
  },

  defaultVariants: {
    responsive: 'false',
  },
})

export const StyledDialogWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  background: '$overlayDark',

  // backdrop styling
  padding: '$4',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  zIndex: '49',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const StyledDialogContent = styled('div', {
  all: 'unset',
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'auto',
  padding: '$4',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const StyledDialog = styled('div', {
  // reset
  all: 'unset',
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  zIndex: '50',

  // dialog container
  width: '$120',
  height: 'fit-content',
  overflow: 'auto',
  backgroundColor: '$background',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',

  borderRadius: '$lg',

  variants: {
    variant: {
      confirmation: {},
      alert: {
        [`& ${StyledDialogActionsContainer}`]: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        [`& ${StyledDialogTitle}`]: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
        [`& ${StyledDialogDescription}`]: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'confirmation',
  },
})

export type DialogVariantProps = VariantProps<typeof StyledDialog>
