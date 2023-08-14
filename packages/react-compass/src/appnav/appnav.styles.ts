import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledAppNav = styled('nav', {
  width: '375px',
  height: '100px',
  backgroundColor: '$background',
  boxShadow: '0px -2px 4px 0px #00000014',
  padding: '$6 $6 34px $6',
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  left: 0,
  right: 0,
  variants: {
    sections: {
      4: {
        gap: '$11',
      },
      5: {
        gap: '$6',
      },
    },
    position: {
      top: {
        top: 0,
      },
      bottom: {
        bottom: 0,
      },
    },
  },
})

export type StyledAppNavProps = VariantProps<typeof StyledAppNav>
