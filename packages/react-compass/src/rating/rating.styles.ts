import { styled } from '../theme'
import { VariantProps } from '../utils/stitches.types'

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
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    boxShadow:
      '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
    color: '#605e5c',
    '&.active': {
      boxShadow:
        '0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)',
      color: '#009eda',
      borderColor: '#ccecf8',
      backgroundColor: '#ccecf8',
      '&:hover': {
        borderColor: '#ccecf8 !important',
        backgroundColor: '#ccecf8 !important',
      },
    },
    '&:hover': {
      backgroundColor: '#ffffff !important',
      borderColor: '#ffffff !important',
    },
    '.children': {
      display: 'flex',
      alignItems: 'center',
    },
  },
})
export type RatingVariantProps = VariantProps<typeof StyledRatingComponent>
