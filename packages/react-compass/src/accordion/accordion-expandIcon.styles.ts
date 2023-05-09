import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledAccordionExpandIconWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  // styling
})

export type AccordionExpandIconVariantProps = VariantProps<
  typeof StyledAccordionExpandIconWrapper
>
