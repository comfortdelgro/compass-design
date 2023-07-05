import {styled} from '../theme'

export const StyledNoData = styled('div', {
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '.empty-description': {
    color: '$tertiaryText',
    marginTop: '1em',
  },
})
