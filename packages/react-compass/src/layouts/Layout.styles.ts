import {styled} from '../theme'

export const StyledLayout = styled('div', {
  display: 'flex',
  gap: '$4',
})

export const StyledActionBarLeftGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  gap: '$4',
})

export const StyledActionBarCenterGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  gap: '$4',
})

export const StyledActionBarRightGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flex: 1,
  gap: '$4',
})
