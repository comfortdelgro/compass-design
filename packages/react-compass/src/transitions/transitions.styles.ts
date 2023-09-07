import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTransition = styled('div', {
  // reset
  boxSizing: 'border-box',
  background: 'transparent',
  border: 'none',
  margin: 0,
  padding: 0,
  outline: 'none',
  // custom
  transitionDuration: '$$speed',
  transitionTimingFunction: 'ease',
  overflow: 'hidden',

  variants: {
    effect: {
      collapse: {
        overflow: 'hidden',
        // height: '0px',
        transition: '$$collapseDirection $$speed',
        '-moz-transition': '$$collapseDirection $$speed' /* Firefox 4 */,
        '-webkit-transition':
          '$$collapseDirection $$speed' /* Safari and Chrome */,
        '-o-transition': '$$collapseDirection $$speed' /* Opera */,
      },
      fade: {
        opacity: 0,
        transition: 'opacity $$speed',
      },

      slide: {
        position: 'absolute',
        transform: ' $$slideDirection',
        transition: 'transform $$speed',
      },
      zoom: {
        transform: 'scale(0)',
        transition: 'transform $$speed',
      },
    },
    show: {
      true: {},
      false: {},
    },
    orientation: {
      horizontal: {
        width: '0px',
      },
      vertical: {
        height: '0px',
      },
      none: {},
    },
  },
  compoundVariants: [
    {
      effect: 'collapse',
      orientation: 'vertical',
      show: true,
      css: {
        height: '$$collapsedSize',
      },
    },
    {
      effect: 'collapse',
      orientation: 'horizontal',
      show: true,
      css: {
        width: '$$collapsedSize',
      },
    },
    {
      effect: 'fade',
      show: true,
      css: {
        opacity: 1,
      },
    },
    {
      effect: 'grow',
      show: true,
      css: {
        transform: 'scale(1)',
      },
    },
    {
      effect: 'slide',
      show: true,
      css: {
        transform: 'translateX(0)',
        position: 'static',
      },
    },
    {
      effect: 'zoom',
      show: true,
      css: {
        transform: 'scale(1)',
      },
    },
  ],
})

export type TransitionsVariantProps = VariantProps<typeof StyledTransition>
