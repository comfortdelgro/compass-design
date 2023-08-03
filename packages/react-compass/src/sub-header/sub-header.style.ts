import {styled} from '../theme'
import {StyledSubHeaderDescription} from './sub-header-description.style'
import {StyledSubHeaderHeader} from './sub-header-header.style'
import {StyledSubHeaderTitle} from './sub-header-title.style'

export const StyledSubHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  [`& ${StyledSubHeaderHeader}`]: {
    padding: 0,
  },

  [`& ${StyledSubHeaderTitle}`]: {
    color: '#333333 !important',
    fontSize: '$header5 !important',
    lineHeight: '$normal !important',
  },

  [`& ${StyledSubHeaderDescription}`]: {
    fontSize: '$label1 !important',
    color: '$gray70 !important',
    margin: '0 !important',
  },
})
