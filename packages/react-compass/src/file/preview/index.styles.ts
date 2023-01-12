import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledPreview = styled('div', {
  borderRadius: '$md',
  height: '$36',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  variants: {
    imageLoaded: {
      true: {
        backgroundColor: '$primaryBg',
      },
      false: {
        backgroundColor: '#CCECF8',
      },
    },
  },
})

export const StyledImagePreview = styled('div', {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  img: {
    objectFit: 'contain',
    width: '100%',
  },
})

export type PreviewVariantProps = VariantProps<typeof StyledPreview>
