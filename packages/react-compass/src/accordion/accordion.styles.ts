import {styled} from '../theme'

export const StyledAccordion = styled('div', {
  width: '100%',
  position: 'relative',
  backgroundColor: '$background',
  borderRadius: '$lg',
  '& .accordion-body': {
    backgroundColor: 'inherit',
    color: 'inherit',
    height: 'auto',
    padding: '$4 $6 $4 $5',
    borderWidth: '$light',
    borderStyle: 'solid',
    borderColor: '$gray30',
    borderTop: 0,
    borderBottomLeftRadius: '$lg',
    borderBottomRightRadius: '$lg',
    overflow: 'hidden',
  },
  lineHeight: '$normal',

  variants: {
    expand: {
      close: {
        '& .accordion-body': {
          border: 0,
          padding: 0,
          height: 0,
        },
      },
      open: {
        '& .accordion-body': {
          height: 'auto',
        },
      },
    },
  },
})
