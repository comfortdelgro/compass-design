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
  //borderRadius: '0px 4px 4px 0px',
  width: '69.725%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  fontSize: '$label1',
  fontWeight: '$semibold',
  lineHeight: '$normal',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '1px 0 0 0 #E6E6E6',
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
  boxShadow: '0 0 0 1px #E6E6E6',
  overflow: 'hidden',
  borderRadius: '$lg',
  display: 'flex',
  gap: '0px',
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
  '& input': {
    display: 'none',
  },

  variants: {
    variant: {
      clickSingle: {},
      clickMultiple: {},
      dropPrimary: {
        [`${StyledUploadContainer}`]: {
          height: '$12_5',
          boxShadow: 'none',
          border: '1px dashed #8A8886',
          cursor: 'pointer',
          backgroundColor: '$gray10',
          '&:hover': {
            backgroundColor: '$gray20',
          },
          position: 'relative',
          '& input': {
            display: 'block',
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
          },
        },
        [`${StyledUploadButton}`]: {
          width: '50%',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        [`${StyledUploadContent}`]: {
          width: '50%',
          display: 'flex',
          justifyContent: 'flex-start',
        },
      },
      dropSecondary: {},
    },
  },
})

export type UploadVariantProps = VariantProps<typeof StyledUploadWrapper>
