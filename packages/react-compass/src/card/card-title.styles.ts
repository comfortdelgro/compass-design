import {styled} from '../theme'

export const StyledCardTitleContainer = styled('div', {
  width: '100%',
  position: 'relative',
  backgroundColor: 'inherit',
  display: 'flex',
  alignItems: 'center',
  '.card-title': {
    fontSize: '$header5',
    margin: 0,
    fontWeight: '$semibold',
    color: '$primaryText',
    flex: 1,
  },
})

export const StyledCardTitle = styled('h3', {
  fontSize: '$header5',
  margin: 0,
  fontWeight: '$semibold',
  color: '$primaryText',
  flex: 1,
})
