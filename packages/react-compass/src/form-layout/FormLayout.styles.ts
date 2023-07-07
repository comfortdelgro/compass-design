import {styled} from '../theme'

export const StyledFormLayout = styled('form', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '$4',
})
export const StyledFormLayoutRow = styled('div', {
  display: 'grid',
  gap: '$4',
  variants: {
    columns: {
      1: {
        gridTemplateColumns: 'auto',
      },
      2: {
        gridTemplateColumns: 'auto auto',
      },
      3: {
        gridTemplateColumns: 'auto auto auto',
      },
    },
  },
})
