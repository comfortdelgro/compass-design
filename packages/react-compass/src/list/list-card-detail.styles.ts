import {StyledAvatarGroup} from '../avatar/avatar-group.styles'
import {StyledAvatar} from '../avatar/avatar.styles'
import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledListCardDetail = styled('div', {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  marginTop: '$6',

  '.list-card-detail-title': {
    margin: 0,
    fontSize: '12px',
    lineHeight: '18px',
    color: '$gray80',
    fontWeight: '$medium',
  },

  [`.list-card-detail-avatars ${StyledAvatar}`]: {
    height: '16px',
    width: '16px',
  },

  [`.list-card-detail-avatars ${StyledAvatarGroup} ${StyledAvatar}`]: {
    marginRight: '-$1',
    fontSize: '1px',
  },

  [`.list-card-detail-avatars .initials`]: {
    fontSize: '8px',
  },

  '.list-card-detail-footer': {
    display: 'flex',
    flexDirection: 'row',
    gap: '$1',
  },

  '.list-card-detail-description': {
    color: '$gray80',
    fontSize: '10px',
    lineHeight: '16px',
    fontWeight: '500',
  },

  variants: {
    isDisabled: {
      true: {
        '& .list-card-detail-title': {
          color: '$gray60',
        },

        '& .list-card-detail-description': {
          color: '$gray60',
        },

        [`& .list-card-detail-avatars ${StyledAvatar}`]: {
          filter: 'grayscale(1)',
        },
      },
    },
  },
})

export type ListCardDetailVariantProps = VariantProps<
  typeof StyledListCardDetail
>
