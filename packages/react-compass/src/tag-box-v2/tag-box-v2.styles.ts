import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledNewTagButton = styled('button', {
  // reset
  appearance: 'none',
  //border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  // button styling
  backgroundColor: '$background',
  border: '1px dashed #605E5C',
})

export const StyledNewTagInput = styled('input', {
  // reset
  appearance: 'none',
  //border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  overflow: 'hidden',
  background: 'transparent',

  // tag input styling
  border: 'none',
  '&::placeholder': {
    color: 'rgb(210, 208, 206)',
  },
  '&:focus': {
    border: '2px solid #0142AF',
    borderRadius: '$md',
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
  fontWeight: 'bold',
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
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '$gray30',
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
          borderColor: '$red50',
        },
      },
      false: {},
    },
  },
})

export type TagBoxV2VariantProps = VariantProps<typeof StyledTagBoxV2>
