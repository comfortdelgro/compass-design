import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledRichTextRenderContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  lineHeight: '1em',
  color: "$primaryText"
})

export type StyledRichTextRenderContainerProps = VariantProps<
  typeof StyledRichTextRenderContainer
>
