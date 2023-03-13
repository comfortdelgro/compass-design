import {styled} from '../../../theme'
import {VariantProps} from '../../../utils/stitches.types'

export const StyledDropdownButton = styled('button', {
  width: '100%',
  padding: '4px 8px',
  textAlign: 'unset',
  position: 'relative',
  border: 'none',
  borderRadius: '$lg',
  color: '$primaryText',
  cursor: 'pointer',
  display: 'flex',
  '&:focus-visible': {
    outline: 'none',
  },
  '&:hover': {
    backgroundColor: '#E1DFDD !important',
  },
  backgroundColor: '#f3f2f1 !important',
  alignItems: 'center',
  gap: 16,
  variants: {
    isOpen: {
      true: {
        backgroundColor: '#605E5C !important',
        cursor: 'pointer',
        color: '#ffffff',
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
