import {styled} from '../theme'

export const StyledReactTableResizer = styled('div', {
  position: 'absolute',
  right: 0,
  top: 0,
  height: '100%',
  width: '5px',
  background: 'rgba(0, 0, 0, 0.5)',
  cursor: 'col-resize',
  opacity: 0,
  '&:hover': {opacity: 1},
  '&:active': {
    userSelect: 'none',
  },
})
