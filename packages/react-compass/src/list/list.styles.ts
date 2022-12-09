import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

export const StyledList = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '$4',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '$md',
  cursor: 'pointer',
  outline: 'none',

  '&:focus-visible': {
    outline: '$cdgBlue40 solid 2px',
  },

  '& .list-left-info': {
    display: 'flex',
    alignItems: 'center',
  },

  '& .list-left-side': {
    display: 'flex',
    gap: '$6',
    alignItems: 'center',
  },

  '& .list-left-side svg': {
    width: '22px',
    height: '22px',
  },

  '& .list-text-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },

  '& .list-text-title': {
    fontSize: '$header4',
    fontWeight: '$semibold',
    margin: 0,
  },

  '& .list-text-description': {
    fontSize: '14px',
  },

  '& .list-right-side': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
  },

  '& .list-right-side-text': {
    fontSize: '14px',
  },

  '& .list-right-side svg': {
    width: '14px',
    height: '24px',
  },

  variants: {
    variant: {
      item: {
        backgroundColor: 'transparent',

        '&:hover .list-text-title, &:hover .list-text-description, &:hover .list-right-side-text, &:hover .list-right-side svg, &:hover .list-left-info svg':
          {
            color: '$cdgBlue40',
          },

        '&.pressed .list-text-title, &.pressed .list-text-description, &.pressed .list-right-side-text, &.pressed .list-right-side svg, &.pressed .list-left-info svg ':
          {
            color: '$cdgBlue100',
          },

        '& .list-text-title': {
          color: '$gray80',
        },

        '& .list-text-description': {
          color: '$gray80',
        },

        '& .list-right-side-text': {
          color: '$gray80',
        },

        '& .list-right-side svg': {
          color: '$gray80',
        },
      },
      interactive: {
        backgroundColor: 'white',

        '&:hover': {
          backgroundColor: '$cdgBlue10',
        },

        '&.pressed': {
          backgroundColor: '$cdgBlue100',
        },

        '& .list-text-title': {
          color: '#3B3A39',
        },

        '&.pressed .list-text-title': {
          color: '$whiteText',
        },

        '& .list-text-description': {
          color: '$gray80',
        },

        '&.pressed .list-text-description': {
          color: '$whiteText',
        },

        '& .list-right-side-text': {
          color: '#3B3A39',
        },

        '&.pressed .list-right-side-text': {
          color: '$whiteText',
        },

        '&.pressed .list-right-side svg': {
          color: '$whiteText',
        },

        '&.pressed .list-left-info svg': {
          color: '$whiteText',
        },
      },
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',

        '&:focus-visible': {
          outline: 'none',
        },

        // interactive

        '&.interactive': {
          backgroundColor: '#E6E6E6 !important',
        },

        '&.interactive:hover': {
          backgroundColor: '#E6E6E6',
        },
        '&.interactive.pressed .list-text-title': {
          color: '#3B3A39',
        },
        '&.interactive.pressed .list-text-description': {
          color: '$gray80',
        },
        '&.interactive.pressed .list-right-side svg': {
          color: '#3B3A39',
        },
        '&.interactive.pressed .list-right-side-text': {
          color: '$gray90 !important',
        },

        //item

        '&.item .list-text-title, &.item .list-text-description, &.item .list-right-side-text, &.item .list-right-side svg':
          {
            color: '$gray60 !important',
          },
      },
    },
    size: {
      sm: {
        padding: '10px 16px',

        '& .list-left-info': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '100%',
          backgroundColor: '$background',
        },

        '& .list-left-info svg': {
          width: '14px',
          height: '14px',
          color: '$gray60',
        },

        '& .list-text-title': {
          fontSize: '12px',
          fontWeight: '$normal',
          color: '$gray60',
        },

        '& .list-text-description': {
          fontSize: '14px',
          color: '$gray70',
        },

        '& .list-text-wrapper': {
          gap: '8px',
        },

        //hover

        '&:hover .list-left-info': {
          backgroundColor: '$cdgBlue100',
        },

        '&:hover .list-left-info svg': {
          color: '$whiteText',
        },

        '&:hover .list-text-title': {
          color: '$cdgBlue60',
        },

        //active

        '&.pressed .list-left-info': {
          backgroundColor: '$background !important',
        },

        '&.pressed .list-left-info svg': {
          color: '$gray60 !important',
        },

        '&.pressed .list-text-title': {
          color: '$whiteText',
        },

        //disabled

        '&.disabled .list-text-title': {
          color: '$gray70 !important',
        },

        '&.disabled .list-text-description': {
          color: '$gray70 !important',
        },

        '&.disabled:hover .list-left-info': {
          backgroundColor: '$background !important',
        },

        '&.disabled.pressed .list-left-info': {
          backgroundColor: '$background !important',
        },

        '&.disabled:hover .list-left-info svg': {
          color: '$gray60 !important',
        },
      },
      md: {},
    },
  },
})

export type ListVariantProps = VariantProps<typeof StyledList>
