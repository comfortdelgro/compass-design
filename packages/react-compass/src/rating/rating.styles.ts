import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledRatingComponent = styled('div', {
  display: 'inline-flex',
  gap: '8px',
  '.rating': {
    width: '60px',
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    lineHeight: '30px',
    backgroundColor: '$background',
    borderColor: '$white',
    boxShadow:
      '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
    color: '$primaryText',
    '&.active': {
      boxShadow:
        '0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)',
      color: '$info',
      borderColor: '$infoBg',
      backgroundColor: '$infoBg',
      '&:hover:enabled': {
        borderColor: '$infoBg',
        backgroundColor: '$infoBg',
      },
      '.children > .emo-icons': {
        color: '$info',
      },
    },
    '&:focus-visible': {
      outline: '2px solid $cdgBlue60',
    },
    '&:hover:enabled': {
      backgroundColor: '$white',
      borderColor: '$white',
    },
    '.children': {
      display: 'flex',
      alignItems: 'center',
    },
    '.children > .emo-icons': {
      width: '2rem',
      height: '2rem',
      color: '$primaryText',
    },
    '& div': {
      justifyContent: 'center',
    },
  },
})
export type RatingVariantProps = VariantProps<typeof StyledRatingComponent>
