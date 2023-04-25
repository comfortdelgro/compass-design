import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const SliderContainer = styled('div', {
  position: 'relative',
  height: '100%',
  width: '$3',
  background: '$gray50',
  cursor: 'pointer',
  borderRadius: '$full',
})

export const Thumb = styled('div', {
  right: '0',
  boxSizing: 'border-box',
  width: '$4',
  height: '$4',
  borderRadius: '50%',
  background: '$background',
  border: '1px solid #e6ecf7',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.16)',
  position: 'absolute',
  top: '50%',
  transform: 'translate3d(100%, -50%, 0)',
  cursor: 'pointer',
  opacity: 0,
})

export type SliderVariantProps = VariantProps<typeof SliderContainer>
