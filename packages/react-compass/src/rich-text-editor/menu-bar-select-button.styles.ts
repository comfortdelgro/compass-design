import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledDropdownButton = styled('button', {
  width: '100%',
  textAlign: 'unset',
  position: 'relative',
  border: 'none',
  borderRadius: '$lg',
  color: '$primaryText',
  padding: 0,
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
        '& .accordion-chevron-icon': {
          transform: 'rotate(180deg)',
        },
      },
    },
  },
})

export type RichTextEditorDropdownButtonVariantProps = VariantProps<
  typeof StyledDropdownButton
>
