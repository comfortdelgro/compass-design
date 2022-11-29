import {styled} from '../theme'

export const StyledFooterNavigation = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat($$gridItems, 1fr)',
  gap: '32px',
  overflow: 'hidden',

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },

  '@tablet': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  '@mobile': {
    display: 'none',
  },
})
