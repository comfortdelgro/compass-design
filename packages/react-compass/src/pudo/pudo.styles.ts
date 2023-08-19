import {styled} from '../theme'
import {keyframes} from '../theme/stitches.config'
import {VariantProps} from '../utils/stitches.types'

const fadeIn = keyframes({
  from: {opacity: '0'},
  to: {opacity: '1'},
})

export const StyledPUDO = styled('div', {
  maxWidth: '100%',

  '.pudo-items': {
    borderRadius: '$lg',
    border: '1px solid $grayShades20',
    overflow: 'hidden',
  },

  '.pudo-actions': {
    paddingBlock: '$2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})

export const StyledPUDOItem = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  paddingInline: '$4 $8',
  transition: 'background-color .2s ease-in-out',
  animation: `${fadeIn} .2s cubic-bezier(.25,0,.3,1) forwards`,

  '.pudo-item__icon': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '$5',
    width: '$5',
    textAlign: 'center',
  },

  '.pudo-item__connect-icon': {
    position: 'absolute',
    left: '$4',
    bottom: '-$3_5',
    zIndex: 1,
  },

  '.pudo-item__swap-icon': {
    all: 'unset',
    position: 'absolute',
    right: '$1',
    bottom: '-$3',
    zIndex: 1,
    borderRadius: '$full',

    cursor: 'pointer',
    svg: {
      display: 'block',
    },

    '&:focus': {
      boxShadow:
        '0 0 0 2px $colors$cdgBlue40, 0 0 #000, 0 1px 2px 0 $colors$cdgBlue60',
    },
  },

  '&:last-child': {
    '.pudo-item__connect-icon, .pudo-item__swap-icon': {
      display: 'none',
    },
  },

  '&~ .pudo-item': {
    '.pudo-item__input': {
      transition: 'height .2s ease-in-out',
      borderTop: '1px solid $grayShades20',
    },
  },

  '&:focus-within': {
    backgroundColor: '$grayShades10',
  },

  variants: {
    variant: {
      input: {},
      label: {},
    },
  },
})

export type PudoItemVariantProps = VariantProps<typeof StyledPUDOItem>
