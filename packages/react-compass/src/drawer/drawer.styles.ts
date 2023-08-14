import {styled} from '../theme'
import {keyframes} from '../theme/stitches.config'
import type {VariantProps} from '../utils/stitches.types'

const slideInLeft = keyframes({
  from: {transform: 'translateX(-100%)'},
})

const slideOutLeft = keyframes({
  to: {transform: 'translateX(-100%)'},
})

const slideInRight = keyframes({
  from: {transform: 'translateX(100%)'},
})

const slideOutRight = keyframes({
  to: {transform: 'translateX(100%)'},
})

const slideInUp = keyframes({
  from: {transform: 'translateY(100%)'},
})

const slideOutUp = keyframes({
  to: {transform: 'translateY(100%)'},
})

export const StyledDrawer = styled('dialog', {
  padding: 0,
  insetBlock: 0,

  maxHeight: '100%',
  maxWidth: 'unset',

  flexDirection: 'column',

  border: 'none',
  boxSizing: 'border-box',
  zIndex: '50',
  pointerEvents: 'none',

  '&::backdrop': {
    background: 'rgba(0, 0, 0, 0.4)',
  },

  '&[open]': {
    display: 'flex',
    pointerEvents: 'auto',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    display: 'flex',
    opacity: 0,
    animation: '.2s cubic-bezier(.25,0,.3,1) forwards',

    '&[open]': {
      opacity: 1,
      animation: '.4s cubic-bezier(.25,0,.3,1) forwards',
    },
  },

  variants: {
    position: {
      left: {
        insetInline: '0 auto',
        animationName: `${slideOutLeft}`,

        '&[open]': {
          animationName: slideInLeft,
        },
      },
      right: {
        insetInline: 'auto 0',
        animationName: `${slideOutRight}`,

        '&[open]': {
          animationName: slideInRight,
        },
      },
      bottom: {
        height: '40dvh',
        width: '100%',
        insetBlock: 'auto 0',
        animationName: `${slideOutUp}`,

        '&[open]': {
          animationName: slideInUp,
        },
      },
    },
    variant: {
      default: {
        height: '100dvh',
        width: '100%',
        '@sm': {width: 'clamp( 30vw, $160, 50vw )'},

        '@media (prefers-reduced-motion: no-preference)': {
          transition: 'height .2s ease, opacity .2s ease',
        },
      },
      h5: {
        height: '40dvh',
        maxHeight: 'calc(100dvh - 1rem)',
        borderRadius: '1rem 1rem 0 0',

        '@media (prefers-reduced-motion: no-preference)': {
          transition: 'opacity .2s ease',
        },

        '&.drawer-expanded': {
          height: 'calc(100dvh - 1rem)',
        },
      },
    },
  },
})

export const StyledDrawerHeader = styled('header', {
  padding: '$4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$4',
})

export const StyledDrawerBody = styled('article', {
  flex: 1,
  padding: '$4',

  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'auto',
})

export const StyledDrawerFooter = styled('footer', {
  padding: '$4',
})

export const StyledDrawerExpander = styled('div', {
  paddingBlock: '$4',
  '@sm': {paddingBlock: '$2'},

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  cursor: 'grab',

  '&:active': {
    cursor: 'grabbing',
  },

  '& .expander-line': {
    display: 'block',
    width: '$10',
    height: '$1',
    background: '$grayShades20',
  },
})

export type DrawerVariantProps = VariantProps<typeof StyledDrawer>
