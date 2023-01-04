import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledSlider = styled('div', {
  position: 'relative',
  touchAction: 'none',
  flexGrow: 1,
  height: '$1',
  '.slider-track-wrapper': {
    position: 'relative',
    width: '100%',
    '.slider-rail': {
      position: 'absolute',
      background: '$gray60',
      borderRadius: '$full',
      height: '$1',
      width: '100%',
      cursor: 'pointer',
    },
    '.slider-filled-rail': {
      position: 'absolute',
      background: '$background',
      height: '$1',
      borderRadius: '$full',
      left: '0',
      cursor: 'pointer',
    },
    '.slider-track': {
      position: 'relative',
      height: '$1',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      cursor: 'pointer',
    },
  },
})

export const StyledThumb = styled('div', {
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  transform: 'translateX(-50%)',
  zIndex: 1,
  '.slider-thumb-handle': {
    width: '$4',
    height: '$4',
    cursor: 'pointer',
    borderRadius: '50%',
    boxSizing: 'border-box',
    border: '2px solid $cdgBlue10',
    backgroundColor: '$background',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.16)',
  },
  '.slider-value': {
    position: 'absolute',
    width: '$16',
    height: '$16',
    color: '$whiteText',
    borderRadius: '$md',
    backgroundColor: '$gray110',
    fontSize: '$header4',
    fontWeight: '$bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '$6',
    '&:after': {
      content: '',
      position: 'absolute',
      width: '$4',
      height: '$4',
      transform: 'rotate(45deg)',
      borderRadius: '$md 0',
      backgroundColor: '$gray110',
      bottom: '-$2',
    },
  },
})

export type SliderVariantProps = VariantProps<typeof StyledSlider>
