import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTagBox = styled('div', {
  width: '100%',
})

export const StyledBoxWrapper = styled('div', {
  width: '100%',
  display: 'flex',
})

export const StyledBoxWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  label: {
    fontSize: '$body3',
    fontWeight: '$semibold',
    display: 'inline-block',
  },
  variants: {
    labelPosition: {
      top: {
        flexDirection: 'column',
        gap: '$2',
      },
      left: {
        flexDirection: 'row',
        gap: '$8',
        label: {
          maxWidth: '33%',
          flexShrink: 0,
          width: 'max-content',
        },
      },
    },
  },
})

export const StyledIcon = styled('div', {
  marginTop: '$1',
  width: '$6',
  height: '$6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  svg: {
    width: '$4',
    height: '$4',
  },
  variants: {
    labelPosition: {
      top: {
        flexDirection: 'column',
        gap: '$2',
      },
      left: {
        flexDirection: 'row',
        gap: '$8',
        label: {
          maxWidth: '33%',
          flexShrink: 0,
          width: 'max-content',
        },
      },
    },
  },
})

export const StyledIcon = styled('div', {
  marginTop: '$1',
  width: '$6',
  height: '$6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  svg: {
    width: '$4',
    height: '$4',
  },
})

export const StyledBox = styled('div', {
  flexGrow: 1,
export const StyledBox = styled('div', {
  flexGrow: 1,
  backgroundColor: '$background',
  border: '1px solid #EDEBE9',
  border: '1px solid #EDEBE9',
  padding: '$2 $4',
  borderRadius: '$md',
  display: 'flex',
  gap: '$4',
  variants: {
    collaspable: {
      true: {
        // minHeight: '0',
      },
      false: {
        minHeight: '$32',
      },
    },
  },
})

export const StyledBoxContent = styled('div', {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '$4',
  input: {
    fontSize: '$body3',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    width: '25%',
    height: '$7_5',
    padding: 0,
  },
})

export const StyledItem = styled('div', {
  fontSize: '$label2',
  fontWeight: '$semibold',
  backgroundColor: '#F5F5F6',
  padding: '$2',
  gap: '$3',
  height: 'min-content',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$md',
  svg: {
    width: '$3',
    height: '$3',
  },
  '&:hover': {
    backgroundColor: '#EAEBEB',
  },
  variants: {
    isDisabled: {
      true: {
        background: '#F0F0F0',
        opacity: 0.4,
      },
      false: {
        'tag-box-x-icon': {
          cursor: 'pointer',
        },
      },
    },
    isError: {
      true: {
        border: '1px solid #A4262C',
      },
    isError: {
      true: {
        border: '1px solid #A4262C',
      },
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
