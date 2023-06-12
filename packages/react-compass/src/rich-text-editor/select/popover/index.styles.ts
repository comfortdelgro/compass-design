import {styled} from '../../../theme'

export const StyledPopover = styled('div', {
  margin: 0,
  padding: '4px 0',
  borderRadius: '4px',
  width: 'fit-content',
  height: 'fit-content',
  minWidth: '100%',
  background: '#FFFFFF',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
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
  variants: {
    type: {
      heading: {
        ul: {
          width: '230px',
        },
      },
      color: {
        width: '238px',
        padding: '9px',
        ul: {
          display: 'flex',
          gap: '4px',
          flexWrap: 'wrap',
          li: {
            padding: 0,
          },
        },
      },
      alignment: {},
    },
  },
})
