import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledPaginationItem = styled('button', {
  minWidth: '$8',
  height: '$8',
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

  svg: {
    height: '1em',
    overflow: 'visible',
    verticalAlign: '-0.125em',
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
    isEllipsis: {
      true: {
        background: '$background',
      },
    },
    disabled: {
      true: {
        cursor: 'initial',
        '&:hover': {
          background: 'initial',
        },
      },
    },
  },
})

export const StyledPagination = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$4',
  padding: '$2 $6',
  flexWrap: 'wrap',
})

export const StyledPaginationItemCounting = styled('div', {
  fontWeight: '600',
})

export const StyledPaginationRowsCounting = styled('div', {
  fontWeight: '600',
  display: 'flex',
  whiteSpace: 'nowrap',
  marginRight: 'auto',
  alignItems: 'center',
  gap: '10px',
})

export type PaginationVariantProps = VariantProps<typeof StyledPagination>
