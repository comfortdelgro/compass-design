import {styled} from '../../theme'

export const StyledPopover = styled('div', {
  position: 'absolute',
  zIndex: '$$zIndex',
  margin: 0,
  padding: '$2 0',
  borderRadius: '$md',
  width: 'fit-content',
  minWidth: '100%',
  background: '#FFFFFF',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  ul: {
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
