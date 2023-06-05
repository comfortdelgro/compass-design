import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledAccordionTitleWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  // styling
  width: '100%',
  minHeight: '82px',
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
    marginRight: '$6',
  },

  '& svg': {
    width: '$5',
    height: '$5',
    marginTop: '12px',
  },

  '& .accordion-chevron-container': {
    marginLeft: '$6',
  },

  '& .accordion-chevron-icon': {
    width: '$5',
    height: '$0.75',
    marginTop: '12px',
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
