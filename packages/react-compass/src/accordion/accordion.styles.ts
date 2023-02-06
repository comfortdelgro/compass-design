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
  '& .accordion-body': {
    backgroundColor: 'inherit',
    color: 'inherit',
    height: 'auto',
    borderWidth: '$light',
    borderStyle: 'solid',
    borderColor: '$gray30',
    borderTop: 0,
    borderBottomLeftRadius: '$lg',
    borderBottomRightRadius: '$lg',
    overflow: 'hidden',
    transition: 'max-height 0.25s ease-in-out',
  },
  '& .accordion-body.collapsed': {
    border: 'none',
  },
  '& .accordion-body-inner': {
    padding: '$4 $6 $4 $5',
  },
  lineHeight: '$normal',
})
