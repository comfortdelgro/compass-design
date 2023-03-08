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
    background: '#E1DFDD',
  },
  backgroundColor: 'rgb(243, 242, 241)',
  alignItems: 'center',
  gap: 10,
  variants: {
    isOpen: {
      true: {
        background: '#605E5C',
        cursor: 'pointer',
        color: '#ffffff',
        '& .accordion-chevron-icon': {
          transform: 'rotate(180deg)',
        },
        // '& .dropdown-button-icon': {
        //   color: '#ffffff',
        // },
      },
    },
  },
})

export type RichTextEditorDropdownButtonVariantProps = VariantProps<
  typeof StyledDropdownButton
>
