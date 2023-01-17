import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledSidebarCloseIcon = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // title style
  height: '$6',
  width: '$6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '& *': {
    height: '100%',
  },
})

export const StyledSidebarTitle = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // title style
  height: '100%',
  fontFamily: '$sans',
  fontWeight: '$semibold',
  lineHeight: '$normal',

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

export const StyledSidebarActions = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // header style
  width: '100%',
  height: '$18',
  paddingLeft: '$2',
  paddingRight: '$2',
  paddingTop: '$4',
  paddingBottom: '$4',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '$background',
  position: 'absolute',
  bottom: '0',
  left: '0',
})

export const StyledSidebarContent = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '$4',
  background: 'transparent',
  overflow: 'hidden',

  // header style
  width: '100%',
})

export const StyledSidebarHeader = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',
  borderBottom: '0.5px solid #C8C6C4',

  // header style
  width: '100%',
  height: '$10',
  paddingLeft: '$4',
  paddingRight: '$4',
  paddingTop: '$2',
  paddingBottom: '$2',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '$background',
})

export const StyledSidebarWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'rgba(0, 0, 0, 0.4)',

  // wrapper styling
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '49',
})

export const StyledSidebar = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  overflow: 'hidden',

  // sidebar styling
  width: '$88',
  height: '100vh',
  position: 'absolute',
  top: '0',
  zIndex: '50',
  backgroundColor: '$primaryBg',

  // variants
  variants: {
    position: {
      left: {
        left: '0',
      },
      right: {
        right: '0',
      },
    },
    variant: {
      primary: {},
      secondary: {backgroundColor: '$background', padding: '$12'},
    },
  },

  defaultVariants: {
    variant: 'primary',
    position: 'left',
  },
})

export type SidebarVariantProps = VariantProps<typeof StyledSidebar>
