import {StyledBadge} from '../badge/badge.styles'
import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledListCard = styled('div', {
  padding: '$4',
  border: '1px solid $primaryBg',
  borderRadius: '$md',

  '.list-card-header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  '.list-card-header-right-side': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },

  '.list-card-title': {
    margin: 0,
    fontSize: '$header5',
    fontWeight: '$semibold',
    color: '$gray100',
    lineHeight: '24px',
  },

  '.list-card-description': {
    margin: 0,
    marginTop: '$2',
    fontSize: '$body3',
    lineHeight: '21px',
    color: '$gray80',
  },

  '.list-card-footer': {
    display: 'flex',
    alignItems: 'flex-start',
  },

  '.list-card-detail-wrapper': {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
  },

  '.list-card-ellipsis-icon': {
    width: '$1_5',
    height: '23px',
  },

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        '.list-card-title': {
          color: '$gray60',
        },
        '.list-card-description': {
          color: '$gray60',
        },
        [`& ${StyledBadge}`]: {
          backgroundColor: '$gray40',
          color: '$gray60',
        },
      },
    },
  },
})

export type ListCardVariantProps = VariantProps<typeof StyledListCard>
