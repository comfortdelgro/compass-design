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

export const StyledHelperText = styled('div', {
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

  //upload button styling
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  borderLeft: '1px solid $divider',
  padding: '0 $4',
  fontSize: '$body3',
  fontWeight: '$semibold',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
  p: {
    margin: 0,
    padding: 0,
    wordWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

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
  border: '1px solid $divider',
  overflow: 'hidden',
  borderRadius: '$lg',
  display: 'flex',
  gap: '0px',
  transition: 'border 200ms ease-in-out',

  '&:focus-within': {
    border: '1px solid $cdgBlue',
  },
})

export const StyledBrowseFile = styled('button', {
  // reset
  appearance: 'none',
  border: 'none',
  //border: 'none',
  boxSizing: 'border-box',
  margin: '0px',

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
  span: {
    width: 'max-content',
  },

  '&:focus-visible': {
    outline: 'none',
  },
})

export const StyledLabel = styled('label', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  background: 'transparent',

  //styling
  width: '100%',
  height: '$4_5',
  fontFamily: '$sans',
  fontSize: '$label1',
  lineHeight: '$normal',
  fontWeight: '$semibold',
  '& .cdg-isRequired-Sign': {
    color: '#A4262C',
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
  boxShadow: '1px solid $divider',
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
    isDisabled: {
      true: {
        [`${StyledBrowseFile}`]: {
          backgroundColor: '$gray40',
          color: '$gray70',
          cursor: 'not-allowed',
          border: 'none',
        },
        [`${StyledUploadContent}`]: {
          backgroundColor: '$gray20',
          color: '$gray40',
          cursor: 'not-allowed',
          border: 'none',
        },
      },
    },
    isDarkTheme: {
      true: {
        [`${StyledBrowseFile}`]: {
          backgroundColor: '$cdgBlue120',
          color: '$cdgBlue40',
        },
        [`${StyledUploadContent}`]: {
          background: '$gray20',
        },
      },
      false: {
        [`${StyledBrowseFile}`]: {
          backgroundColor: '$gray10',
          '&:hover': {
            backgroundColor: '$gray20',
          },
        },
        [`${StyledUploadContent}`]: {
          background: 'transparent',
        },
      },
    },
  },
})

export type UploadVariantProps = VariantProps<typeof StyledUploadWrapper>
