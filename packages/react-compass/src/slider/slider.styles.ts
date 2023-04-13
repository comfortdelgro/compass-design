import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const RangeSliderContainer = styled('div', {
  display: 'flex',
  width: '100%',
  height: '0.25rem',
  background: '#e6ecf7',
  borderRadius: '6.25rem',
  position: ' relative',
  cursor: 'pointer',
  '&:focus .thumb-tooltips::after': {
    content: 'attr(value)',
    position: 'absolute',
    backgroundColor: '#201f1e',
    width: '3.125rem',
    height: '3.125rem',
    color: '#fff',
    padding: '0.2rem',
    borderRadius: '0.2rem',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    bottom: '1.688rem',
    transform: 'translateX(-35%)',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'var(--bold)',
    fontSize: '1.25rem',
    lineHeight: '3.125rem',
    textAlign: 'center',
  },
  '&:focus .thumb-tooltips::before': {
    content: '',
    position: 'absolute',
    border: '10px solid transparent',
    borderTop: '10px solid #201f1e',
    left: '50%',
    bottom: '0.5rem',
    transform: 'translateX(-50%)',
    zIndex: '1',
  },
})

export const RangeSlider = styled('div', {
  background: '#0142af',
  height: '100%',
  position: 'relative',
})

export const Thumb = styled('div', {
  right: '0',
  boxSizing: 'border-box',
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  background: '#ffffff',
  border: '1px solid #e6ecf7',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.16)',
  position: 'absolute',
  top: '50%',
  transform: 'translate3d(100%, -50%, 0)',
  cursor: 'pointer',
})

export type SliderVariantProps = VariantProps<typeof RangeSliderContainer>
