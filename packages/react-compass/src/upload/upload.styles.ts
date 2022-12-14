import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

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
  borderLeft: '1px solid #E6E6E6',
  paddingLeft: '$4',
  fontSize: '$body2',
  fontWeight: '$semibold',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  variants: {
    fileSelected: {
      true: {
        color: '#333333',
      },
      false: {
        color: '#B4B4B4',
      },
    },
  },
})

export const StyledUploadButton = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // upload button styling
  width: '30.275%',
  height: '100%',
  // borderRadius: '4px 0px 0px 4px',
  backgroundColor: '#F7F8F9',
  fontFamily: '$sans',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '1px 0 0 0 #E6E6E6',
})

export const StyledUploadContainer = styled('div', {
  // reset
  appearance: 'none',
  //border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  //container styling
  width: '100%',
  height: '$11',
  border: '1px solid #E6E6E6',
  overflow: 'hidden',
  borderRadius: '$lg',
  display: 'flex',
  gap: '0px',
})

export const StyledBrowseFile = styled('label', {
  // reset
  appearance: 'none',
  //border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  background: 'transparent',

  //container styling
  width: 'min-content',
  flexShrink: 0,
  padding: '0 $3',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$label1',
  fontWeight: '$semibold',
  lineHeight: '$normal',
  cursor: 'pointer',
  backgroundColor: '$gray10',
  span: {
    width: 'max-content',
  },
  '&:hover': {
    backgroundColor: '$gray20',
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
  boxShadow: '1px solid #E6E6E6',
  minWidth: '$96',

  // wrapper styling
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '$2',
  '& input': {
    display: 'none',
  },
})

export type UploadVariantProps = VariantProps<typeof StyledUploadWrapper>
