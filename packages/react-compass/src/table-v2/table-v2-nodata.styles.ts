import {styled} from '../theme'

export const StyledNoData = styled('div', {
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '.empty-description': {
    color: '$cdgBlue',
    fontSize: '$header4',
    fontFamily: 'Poppins',
    fontWeight: '$semibold',
    marginTop: '1rem',
  },
})
