import {styled} from '../theme'
import {StyledPageHeaderDescription} from './page-header-description.style'
import {StyledPageHeaderSubtitle} from './page-header-subtitle.style'
import {StyledPageHeaderTitle} from './page-header-title.style'

export const StyledPageHeaderHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '$3',
  padding: '$4 0',

  [`& ${StyledPageHeaderTitle}`]: {
    fontSize: '$header3',
    lineHeight: '36px',
    color: '$gray110',
  },

  [`& ${StyledPageHeaderSubtitle}`]: {
    color: '$gray70',
  },

  [`& ${StyledPageHeaderDescription}`]: {
    lineHeight: '24px',
    fontSize: '$body2',
    color: '$gray80',
  },
})
