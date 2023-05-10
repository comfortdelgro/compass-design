import {styled} from '../theme'

export const StyledSidenavMenu = styled('div', {
  minWidth: '$72',
  padding: '$4 0',
  backgroundColor: '$darkerBg',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  outline: '1px solid #ffffff00',
  filter:
    'drop-shadow(0px 0.6px 1.8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3.2px 7.2px rgba(0, 0, 0, 0.13))',
  zIndex: 100,
})
