import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledPaginationItem = styled('button', {
  width: '$8',
  height: '$8',
  aspectRatio: '1 / 1',
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: '$light',
  borderStyle: 'solid',
  borderColor: 'transparent',
  fontSize: '$label1',
  fontWeight: '$semibold',
  color: '$primaryText',
  background: 'transparent',
  transition: '$default',
  cursor: 'pointer',

  '&:hover': {
    background: '$cdgBlue10',
  },

  variants: {
    active: {
      true: {
        color: '$whiteText',
        background: '$cdgBlue',

        '&:hover': {
          background: '$cdgBlue',
        },
      },
    },
  },
})

export const StyledPagination = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$1',
  padding: '$2 0',
})

export type PaginationVariantProps = VariantProps<typeof StyledPagination>
