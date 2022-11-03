import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'
import {StyledAvatar} from './avatar.styles'

export const StyledAvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',

  [`& ${StyledAvatar}`]: {
    marginRight: '-$2',
    '&:hover': {
      marginTop: '-$4',
    },
  },
})

export type AvatarGroupVariantProps = VariantProps<typeof StyledAvatarGroup>
