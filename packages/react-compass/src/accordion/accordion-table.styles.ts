import {styled} from '../theme'

export const StyledAccordionTable = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$4 $12',

  '& > *': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  '& > * > *': {
    width: '50%',
  },
})
