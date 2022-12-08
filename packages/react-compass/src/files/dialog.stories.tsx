import {styled} from '../theme'

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

export const StyledWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  background: 'transparent',

  //files
  width: '$81_75',
  display: 'flex',
  flexDirection: 'column',
  gap: '0px',
})
