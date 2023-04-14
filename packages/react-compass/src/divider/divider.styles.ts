import {styled} from '../theme'

export const StyledDividerHr = styled('hr', {
  margin: 0,
  border: 'none',
  backgroundColor: '#0000001f',
  variants: {
    orientation: {
      vertical: {
        width: '1px',
        height: '100%',
      },
      horizontal: {
        width: '100%',
        height: '1px',
      },
    },
  },
})

export const StyledDivider = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    orientation: {
      vertical: {
        flexDirection: 'column',
        height: '100%',
        width: 'fit-content',
      },
      horizontal: {
        flexDirection: 'row',
        width: '100%',
      },
    },
  },
})

export const StyledDividerLine = styled('div', {
  backgroundColor: '#0000001f',
  flexShrink: 1,
  variants: {
    orientation: {
      vertical: {
        height: '50%',
        width: '1px',
      },
      horizontal: {
        height: '1px',
        width: '50%',
      },
    },
  },
})

export const StyledDividerContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    orientation: {
      vertical: {
        margin: '10px 0',
      },
      horizontal: {
        margin: '0 10px',
      },
    },
  },
})
