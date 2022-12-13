import {StyledBreadcrumbItem} from '../breadcrumbs/breadcrumb-item.styles'
import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'
import {StyledPageHeaderDescription} from './page-header-description.style'
import {StyledPageHeaderSubtitle} from './page-header-subtitle.style'
import {StyledPageHeaderTitle} from './page-header-title.style'

export const StyledPageHeader = styled('div', {
  padding: '$4 $12',

  [`& ${StyledPageHeaderTitle}`]: {
    fontSize: '$header3',
    lineHeight: '36px',
  },

  [`& ${StyledPageHeaderDescription}`]: {
    lineHeight: '$normal',
    fontSize: '$body2',
  },

  variants: {
    color: {
      white: {
        backgroundColor: '$background',
        [`& ${StyledPageHeaderTitle}`]: {
          color: '$gray80',
        },

        [`& ${StyledPageHeaderSubtitle}`]: {
          color: '$gray70',
        },

        [`& ${StyledPageHeaderDescription}`]: {
          color: '$gray80',
        },

        [`& ${StyledBreadcrumbItem}`]: {
          color: '$gray70',
        },

        [`& ${StyledBreadcrumbItem}.active`]: {
          color: '#009EDA',
        },
      },
      blue: {
        backgroundColor: '$cdgBlue100',
        [`& ${StyledPageHeaderTitle}`]: {
          color: '$whiteText',
        },

        [`& ${StyledPageHeaderSubtitle}`]: {
          color: '$gray50',
        },

        [`& ${StyledPageHeaderDescription}`]: {
          color: '$whiteText',
        },

        [`& ${StyledBreadcrumbItem}`]: {
          color: '$gray70',
        },

        [`& .divider-icon`]: {
          color: '$gray70',
        },

        [`& ${StyledBreadcrumbItem}.active`]: {
          color: '$cdgBlue10',
        },
      },
    },
  },
})

export type PageHeaderVariantProps = VariantProps<typeof StyledPageHeader>
