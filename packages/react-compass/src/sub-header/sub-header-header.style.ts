import {styled} from '../theme'
import {StyledSubHeaderDescription} from './sub-header-description.style'
import {StyledSubHeaderSubtitle} from './sub-header-subtitle.style'
import {StyledSubHeaderTitle} from './sub-header-title.style'

export const StyledSubHeaderHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '$3',
  padding: '$4 0',

  [`& ${StyledSubHeaderTitle}`]: {
    fontSize: '$header3',
    lineHeight: '36px',
    color: '$gray110',
  },

  [`& ${StyledSubHeaderSubtitle}`]: {
    color: '$gray70',
  },

  [`& ${StyledSubHeaderDescription}`]: {
    lineHeight: '24px',
    fontSize: '$body2',
    color: '$gray80',
  },
})
