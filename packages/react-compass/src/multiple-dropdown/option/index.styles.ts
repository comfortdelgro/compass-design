import {styled} from '../../theme'

export const StyledRightIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '$6',
  height: '$6',
  variants: {
    isSelected: {
      true: {
        div: {
          border: 0,
          background: '$cdgBlue100',
          svg: {
            display: 'block',
          },
        },
      },
      false: {
        svg: {
          display: 'none',
        },
      },
    },
    variant: {
      checkbox: {
        div: {
          border: '1px solid #323130',
          borderRadius: '3px',
          width: '$4',
          height: '$4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
        },
      },
      none: {},
      tick: {},
    },
  },
})
