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
  minWidth: '187px',
})

export const StyledSnackbarDetail = styled('div', {
  // reset
  ...resetStyles,

  // styling
  width: 'fit-content',
  fontWeight: '$semibold',
  fontFamily: '$sans',
  fontSize: '$label1',
  color: '$grayShade100',
  lineHeight: '20px',
  textAlign: 'right',
})
export const StyledSnackbarDetailDescription = styled('div', {
  // reset
  ...resetStyles,

  // styling
  width: 'fit-content',
  fontWeight: '$medium',
  fontFamily: '$sans',
  fontSize: '$label2',
  color: '$grayShade80',
  lineHeight: 'normal',
  textAlign: 'right',
})

export const SnackbarDetailContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$0_5',
  alignItems: 'flex-end',
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
  width: 'fit-content',
  zIndex: '60',

  position: 'fixed',

  variants: {
    type: {
      default: {
        backgroundColor: '$background',
        color: '$primaryText',
        [`${StyledSnackbarDetailDescription}`]: {
          opacity: 0.8,
        },
      },
      error: {
        backgroundColor: '$dangerBg',
        color: '$danger',
        [`${StyledSnackbarDetailDescription}`]: {
          opacity: 0.8,
        },
      },
      success: {
        backgroundColor: '$successBg',
        color: '$success',
        [`${StyledSnackbarDetailDescription}`]: {
          opacity: 0.8,
        },
      },
      warning: {
        backgroundColor: '$warningBg',
        color: '$snackbarWarning',
        [`${StyledSnackbarDetailDescription}`]: {
          opacity: 0.8,
        },
      },
      reminder: {
        backgroundColor: '$background',
        color: '$primaryText',
        border: '1px solid $danger',
        [`${StyledSnackbarDetailDescription}`]: {
          opacity: 0.8,
        },
        [`${StyledSnackbarIcon}`]: {
          color: '$danger',
        },
      },
      ongoing: {
        backgroundColor: '$typeHeading',
        color: '$background',
        [`${StyledSnackbarDetailDescription}`]: {
          opacity: 0.8,
        },
      },
    },
    vertical: {
      top: {
        top: '20px',
      },
      center: {
        top: '50%',
        transform: 'translateY(-50%)',
      },
      bottom: {
        bottom: '20px',
      },
    },
    horizontal: {
      left: {
        left: '20px',
      },
      center: {
        left: '50%',
        transform: 'translateX(-50%)',
      },
      right: {
        right: '20px',
      },
    },
    centerCenter: {
      true: {
        transform: 'translate(-50%, -50%)',
      },
    },
  },
})

export type SnackbarVariantProps = VariantProps<typeof StyledSnackbar>
