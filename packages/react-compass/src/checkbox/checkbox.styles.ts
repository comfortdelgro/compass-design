import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledCheckboxWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  lineHeight: 1.15,
})

export const StyledCheckboxInput = styled('input', {
  position: 'absolute',
  opacity: 0,
  height: 0,
  width: 0,
  cursor: 'pointer',
})

export const StyledCheckboxBox = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '$4',
  width: '$4',
  backgroundColor: '$whiteText',
  borderWidth: '$light',
  borderStyle: 'solid',
  borderColor: '$activeBorder',
  borderRadius: '$md',
  transition: '$button',

  variants: {
    rounded: {
      true: {
        borderRadius: '$full',
      },
    },

    disabled: {
      true: {
        backgroundColor: '$whiteText',
        borderColor: '$gray50',
      },
    },
  },
})
export const StyledTableCheckboxBox = styled('span', {
  display: 'block',
  height: '$4',
  width: '$4',
  backgroundColor: '$whiteText',
  borderWidth: '$light',
  borderStyle: 'solid',
  borderColor: '$activeBorder',
  borderRadius: '$md',
  transition: '$button',

  variants: {
    rounded: {
      true: {
        borderRadius: '$full',
      },
    },

    disabled: {
      true: {
        backgroundColor: '$whiteText',
        borderColor: '$gray50',
      },
    },
  },
})

export const StyledCheckboxCheckmark = styled('span', {
  display: 'none',
  color: '$whiteText',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',

  '.icon': {
    width: '$3',
    height: '$3',
  },
})

export const StyledCheckboxLabelContent = styled('span', {
  marginLeft: '$7', // checkbox area + padding
})

export const StyledCheckboxLabel = styled('label', {
  display: 'block',
  position: 'relative',
  fontSize: '$label1',
  cursor: 'pointer',
  userSelect: 'none',

  [`${StyledCheckboxInput}:checked ~ ${StyledCheckboxBox}`]: {
    borderColor: '$cdgBlue',
    backgroundColor: '$cdgBlue',

    [`${StyledCheckboxCheckmark}`]: {
      display: 'flex',
    },
  },

  [`${StyledCheckboxInput}:disabled:checked ~ ${StyledCheckboxBox}`]: {
    borderColor: '$gray50',
    backgroundColor: '$gray50',
  },
})

export type CheckboxVariantProps = VariantProps<typeof StyledCheckboxLabel>
