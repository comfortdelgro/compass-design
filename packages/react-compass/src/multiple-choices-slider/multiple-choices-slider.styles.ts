import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledMultipleChoicesSlider = styled('div', {
  width: '100%',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  display: 'flex',
  padding: '0 $4',
  gap: '$2',
  scrollSnapType: 'x mandatory',
})
export const StyledMultipleChoicesSliderItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '$xl',
  minWidth: '154px',
  height: '95px',
  color: '$primaryText',
  cursor: 'pointer',
  fontWeight: '$medium',
  fontSize: '$body3',
  gap: '$2',
  padding: '$2 0',
  scrollSnapAlign: 'center',
  '& svg': {
    flex: 1,
  },
  '& span': {
    display: 'block',
    wordWrap: 'break-word',
    width: '100%',
    whiteSpace: 'normal',
    textAlign: 'center',
    userSelect: 'none',
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: '$cdgBlue40',
      },
      false: {
        backgroundColor: '$grayShades10',
      },
    },
  },
})

export type MultiChoicesSliderVariantProps = VariantProps<
  typeof StyledMultipleChoicesSlider
>
export type MultiChoicesSliderItemVariantProps = VariantProps<
  typeof StyledMultipleChoicesSliderItem
>
