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
  color: '$primaryText',
})

export const StyledCheckboxInput = styled('input', {
  position: 'absolute',
  opacity: 0,
  height: 0,
  width: 0,
  cursor: 'pointer',
})

//mark for merging point
export const StyledCheckboxBox = styled('span', {
  height: '$4',
  width: '$4',
  backgroundColor: '$whiteText',
  borderWidth: '$light',
  borderStyle: 'solid',
  borderColor: '$activeBorder',
  borderRadius: '$md',
  transition: '$button',

  variants: {
    isDarkTheme: {
      true: {
        backgroundColor: '$gray20',
        '&:hover': {
          backgroundColor: '$gray50',
        },
      },
      false: {},
    },

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
  compoundVariants: [
    {
      disabled: true,
      isDarkTheme: true,
      css: {
        backgroundColor: '$gray10',
        '&:hover': {
          backgroundColor: '$gray10',
        },
      },
    },
  ],
})

//add a different styles for checkbox table
export const StyledTableCheckboxBox = styled('span', {
  display: 'block', // using display block
  height: '$4',
  width: '$4',
  //add background
  backgroundColor: '$whiteText',
  borderWidth: '$light',
  borderStyle: 'solid',
  borderColor: '$activeBorder',
  borderRadius: '$md',
  transition: '$button',
  //mark for not disappear code
  variants: {
    rounded: {
      true: {
        borderRadius: '$full',
      },
    },
    // a different markup
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

export const StyledCheckboxLabel = styled('label', {
  position: 'relative',
  fontSize: '$label1',
  cursor: 'pointer',
  userSelect: 'none',
  borderRadius: '3px',
  whiteSpace: 'nowrap',
  minHeight: '$5',
  minWidth: '$5',
  padding: '2px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$3',
  '&:focus-within': {
    outline: '2px solid $cdgBlue60',
  },
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
  [`${StyledCheckboxInput}:checked ~ ${StyledTableCheckboxBox}`]: {
    borderColor: '$cdgBlue',
    backgroundColor: '$cdgBlue',

    [`${StyledCheckboxCheckmark}`]: {
      display: 'flex',
    },
  },
  [`${StyledCheckboxInput}:disabled:checked ~ ${StyledTableCheckboxBox}`]: {
    borderColor: '$gray50',
    backgroundColor: '$gray50',
  },

  variants: {
    isDarkTheme: {
      true: {
        [`${StyledCheckboxInput}:checked ~ ${StyledCheckboxBox}`]: {
          borderColor: '$cdgBlue120',
          backgroundColor: '$cdgBlue120',
        },
        [`${StyledCheckboxCheckmark}`]: {
          color: '#0D2972',
        },
      },
      false: {},
    },
    variant: {
      h5: {
        maxWidth: '343px',
        padding: '$4',
        borderRadius: '$xl',
        whiteSpace: 'normal',
      },
      default: {},
      rounded: {},
    },
  },
})

export type CheckboxVariantProps = VariantProps<typeof StyledCheckboxLabel>
