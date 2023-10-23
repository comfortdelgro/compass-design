import {styled} from '../theme'

export const StyledFilterInput = styled('div', {
  padding: '$2',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  backgroundColor: '$background',
  borderRadius: '$md',

  '& > .column-filter__number-container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '@sm': {
      flexDirection: 'row',
    },
  },
})
