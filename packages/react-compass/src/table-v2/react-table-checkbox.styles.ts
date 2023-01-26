import {styled} from '../theme'

export const StyledReactCheckboxInput = styled('input', {
  cursor: 'pointer',
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
