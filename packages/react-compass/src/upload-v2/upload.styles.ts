import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

//.upload-error
export const StyledUploadError = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // size styling
  fontWeight: '$medium',
  fontSize: '$label2',
  lineHeight: '$normal',
  color: '#e31617',
  marginTop: '$1',
})

export const StyledUploadSize = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // size styling
  fontWeight: '$medium',
  fontSize: '$label2',
  lineHeight: '',
  color: '#b4b4b4',
})

export const StyledUploadInput = styled('div', {
  // reset
  appearance: 'none',
  //border: 'none',
  boxSizing: 'border-box',
  //margin: '0px',
  padding: '0px',
  background: 'transparent',

  // title styling
  position: 'relative',
  display: 'flex',
  border: '1px solid #e6e6e6',
  borderRadius: '$lg',
  overflow: 'hidden',
  alignItems: 'center',
  margin: '4px 0',

  '& input': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: '0',
    zIndex: '1',
    cursor: 'pointer',
  },

  '& span:nth-child(1)': {
    display: 'flex',
    padding: '$3',
    borderRight: '1px solid #e6e6e6',
    fontWeight: '$medium',
    fontSize: '$label1',
    lineHeight: '$normal',
    backgroundColor: '#f7f8f9',
  },
  '& span:nth-child(2)': {
    padding: '12px 16px',
    color: '#b4b4b4',
    fontWeight: '$medium',
    fontSize: '$label1',
    lineHeight: '$normal',
    minWidth: '$57',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: '40ch',
    textOverflow: 'ellipsis',
  },
  '& span:nth-child(2)[data-file="true"]': {
    color: '#333333',
  },
  '& [data-invalid="true"]': {
    borderColor: 'red',
  },
  '& [data-invalid="true"] span:nth-child(1)': {
    borderColor: 'red',
  },
})
export const StyledUploadTitle = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // title styling
  fontWeight: '$medium',
  fontSize: '$label1',
  lineHeight: '$normal',
  color: '#3e3e3e',
})

export const StyledUploadWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // wrapper styling
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export type UploadVariantProps = VariantProps<typeof StyledUploadWrapper>

//.upload-error
export const StyledUploadError = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // size styling
  fontWeight: '$medium',
  fontSize: '$label2',
  lineHeight: '$normal',
  color: '#e31617',
  marginTop: '$1',
})

export const StyledUploadSize = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // size styling
  fontWeight: '$medium',
  fontSize: '$label2',
  lineHeight: '',
  color: '#b4b4b4',
})

export const StyledUploadInput = styled('div', {
  // reset
  appearance: 'none',
  //border: 'none',
  boxSizing: 'border-box',
  //margin: '0px',
  padding: '0px',
  background: 'transparent',

  // title styling
  position: 'relative',
  display: 'flex',
  border: '1px solid #e6e6e6',
  borderRadius: '$lg',
  overflow: 'hidden',
  alignItems: 'center',
  margin: '4px 0',

  '& input': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: '0',
    zIndex: '1',
    cursor: 'pointer',
  },

  '& span:nth-child(1)': {
    display: 'flex',
    padding: '$3',
    borderRight: '1px solid #e6e6e6',
    fontWeight: '$medium',
    fontSize: '$label1',
    lineHeight: '$normal',
    backgroundColor: '#f7f8f9',
  },
  '& span:nth-child(2)': {
    padding: '12px 16px',
    color: '#b4b4b4',
    fontWeight: '$medium',
    fontSize: '$label1',
    lineHeight: '$normal',
    minWidth: '$57',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: '40ch',
    textOverflow: 'ellipsis',
  },
  '& span:nth-child(2)[data-file="true"]': {
    color: '#333333',
  },
  '& [data-invalid="true"]': {
    borderColor: 'red',
  },
  '& [data-invalid="true"] span:nth-child(1)': {
    borderColor: 'red',
  },
})
export const StyledUploadTitle = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // title styling
  fontWeight: '$medium',
  fontSize: '$label1',
  lineHeight: '$normal',
  color: '#3e3e3e',
})

export const StyledUploadWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // wrapper styling
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export type UploadVariantProps = VariantProps<typeof StyledUploadWrapper>
