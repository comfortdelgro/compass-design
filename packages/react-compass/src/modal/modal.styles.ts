import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledModalHeader = styled('h3', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  paddingLeft: '$4',
  paddingRight: '$4',

  //title
  width: '100%',
  height: '32.143%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const StyledModalTitle = styled('h3', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  paddingTop: '$4',
  paddingBottom: '$4',

  //title
  width: '80%',
  height: '100%',
  fontFamily: '$sans',
  fontWeight: '$semibold',
  fontSize: '$header3',
  lineHeight: '$normal',
  color: '$black',
})

export const StyledModalDescription = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '$4',

  //title
  width: '100%',
  height: '10.124%',
  fontFamily: '$sans',
  fontWeight: '$normal',
  fontSize: '$body2',
  lineHeight: '$normal',
  color: '$secondaryText',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
})

export const StyledModalActionsContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '$4',

  // container
  backgroundColor: '$primaryBg',
  width: '100%',
  height: '17.857%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$2',
})

export const StyledModalWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  background: '#00000066',

  // backdrop styling
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

export const StyledModalCloseIcon = styled('div', {
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

export const StyledModal = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  zIndex: '50',

  // modal container
  width: '$120',
  minHeight: '$56',
  // padding: '$4',
  backgroundColor: '$background',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',

  borderRadius: '$lg',
  overflow: 'clip',
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  /* bring your own prefixes */
  //transform: `translate(-50%, -50%)`,

  variants: {
    size: {
      sm: {
        width: '$75',
      },
      md: {
        width: '$125',
      },
      lg: {
        width: '$200',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type ModalVariantProps = VariantProps<typeof StyledModal>
