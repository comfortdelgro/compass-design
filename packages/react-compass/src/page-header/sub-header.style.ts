import {styled} from '../theme'
import {StyledPageHeaderDescription} from './page-header-description.style'
import {StyledPageHeaderHeader} from './page-header-header.style'
import {StyledPageHeaderTitle} from './page-header-title.style'

export const StyledSubHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  [`& ${StyledPageHeaderHeader}`]: {
    padding: 0,
  },

  [`& ${StyledPageHeaderTitle}`]: {
    color: '#333333 !important',
    fontSize: '$header5 !important',
    lineHeight: '$normal !important',
  },

  [`& ${StyledPageHeaderDescription}`]: {
    fontSize: '$label1 !important',
    color: '$gray70 !important',
    margin: '0 !important',
  },
})
