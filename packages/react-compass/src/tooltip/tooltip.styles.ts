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
  background: '$typeHeading',
  lineHeight: '$normal',
  borderRadius: '$md',
  boxShadow:
    '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
  color: '$whiteText',
  fontSize: '14px',

  '& .tooltip-header': {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '$5',
    lineHeight: '$7',
    marginBottom: '$2',
  },

  '.tooltip-title': {
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

  '&.no-title': {
    padding: '$2 $4',
  },
})
