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
    backgroundColor: '#E1DFDD',
  },
  backgroundColor: '#f3f2f1',
  alignItems: 'center',
  gap: 16,
  variants: {
    isOpen: {
      true: {
        backgroundColor: '#605E5C',
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
