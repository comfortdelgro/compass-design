import {styled} from '../../theme'
import {keyframes} from '../../theme/stitches.config'

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
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

export const StyledSection = styled('div', {
  backgroundColor: '$cdgBlue10',
  padding: '$2 $4',
  fontSize: '$label2',
  fontWeight: '$semibold',
  color: '$gray100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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

export const StyledRightIcon = styled('div', {
  //reset
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  border: 'none',
  outline: 'none',
  // custom
  display: 'flex',
  alignItems: 'center',
  width: '1.5rem',
  height: '1.5rem',
  justifyContent: 'center',
  color: '#0142af',
  fontSize: '0.875rem',
  overflow: 'hidden',
})
