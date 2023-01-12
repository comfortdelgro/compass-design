import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledState = styled('div', {
  backgroundColor: '$primaryBg',
  width: '100%',
  height: '$10',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$md',
  padding: '$2_5 $3',
  gap: '$2',
})

export const StyledFileNameWrapper = styled('div', {
  flexGrow: 1,
  fontSize: '$label2',
  fontWeight: '$semibold',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const StyledImage = styled('div', {
  width: '$4',
  height: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
export type StateVariantProps = VariantProps<typeof StyledState>
