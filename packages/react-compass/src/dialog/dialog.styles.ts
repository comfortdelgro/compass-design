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
  marginBottom: '$4',
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
  height: '32.143%',
  marginBottom: '$4',
  fontFamily: '$sans',
  fontWeight: '$semibold',
  fontSize: '$header3',
  lineHeight: '$normal',
  color: '$black',
})

export const StyledDialogDescription = styled('p', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  //title
  width: '100%',
  height: '10.124%',
  marginBottom: '$6',
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
  height: '17.857%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$2',
})

export const StyledDialogWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  background: '#00000066',

  // wrapper styling
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '49',
})

export const StyledDialog = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  zIndex: '50',

  // dialog container
  width: '$120',
  minHeight: '$56',
  padding: '$4',
  backgroundColor: '$background',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',

  borderRadius: '$lg',
  position: 'fixed',
  top: '50%',
  left: '50%',
  /* bring your own prefixes */
  transform: `translate(-50%, -50%)`,

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
