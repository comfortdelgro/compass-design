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
  height: '51.818%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '$4',
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

export const StyledDialog = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',

  // dialog container
  width: '$120',
  height: '$56',
  padding: '$4',
  backgroundColor: '$background',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',

  borderRadius: '$lg',

  variants: {
    variant: {
      confirmation: {},
      alert: {
        height: '$110',
        [`& ${StyledDialogActionsContainer}`]: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'confirmation',
  },
})

export type DialogVariantProps = VariantProps<typeof StyledDialog>
