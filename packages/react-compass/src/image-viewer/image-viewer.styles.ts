import {styled} from '../theme'

export const StyledImageViewerWrap = styled('div', {
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  zIndex: '51',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
})

export const StyledToolbarWrap = styled('div', {
  zIndex: '52',
  position: 'fixed',
  bottom: 50,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledToolbar = styled('div', {
  display: 'flex',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledNavbar = styled('div', {
  zIndex: 52,
  position: 'fixed',
  height: 50,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  width: '100vw',
})

export const StyledNavbarItem = styled('div', {
  zIndex: 53,
  height: 50,
  img: {
    width: '60px',
    height: '50px',
    opacity: 0.5,
  },
  '.active': {
    opacity: 1,
  },
})
