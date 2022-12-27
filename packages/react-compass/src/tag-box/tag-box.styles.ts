import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTagBox = styled('div', {
  width: '100%',
  label: {
    fontSize: '$body3',
    fontWeight: '$semibold',
    display: 'inline-block',
    marginBottom: '$2',
    width: '100%',
  },
})

export const StyledBoxWrapper = styled('div', {
  width: '100%',
  backgroundColor: '$background',
  minHeight: '$32',
  padding: '$2 $4',
  borderRadius: '$md',
  display: 'flex',
  gap: '$4',
  div: {
    fontSize: '$label2',
    fontWeight: '$semibold',
    backgroundColor: '#F5F5F6',
    padding: '$2',
    height: 'min-content',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '$md',
    span: {
      marginRight: '$4',
    },
    svg: {
      cursor: 'pointer',
    },
  },
})

export const StyledTagBoxActionWrapper = styled('div', {
  width: '100%',
  marginTop: '$2',
  fontSize: '$label3',
  color: '$gray60',
  fontWeight: '$semibold',
  display: 'flex',
  alignItems: 'center',
  span: {
    flexGrow: 1,
  },
})

export const StyledTagBoxAction = styled('div', {
  width: 'max-content',
  height: 'min-content',
})

export type TagBoxVariantProps = VariantProps<typeof StyledTagBox>
