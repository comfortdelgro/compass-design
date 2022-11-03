import {styled} from '../theme'

export const InvisibilityCloak = styled('div', {
  visibility: 'visible',
  variants: {
    on: {true: {visibility: 'hidden'}},
    off: {true: {visibility: 'visible'}},
  },
  defaultVariants: {
    on: true, // because when you put it on, you'd expect it to be invisible by default
    off: false,
  },
})
