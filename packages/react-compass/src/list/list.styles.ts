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

  '.list-left-info': {
    display: 'flex',
    alignItems: 'center',
  },

  '.list-left-side': {
    display: 'flex',
    gap: '$6',
    alignItems: 'center',
  },

  '.list-left-side svg': {
    width: '$5_5',
    height: '$5_5',
  },

  '.list-text-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
  },

  '.list-text-title': {
    fontSize: '$header4',
    fontWeight: '$semibold',
    margin: 0,
  },

  '.list-text-description': {
    fontSize: '$body3',
  },

  '.list-right-side': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
  },

  '.list-right-side-text': {
    fontSize: '$body3',
  },

  '.list-right-side svg': {
    width: '$3_5',
    height: '$6',
  },

  variants: {
    isPressed: {
      true: {},
      false: {},
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        '&:focus-visible': {
          outline: 'none',
        },
      },
      false: {},
    },
    variant: {
      item: {
        backgroundColor: 'transparent',

        '&:hover': {
          [`.list-text-title, 
          .list-text-description, 
          .list-right-side-text, 
          .list-right-side svg, 
          .list-left-info svg`]: {
            color: '$cdgBlue40',
          },
        },

        [`.list-text-title, 
        .list-text-description, 
        .list-right-side-text, 
        .list-right-side svg, 
        .list-left-info svg`]: {
          color: '$gray80',
        },
      },
      interactive: {
        backgroundColor: '$background',

        '&:hover': {
          backgroundColor: '$cdgBlue10',
        },

        '.list-text-title, .list-right-side-text': {
          color: '$primaryText',
        },

        '.list-text-description': {
          color: '$gray80',
        },
      },
      h5: {
        borderRadius: 0,
        gap: 8,
        '&:hover': {
          backgroundColor: '$blueShades10',
        },
        '& .list-left-side': {
          gap: '$3',
        },
        '.list-text-wrapper': {
          gap: 0,
        },
        '.list-text-title': {
          fontSize: '$header5',
          color: '$grayShades100',
          lineHeight: '$normal',
        },
        '.list-text-description': {
          fontSize: '$label2',
          lineHeight: '1.2rem',
          color: '$grayShades60',
          marginRight: 4,
        },
        '.list-h5-right-side': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 4,
          '.list-text-title': {
            fontSize: '$label1',
            color: '$grayShades100',
            lineHeight: '1.2rem',
          },
          '.list-text-description': {
            fontSize: '$label3',
            lineHeight: '1rem',
            color: '$grayShades40',
            textAlign: 'end',
          },
        },
      },
    },
    size: {
      sm: {
        padding: '$2_5 $4',

        '.list-left-info': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '$8',
          height: '$8',
          borderRadius: '100%',
          backgroundColor: '$background',
        },

        '.list-left-info svg': {
          width: '$3_5',
          height: '$3_5',
          color: '$gray60',
        },

        '.list-text-title': {
          fontSize: '$label2',
          fontWeight: '$normal',
          color: '$gray60',
        },

        '.list-text-description': {
          fontSize: '$body3',
          color: '$gray70',
        },

        '.list-text-wrapper': {
          gap: '$2',
        },

        '&:hover': {
          '.list-left-info': {
            backgroundColor: '$cdgBlue100',
          },
          '.list-left-info svg': {
            color: '$whiteText',
          },
          '.list-text-title': {
            color: '$cdgBlue60',
          },
        },
      },
      md: {},
    },
  },
  compoundVariants: [
    {
      variant: 'interactive',
      isPressed: true,
      css: {
        '&:hover': {
          backgroundColor: '$cdgBlue100',
        },

        [`.list-text-title, 
        .list-text-description, 
        .list-right-side-text, 
        .list-right-side svg, 
        .list-left-info svg`]: {
          color: '$whiteText',
        },
      },
    },
    {
      variant: 'interactive',
      isDisabled: true,
      css: {
        backgroundColor: '$grayShades20',
        '&:hover': {
          backgroundColor: '$grayShades20',
        },

        '&:focus-visible': {
          outline: 'none',
        },
        '.list-text-title, .list-right-side svg': {
          color: '#333333',
        },
        '.list-text-description': {
          color: '$gray80',
        },
        '.list-right-side-text': {
          color: '$gray90',
        },
      },
    },
    {
      variant: 'item',
      isPressed: true,
      css: {
        // When pressed is also hovered, no need to style separately
        '&:hover': {
          [`.list-text-title, 
          .list-text-description, 
          .list-right-side-text, 
          .list-right-side svg, 
          .list-left-info svg`]: {
            color: '$cdgBlue100',
          },
        },
      },
    },
    {
      variant: 'item',
      isDisabled: true,
      css: {
        '&:hover': {
          [`.list-text-title, 
          .list-text-description, 
          .list-right-side-text, 
          .list-right-side svg, 
          .list-left-info svg`]: {
            color: '$gray60',
          },
        },
        [`.list-text-title, 
        .list-text-description, 
        .list-right-side-text, 
        .list-right-side svg, 
        .list-left-info svg`]: {
          color: '$gray60',
        },
      },
    },

    {
      size: 'sm',
      isPressed: true,
      css: {
        // When pressed is also hovered, no need to style separately
        '&:hover': {
          '.list-text-title': {
            color: '$whiteText',
          },
          '.list-left-info': {
            backgroundColor: '$background',
          },
          '.list-left-info svg': {
            color: '$gray60',
          },
        },
      },
    },
    {
      size: 'sm',
      isDisabled: true,
      css: {
        pointerEvents: 'none',
        '&:hover': {
          [`.list-text-title, 
          .list-text-description, 
          .list-right-side-text`]: {
            color: '$gray70',
          },
        },
      },
    },
  ],
})

export type ListVariantProps = VariantProps<typeof StyledList>
