import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledAppNav = styled('nav', {
  // width: '375px',
  height: '102px',
  backgroundColor: '$background',
  boxShadow: '0px -2px 4px 0px #00000014',
  padding: '$6 $6 34px $6',
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  justifyContent: 'space-between',

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

export const StyledAppNavSection = styled('button', {
  backgroundColor: '$background',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  height: '$11',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  span: {
    fontSize: '$label3',
    lineHeight: '1rem',
    userSelect: 'none',
  },
  '&:focus-visible': {
    outline: '2px solid $cdgBlue',
  },
  variants: {
    active: {
      true: {
        '& svg, span': {
          color: '$cdgBlue',
        },
      },
      false: {
        '& svg, span': {
          color: '$grayShades60',
        },
      },
    },
  },
})
export type StyledAppNavProps = VariantProps<typeof StyledAppNav>
