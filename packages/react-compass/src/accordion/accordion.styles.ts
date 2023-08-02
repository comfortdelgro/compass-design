import {styled} from '../theme'

export const StyledAccordion = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  //backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // styling
  width: '100%',
  minHeight: '82px',
  position: 'relative',
  backgroundColor: '$background',
  color: '$primaryText',
  borderRadius: '$lg',
  '& .accordion-body-inner': {
    padding: '$4 $6 $4 $5',
  },
  lineHeight: '$normal',
})
