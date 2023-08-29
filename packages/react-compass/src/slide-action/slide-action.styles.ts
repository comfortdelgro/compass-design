import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledSlideAction = styled('div', {
  padding: '$2',
  maxWidth: '$80',

  display: 'flex',
  alignItems: 'center',
  // gap: '$2',

  borderRadius: '$full',
  border: '1px solid #E31617',
})

export const StyledSlideDragger = styled('button', {
  width: '$12',
  height: '$12',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#E31617',
  borderRadius: '$full',
  border: 'none',
  cursor: 'grab',

  '&:active': {
    cursor: 'grabbing',
  },
})

export const StyledSlideLabel = styled('div', {
  flex: '1',

  paddingLeft: '$2',
  fontWeight: '$semibold',
  color: '#E31617',
  textAlign: 'center',

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export type SlideActionVariantProps = VariantProps<typeof StyledSlideAction>
