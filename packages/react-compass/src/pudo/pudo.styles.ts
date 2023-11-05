import {styled} from '../theme'
import {keyframes} from '../theme/stitches.config'
import {VariantProps} from '../utils/stitches.types'

const fadeIn = keyframes({
  from: {opacity: '0'},
  to: {opacity: '1'},
})

export const StyledPUDO = styled('div', {
  '--cdg-pudo-dot-size': '3px',
  maxWidth: '100%',

  '.cdg-pudo-items-wrapper': {
    borderRadius: '$lg',
    border: '1px solid $grayShades20',
    overflow: 'hidden',
  },

  '.cdg-pudo-actions': {
    paddingBlock: '$3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '$4',

    '&:empty': {
      display: 'none',
    },

    '& > button': {
      padding: 0,
      border: 'none',

      '&:hover': {
        background: '$background',
      },
    },
  },
})

export const StyledPUDOItem = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  paddingInline: '$4 $8',
  transition: 'background-color .2s ease-in-out',
  animation: `${fadeIn} .2s cubic-bezier(.25,0,.3,1) forwards`,

  '.cdg-pudo-item__icon': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: '$5',
    textAlign: 'center',

    '&>*': {
      display: 'block',
      width: '100%',
    },

    '&:before, &:after': {
      content: '',
      position: 'absolute',
      insetInline: 0,
      zIndex: -1,
      width: '100%',
      height: 'calc(50% - $5 / 2 + 4px)',
      backgroundImage:
        'radial-gradient(circle closest-side, #B4B4B4 100%, transparent 100%)',
      backgroundRepeat: 'repeat-y',
      backgroundPositionX: 'center',
      backgroundSize:
        'var(--cdg-pudo-dot-size) calc(var(--cdg-pudo-dot-size) * 2)',
    },

    '&:before': {
      top: 'calc(var(--cdg-pudo-dot-size) * -2)',
    },

    '&:after': {
      bottom: 'calc(var(--cdg-pudo-dot-size) * -2)',
    },
  },

  '.cdg-pudo-item__swap-icon': {
    all: 'unset',
    position: 'absolute',
    right: '$1',
    bottom: '-$3',
    zIndex: 1,
    borderRadius: '$full',

    cursor: 'pointer',
    svg: {
      display: 'block',
    },

    '&:focus': {
      boxShadow:
        '0 0 0 2px $colors$cdgBlue40, 0 0 #000, 0 1px 2px 0 $colors$cdgBlue60',
    },
  },

  '&:first-child': {
    '.cdg-pudo-item__icon:before': {
      display: 'none',
    },
  },

  '&~ .cdg-pudo-item': {
    '.cdg-pudo-item__label, .cdg-pudo-item__input, .cdg-pudo-item__custom': {
      borderTop: '1px solid $grayShades20',
    },
  },

  '&:last-child': {
    '.cdg-pudo-item__icon:after, .cdg-pudo-item__swap-icon': {
      display: 'none',
    },
  },

  variants: {
    type: {
      input: {
        '&:has(.cdg-pudo-item__input:focus-within)': {
          backgroundColor: '$grayShades10',
        },
      },
      label: {
        paddingInline: '$4',

        '.cdg-pudo-item__label': {
          marginBlock: 0,
          paddingBlock: '$4',
          width: '100%',

          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',

          fontSize: '$label1',
          fontWeight: '$normal',
          lineHeight: '$tight',
        },
      },
      custom: {
        paddingInline: '$4',

        '.cdg-pudo-item__custom': {
          paddingBlock: '$4',
          overflow: 'auto',
          width: '100%',

          fontSize: '$label1',
          fontWeight: '$normal',
          lineHeight: '$tight',

          '.cdg-pudo-item__custom-title': {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',

            '&:not(:only-child)': {
              marginBottom: '$2',
            },
          },

          '.cdg-pudo-item__custom-content': {
            marginBlock: 0,
          },
        },
      },
    },
    compact: {
      md: {
        '&~ .cdg-pudo-item': {
          '.cdg-pudo-item__label, .cdg-pudo-item__input, .cdg-pudo-item__custom':
            {
              borderTop: 'none',
            },
        },

        '.cdg-pudo-item__input': {
          input: {
            height: '$10',
          },
        },
        '.cdg-pudo-item__custom': {paddingBlock: '$3'},

        '.cdg-pudo-item__icon': {
          '&:before, &:after': {
            height: 'calc(50% - $5 / 2 + var(--cdg-pudo-dot-size) / 2)',
          },

          '&:before': {
            top: 'calc(var(--cdg-pudo-dot-size) * -1)',
          },

          '&:after': {
            bottom: 'calc(var(--cdg-pudo-dot-size) * -1)',
          },
        },
      },
      sm: {
        '&~ .cdg-pudo-item': {
          '.cdg-pudo-item__label, .cdg-pudo-item__input, .cdg-pudo-item__custom':
            {
              borderTop: 'none',
            },
        },
        '.cdg-pudo-item__custom': {paddingBlock: '0.4rem'},

        '.cdg-pudo-item__input': {
          input: {
            paddingBlock: '$1',
            height: 'auto',
          },
        },

        '.cdg-pudo-item__icon': {
          '&:before, &:after': {
            height: 'calc(50% - $5 / 2 + var(--cdg-pudo-dot-size) / 2)',
          },

          '&:before': {
            top: 'calc(var(--cdg-pudo-dot-size) * -1)',
          },

          '&:after': {
            bottom: 'calc(var(--cdg-pudo-dot-size) * -1)',
          },
        },
      },
    },
    alignIcon: {
      center: {
        '.cdg-pudo-item__icon': {
          alignItems: 'center',
        },
      },
      top: {
        '.cdg-pudo-item__icon': {
          paddingTop: '$4',

          '&:before': {
            height: 'calc($5 - var(--cdg-pudo-dot-size))',
          },
          '&:after': {
            height: 'calc(100% - $5 * 2 + var(--cdg-pudo-dot-size))',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      compact: 'md',
      type: 'label',
      css: {'.cdg-pudo-item__label': {paddingBlock: '$3'}},
    },
    {
      compact: 'sm',
      type: 'label',
      css: {'.cdg-pudo-item__label': {paddingBlock: '$2'}},
    },
    {
      compact: 'md',
      alignIcon: 'top',
      css: {
        '.cdg-pudo-item__icon': {
          '&:before, &:after': {
            height: 'calc(50% - $5 / 2 + 4px)',
          },
        },
      },
    },
    {
      compact: 'sm',
      alignIcon: 'top',
      css: {
        '.cdg-pudo-item__icon': {
          '&:before, &:after': {
            height: 'calc(50% - $5 / 2 + 4px)',
          },
        },
      },
    },
  ],
})

export type PudoItemVariantProps = VariantProps<typeof StyledPUDOItem>
export type PudoVariantProps = VariantProps<typeof StyledPUDO>
