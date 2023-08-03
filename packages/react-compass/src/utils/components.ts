import {styled} from '../theme'

export const Flexbox = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '$2',
})

export const Row = styled(Flexbox, {
  flexDirection: 'row',
  alignItems: 'center',
})

export const Column = styled(Flexbox, {
  flexDirection: 'column',
})
