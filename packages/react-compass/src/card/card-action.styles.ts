import {styled} from '../theme'

export const StyledCardAction = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
  alignItems: 'center',
  '@max_320': {
    justifyContent: 'center',
  },
})
