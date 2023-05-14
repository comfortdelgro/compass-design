import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTagCloseIcon = styled(FontAwesomeIcon, {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  //padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  //styling
  color: '#000000',
  cursor: 'pointer',
  fontWeight: 'bold',
  padding: '0.125rem 0',
  marginLeft: '1em',
})

export const StyledTagContent = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  //styling
  color: '#000000',
  fontWeight: '$bold',
})

export const StyledTagInput = styled('input', {
  // reset
  appearance: 'none',
  outline: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  //styling
  color: '#000000',
  fontWeight: '$bold',
})

export const StyledTagContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  //margin: '0px',
  //padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  // button styling
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  borderRadius: '$md',
  padding: '0.5rem 1rem',
  margin: '0.5em',
  backgroundColor: 'rgba(0,0,0,.045)',
  width: 'fit-content',
})

// create StyledButtonContainer to center button horizontally
export const StyledButtonContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  // styling
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
})

export const StyledNewTagButton = styled('button', {
  // reset
  appearance: 'none',
  //border: 'none',
  boxSizing: 'border-box',
  // margin: '0px',
  // padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  // button styling
  backgroundColor: '$background',
  border: '1px dashed #605E5C',
  margin: '0.5em',
  padding: '0.5rem 1rem',
  height: '2.5rem',
  borderRadius: '$lg',
  fontSize: '1em',
  fontWeight: '500',
})

export const StyledNewTagInput = styled('input', {
  // reset
  appearance: 'none',
  outline: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  // tag input styling
  height: '2rem',
  maxWidth: '90%',
  '&::placeholder': {
    color: 'rgb(210, 208, 206)',
    paddingLeft: '3px',
  },
  '&:focus': {
    border: '2px solid #0142AF',
    borderRadius: '$md',
  },
  fontSize: '0.875rem',
  resize: 'none',
  variants: {
    isEmpty: {
      false: {
        margin: '0.5rem 0.75rem',
      },
      true: {},
    },
  },
})

export const StyledLabel = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  // styling
  cursor: 'pointer',
  fontWeight: '$semibold',
  textAlign: 'center',
  fontSize: '$lable1',
  lineHeight: '$normal',
})

export const StyledContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  //padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  // styling
  fontSize: '0.75rem',
  borderRadius: '4px',
  width: '100%',
  padding: '0.5em 1em',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgb(237, 235, 233)',
  minHeight: '7.75rem',
})

export const StyledTagBoxV2 = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  overflow: 'hidden',
  background: 'transparent',
  variants: {
    isErrored: {
      true: {
        [`${StyledContainer}`]: {
          borderColor: 'red',
        },
      },
      false: {},
    },
    isDisabled: {
      true: {
        [`${StyledContainer}`]: {
          opacity: 0.5,
          pointerEvents: 'none',
          backgroundColor: 'lightgray',
        },
      },
      false: {},
    },
  },
})

export type TagBoxV2VariantProps = VariantProps<typeof StyledTagBoxV2>
