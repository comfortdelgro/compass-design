import {styled} from '../../theme'

export const StyledCalc = styled('div', {
  padding: '$2 0',
  position: 'absolute',
  top: 0,
  left: '-9999px',
  overflow: 'hidden',
  visibility: 'hidden',
  whiteSpace: 'nowrap',
  zIndex: -99999999,
  // background: 'red',
  ul: {
    overscrollBehavior: 'contain',
    maxHeight: '$64',
    overflowY: 'auto',
    listStyle: 'none',
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: 0,
    '&:focus': {
      outline: 'none',
    },
  },
})
