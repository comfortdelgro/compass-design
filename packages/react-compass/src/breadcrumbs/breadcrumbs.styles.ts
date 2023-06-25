import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledBreadcrumbs = styled('nav', {
  fontFamily: '$sans',

  ol: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    listStyle: 'none',
  },

  '.divider': {
    color: '$primaryText',
    padding: '0 $2',

    svg: {
      width: '$3_5',
      height: '$3_5',
    },
  },
})

export type BreadcrumbsVariantProps = VariantProps<typeof StyledBreadcrumbs>
