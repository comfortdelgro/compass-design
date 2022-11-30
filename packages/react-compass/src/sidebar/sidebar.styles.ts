import {styled} from '../theme'
<<<<<<< HEAD

export const StyledSidebar = styled('div', {
  width: '$18',
  padding: '$4 0',
  backgroundColor: '$darkerBg',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'all 0.25s',

  [`& > :not(:last-child)`]: {
    marginBottom: '$5',
  },

  variants: {
    size: {
      full: {
        width: '$72',
        filter:
          'drop-shadow(0px 0.6px 1.8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3.2px 7.2px rgba(0, 0, 0, 0.13))',
      },
      default: {},
    },
  },
})
=======
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
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
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
  background: 'transparent',

  // wrapper styling
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '999',
})

export const StyledSidebar = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // sidebar styling
  width: '$88',
  height: '100vh',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '1000',
  backgroundColor: '$primaryBg',

  // variants
  variants: {
    variant: {
      primary: {},
      secondary: {backgroundColor: '$background', padding: '$12'},
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type SidebarVariantProps = VariantProps<typeof StyledSidebar>
>>>>>>> develop
