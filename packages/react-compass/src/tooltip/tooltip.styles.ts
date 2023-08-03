import {styled} from '../theme'

export const StyledTooltipArrow = styled('div', {
  backgroundColor: 'inherit',
  transform: 'rotate(45deg)',
  width: '10px',
  height: '10px',
  position: 'absolute',
})

export const StyledTooltip = styled('div', {
  $$themeColor: '$cdgBlue',
  position: 'absolute',
  padding: '$4',
  maxWidth: '$96',
  background: '$cdgBlue',
  lineHeight: '$normal',
  borderRadius: '$md',
  boxShadow:
    '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
  color: '$whiteText',

  '& .tooltip-header': {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '$4',
  },

  '& .tooltip-title': {
    fontSize: '$5',
    lineHeight: '$loose',
    margin: 0,
    marginRight: '$4',
  },

  '& .tootip-close-button': {
    marginLeft: 'auto',
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
    outline: 'inherit',
  },

  '& .tooltip-close-icon': {
    width: '$4',
    height: '$4',
  },
})
