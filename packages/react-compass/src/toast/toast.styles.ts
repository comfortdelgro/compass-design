import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledToastActionsContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // styling
  width: '$100%',
  Height: '$6_5',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  gap: '$3_25',
})

export const StyledToastMessage = styled('p', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // styling
  width: '$100%',
  minHeight: '$5_5',
  fontWeight: '$normal',
  fontFamily: '$sans',
  fontSize: '$body3',
  lineHeight: '$normal',
})

export const StyledToastCloseIcon = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // styling
  width: '$3_5',
  height: '$3_5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '& *': {
    width: '100%',
    height: '100%',
  },
})

export const StyledToastLabel = styled('span', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // styling
  // width: '$5_5',
  height: '$4_5',
  fontWeight: '$normal',
  fontFamily: '$sans',
  fontSize: '$label2',
  color: '$gray70',
  lineHeight: '$normal',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const StyledToastTitle = styled('h3', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // styling
  // width: '$5_5',
  height: '$4_5',
  fontWeight: '$semibold',
  fontFamily: '$sans',
  fontSize: '$label1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const StyledToastIcon = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // styling
  width: '$5_5',
  height: '$4_5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& *': {
    width: '100%',
    height: '100%',
  },
})

export const StyledToastHeaderLeft = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // styling
  height: '$5_25',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '$4_25',
  alignItems: 'center',
})

export const StyledToastHeaderRight = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // styling
  height: '$5_25',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$4_25',
  alignItems: 'center',
})

export const StyledToastHeader = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // header styling
  width: '100%',
  height: '$5_25',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const StyledToast = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  //background: 'transparent',
  margin: '0px',
  //padding: '0px',

  // toast container styling
  width: '$110_5',
  //minHeight: '$24_5',
  borderRadius: '$md',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  backgroundColor: '$background',
  padding: '$4',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  //center
  position: 'fixed',
  top: '50%',
  left: '50%',
  /* bring your own prefixes */
  transform: `translate(-50%, -50%)`,

  variants: {
    color: {
      informative: {
        backgroundColor: '$cdgBlue20',
      }, //blue
      neutral: {},
      negative: {
        backgroundColor: '$dangerBg',
      }, //red
      positive: {
        backgroundColor: '$successBg',
      }, //green
    },
  },

  defaultVariants: {
    color: 'neutral',
  },
})

export type ToastVariantProps = VariantProps<typeof StyledToast>
