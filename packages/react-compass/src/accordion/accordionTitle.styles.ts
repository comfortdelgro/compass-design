import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledAccordionTitleWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  position: 'relative',
  padding: '$4 $6 $4 $5',
  borderWidth: '$light',
  borderStyle: 'solid',
  borderColor: '$gray30',
  borderRadius: '$lg',
  userSelect: 'none',
  cursor: 'pointer',
  '& *': {
    margin: 0,
  },

  '& .accordion-title': {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  '& .accordion-left-icon-container': {
    display: 'flex',
    alignItems: 'center',
    marginRight: '$6',
  },

  '& .accordion-left-icon': {
    width: '$5',
    height: '$5',
  },

  '& .accordion-chevron-container': {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '$6',
  },

  '& .accordion-chevron-icon': {
    width: '$5',
    height: '$0.75',
  },

  variants: {
    expand: {
      close: {},
      open: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  },
})

export type AccordionTitleVariantProps = VariantProps<
  typeof StyledAccordionTitleWrapper
>
