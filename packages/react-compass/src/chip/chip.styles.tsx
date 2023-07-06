import {styled} from '../theme'

export const StyledBox = styled('div', {
  border: '1px solid #E6E6E6',
  borderRadius: '$full',
  padding: '$1 $3',
  fontSize: '$label1',
  cursor: 'pointer',
  fontWeight: '$semibold',
  lineHeight: '$lineHeights$normal',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  color: '$primaryText',
  width: 'fit-content',
  height: 'fit-content',
  '.multiple-dropdown-chip-icon': {
    svg: {
      color: '$primaryText',
    },
  },
})
