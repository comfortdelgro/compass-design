import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledErrorImage = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // image styling
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& *': {
    widht: '100%',
    height: '100%',
  },
})

export const StyledErrorAction = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // error title
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
})

export const StyledErrorDescription = styled('p', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // error title
  fontFamily: '$sans',
  size: '$body2',
  lineHeight: '$normal',
  fontWeight: '$normal',
})

export const StyledErrorTitle = styled('h3', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // error title
  height: '100%',
  fontFamily: '$sans',
  size: '$header5',
  lineHeight: '$normal',
  fontWeight: '$semibold',
  display: 'flex',
  alignItems: 'center',
})

export const StyledErrorIcon = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // error icon styling
  width: '$5_5',
  height: '$4_5',
  display: 'flex',
  alignItems: 'center',
})

export const StyledErrorHeader = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  //header styling
  width: '100%',
  height: '$9',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
})

export const StyledErrorContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '$4',

  //error container
  flexDirection: 'collumn',
  justifyContent: 'flex-start',
  gap: '$4',
  borderRadius: '$1',
  variants: {
    variant: {
      primary: {
        width: '$138',
        boxShadow:
          '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '$background',
      },
      secondary: {
        width: '$127_25',
        height: '$181',
        padding: '$8',
        backgroundColor: '#F6F7F8',
        borderRadius: '0px 4px 4px 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [`${StyledErrorImage}`]: {
          height: '66%',
        },
        [`${StyledErrorTitle}`]: {
          height: '$12',
          fontSize: '$header1',
          justifyContent: 'center',
        },
        [`${StyledErrorDescription}`]: {
          height: '$12',
          fontSize: '$body3',
          color: 'gray80',
          justifyContent: 'center',
          textAlign: 'center',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ErrorVariantProps = VariantProps<typeof StyledErrorContainer>
