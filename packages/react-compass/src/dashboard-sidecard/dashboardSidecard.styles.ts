import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledDashboardHeader = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  //backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  //styling
  paddingTop: '$2',
  paddingBottom: '$2',
  paddingLeft: '$4',
  paddingRight: '$4',
  backgroundColor: '$cdgBlue10',
  borderBottom: '1px solid rgba(0, 0, 0, 0.02)',
  '& *': {
    fontFamily: '$sans',
    fontWeight: '$medium',
    fontSize: '$body2',
    lineHeight: '$normal',
  },
})

export const StyledDashboardContent = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  //backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  //styling
  paddingTop: '$4',
  paddingBottom: '$4',
  paddingLeft: '$6',
  paddingRight: '$6',
  backgroundColor: '$primaryBg',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$4',
  alignItems: 'center',
})

export const StyledDashboardSidecardContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',

  // styling
  width: '$90_75',
  borderRadius: '$lg',
  overflow: 'clip',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '0px',
  boxShadow:
    '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
})

export type DashboardSidecardVariantProps = VariantProps<
  typeof StyledDashboardSidecardContainer
>
