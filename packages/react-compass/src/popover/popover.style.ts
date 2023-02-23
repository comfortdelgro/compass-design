import {styled} from '../theme'

export const StyledPopover = styled('div', {
  display: 'inline-block',
})

export const StyledPopoverContent = styled('div', {
  display: 'block',
  position: 'absolute',
  zIndex: '60',
  // '&.bottom-right': {
  //   top: '100%',
  //   left: '0',
  // },
  // '&.bottom-left': {
  //   top: '100%',
  //   right: '0',
  // },
  // '&.top-left': {
  //   bottom: '100%',
  //   right: '0',
  // },
  // '&.top-right': {
  //   bottom: '100%',
  //   left: '0',
  // },
  '&.bottom-center': {
    transform: 'translateX(-50%)',
  },
  '&.top-center': {
    transform: 'translateX(-50%)',
  },
})
