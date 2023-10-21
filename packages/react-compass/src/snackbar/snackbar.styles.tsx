import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

const resetStyles = {
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',
}

export const StyledSnackbarIcon = styled('div', {
  // reset
  ...resetStyles,
  // styling
  minWidth: '$4',
  height: '$4',

  '& *': {
    width: '100%',
    height: '100%',
  },
})

export const StyledSnackbarSuffixIcon = styled('div', {
  ...resetStyles,
  // styling
  minWidth: '$3_5',
  maxWidth: '$3_5',
  minHeight: '$3_5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  '& *': {
    width: '100%',
    height: '100%',
  },
})

export const StyledSnackbarText = styled('div', {
  // reset
  ...resetStyles,
  // styling
  fontWeight: '$medium',
  fontFamily: '$sans',
  fontSize: '$label2',
  lineHeight: 'normal',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flexGrow: 1,
})

export const SnackbarRightSection = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
})

export const StyledSnackbar = styled('div', {
  // reset
  ...resetStyles,

  // styling
  display: 'flex',
  padding: '$4',
  alignItems: 'center',
  gap: '$3',
  borderRadius: '$lg',
  zIndex: '60',
  // width: 'fit-content',
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  '@mobile': {
    width: '100%',
  },
  variants: {
    type: {
      default: {
        backgroundColor: '$background',
        color: '$primaryText',
      },
      error: {
        backgroundColor: '$dangerBg',
        color: '$danger',
      },
      success: {
        backgroundColor: '$successBg',
        color: '$success',
      },
      warning: {
        backgroundColor: '$warningBg',
        color: '$snackbarWarning',
      },
      reminder: {
        backgroundColor: '$background',
        color: '$primaryText',
        border: '1px solid $danger',

        [`${StyledSnackbarIcon}`]: {
          color: '$danger',
        },
      },
      ongoing: {
        backgroundColor: '$typeHeading',
        color: '$background',
      },
    },
  },
})

export type SnackbarVariantProps = VariantProps<typeof StyledSnackbar>
