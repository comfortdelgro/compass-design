import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

/**
 * Variants for files upload and their api:
 * 1. clickSingle
 * - buttonTitle
 * - description (uploaded file shows here)
 * - deleteIcon & invalidIcon & successIcon & downloadIcon & loadingIcon
 * - fileType
 * - maxSize
 *
 * 2. clickMultiple
 * - buttonTitle
 * - description (uploaded files don't show here, they show in 'UploadedFileDisplay' component)
 * - deleteIcon & invalidIcon & successIcon & downloadIcon & loadingIcon
 * - fileType
 * - maxSize
 *
 * 3. drop
 *
 */

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
  width: '69.725%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const StyledUploadButton = styled('button', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  // upload button styling
  width: '30.275%',
  backgroundColor: '#F7F8F9',
  fontFamily: '$sans',
  fontSize: '$label1',
  fontWeight: '$semibold',
  lineHeight: '$normal',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRight: '1px solid #E6E6E6',
  '&:hover': {
    backgroundColor: '$gray20',
  },
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
  width: '$81_75',
  height: '$11',
  border: '1px solid #E6E6E6',
  borderRadius: '0px 8px 8px 0px',
  display: 'flex',
  gap: '0px',

  variants: {
    variant: {
      clickSingle: {},
      clickMultiple: {},
      drop: {},
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

  // wrapper styling
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '$2',

  variants: {
    variant: {
      clickSingle: {},
      clickMultiple: {},
      drop: {},
    },
  },
})

export type UploadVariantProps = VariantProps<typeof StyledUploadWrapper>
