import {styled} from '../../theme'
import {VariantProps} from '../../utils/stitches.types'

export const StyledDragAndDrop = styled('ul', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
  gap: '$6',
  marginBlockStart: 0,
  marginBlockEnd: 0,
  marginInlineStart: 0,
  marginInlineEnd: 0,
  paddingInlineStart: 0,
  '.dnd-list-drop-target': {
    background: '$cdgBlue',
    height: 2,
  },
  li: {
    cursor: 'pointer',
    '&:focus-visible': {
      outline: 'none',
      borderRadius: 0,
    },
  },
})

export type DragAndDropVariantProps = VariantProps<typeof StyledDragAndDrop>
