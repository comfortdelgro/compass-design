import {styled} from '../theme'

export const StyledDividerRootConfig = {
  margin: 0, // Reset browser default style.
  width: '100%',
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: '$$color',
  borderBottomWidth: 'thin',
  variants: {
    absolute: {
      true: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
      },
      false: {},
    },
    flexItem: {
      true: {
        alignSelf: 'stretch',
        height: 'auto',
      },
      false: {},
    },
    hasChildren: {
      true: {
        display: 'flex',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        border: 0,
        '&::before, &::after': {
          position: 'relative',
          width: '100%',
          borderTop: 'thin solid $$color',
          top: '50%',
          content: '""',
          transform: 'translateY(50%)',
        },
      },
      false: {},
    },
    variant: {
      inset: {
        marginLeft: 72,
      },
      middle: {},
      fullWidth: {},
    },
    orientation: {
      vertical: {
        height: '100%',
        borderBottomWidth: 0,
        borderRightWidth: 'thin',
      },
      horizontal: {},
    },
    textAlign: {
      center: {},
      left: {},
      right: {},
    },
  },
  compoundVariants: [
    {
      variant: 'middle',
      orientation: 'horizontal',
      css: {
        marginLeft: '1rem',
        marginRight: '1rem',
      },
    },
    {
      variant: 'middle',
      orientation: 'vertical',
      css: {
        marginTop: '1rem',
        marginBottom: '1rem',
      },
    },
    {
      hasChildren: true,
      orientation: 'vertical',
      css: {
        flexDirection: 'column',
        '&::before, &::after': {
          height: '100%',
          top: '0%',
          left: '50%',
          borderTop: 0,
          borderLeft: 'thin solid $$color',
          transform: 'translateX(0%)',
        },
      },
    },
    {
      textAlign: 'right',
      orientation: 'horizontal',
      css: {
        '&::before': {
          width: '90%',
        },
        '&::after': {
          width: '10%',
        },
      },
    },
    {
      textAlign: 'left',
      orientation: 'horizontal',
      css: {
        '&::before': {
          width: '10%',
        },
        '&::after': {
          width: '90%',
        },
      },
    },
  ],
}

export const DividerWrapper = styled('span', {
  display: 'inline-block',
  paddingLeft: '0.6rem',
  paddingRight: '0.6rem',
  variants: {
    orientation: {
      vertical: {
        paddingTop: '0.6rem',
        paddingBottom: '0.6rem',
      },
      horizontal: {},
    },
  },
})
