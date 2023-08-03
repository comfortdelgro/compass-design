import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledAccordionButton = styled('button', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  // styling
  width: '100%',
  textAlign: 'unset',
  position: 'relative',
  borderRadius: '$lg',
  color: '$primaryText',
  '&:focus-visible': {
    outline: 'none',
    /* custom focus styles */
    boxShadow: '0 0 2px 2px #CCD9EF',
  },

  variants: {
    expand: {
      close: {
        backgroundColor: '$background',
      },
      open: {
        backgroundColor: '$gray20',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        '& .accordion-chevron-icon': {
          transform: 'rotate(180deg)',
        },
      },
    },
  },
})

export type AccordionTitleVariantProps = VariantProps<
  typeof StyledAccordionButton
>
