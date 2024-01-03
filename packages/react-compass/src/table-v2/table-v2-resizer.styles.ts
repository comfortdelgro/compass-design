import {styled} from '../theme'

export const StyledTableV2Resizer = styled('div', {
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
  '@media (max-width: 768px)': {
    opacity: 1,
    userSelect: 'none',
    touchAction: 'none',
    '&:hover': {
      backgroundColor: '$blueShades100',
    },
  },
  '@media(min-width: 768px) and (max-width: 1024px)': {
    opacity: 1,
    userSelect: 'none',
    touchAction: 'none',
    '&:hover': {
      backgroundColor: '$blueShades100',
    },
  },
})
