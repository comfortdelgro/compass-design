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
        gridTemplateColumns: '1fr',
      },
      2: {
        gridTemplateColumns: '1fr 1fr',
      },
      3: {
        gridTemplateColumns: '1fr 1fr 1fr',
      },
    },
  },
})
export const StyledFormLayoutGroup = styled('div', {
  width: '100%',
})
export const StyledFormLayoutExplaination = styled('div', {
  width: '100%',
})
export const StyledFormExplainationTitle = styled('div', {
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  color: '$primaryText',
})
export const StyledFormExplainationDescription = styled('div', {
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '21px',
  color: '$gray70',
})
