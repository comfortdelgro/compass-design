import {styled} from '../../theme'
import {VariantProps} from '../../utils/stitches.types'

export const StyledUploadIcon = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // styling
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
})

export const StyledOrLetter = styled('a', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // styling
  fontFamily: '$sans',
  fontWeight: '$semibold',
  fontSize: '$label3',
  lineHeight: '$normal',
  color: '$gray50',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  pointerEvents: 'none',
})

export const StyledUploadError = styled('a', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // upload placeholder styling
  fontFamily: '$sans',
  fontWeight: '$medium',
  fontSize: '$label2',
  lineHeight: '$normal',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  color: '#E31617',
})

export const StyledUploadMaxSize = styled('a', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // upload placeholder styling
  fontFamily: '$sans',
  fontWeight: '$medium',
  fontSize: '$label2',
  lineHeight: '$normal',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  color: '#B4B4B4',
})

export const StyledUploadFileName = styled('h2', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // upload placeholder styling
  fontFamily: '$sans',
  fontSize: '$label1',
  lineHeight: '$normal',
  color: '#333333',
  width: '85%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const StyledUploadPlaceholder = styled('h2', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // upload placeholder styling
  fontFamily: '$sans',
  fontSize: '$label1',
  lineHeight: '$normal',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#B4B4B4',
})

export const StyledUploadContent = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  //upload button styling
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '$body3',
  fontWeight: '$semibold',
  pointerEvents: 'none',
})

export const StyledUploadButton = styled('label', {
  // reset
  appearance: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  background: 'transparent',

  // upload button styling
  height: '100%',
  padding: '$2 $5',
  backgroundColor: '#FFFFFF',
  border: '1px solid $cdgBlue',
  color: '$cdgBlue',
  borderRadius: '$md',
  fontWeight: '$bold',
  fontSize: '$label2',
  fontFamily: '$sans',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2_5',
  cursor: 'pointer',
})

export const StyledUploadContainer = styled('div', {
  // reset
  appearance: 'none',
  //border: 'none',
  boxSizing: 'border-box',
  margin: '0px',

  //container styling
  width: '100%',
  border: '1px dashed #E6E6E6',
  background: '$primaryBg',
  padding: '$2',
  overflow: 'hidden',
  borderRadius: '$lg',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  variants: {
    variant: {
      field: {},
      area: {
        flexDirection: 'column-reverse',
      },
    },
  },
})

export const StyledUploadWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',
  minWidth: '$96',

  // wrapper styling
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '$2',
  '& input': {
    display: 'none',
  },

  variants: {
    variant: {
      field: {},
      area: {},
    },
  },
})

export type UploadVariantProps = VariantProps<typeof StyledUploadWrapper>
