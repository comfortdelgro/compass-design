import {styled} from '../theme'
import {keyframes} from '../theme/stitches.config'
import {VariantProps} from '../utils/stitches.types'

const fadeIn = keyframes({
  from: {opacity: '0'},
  to: {opacity: '1'},
})

export const StyledPUDO = styled('div', {
  '--cdg-pudo-dot-size': '3px',
  '--cdg-pudo-icon-height': 'var(--space-6, 1.5rem)',
  '--cdg-pudo-item-padding-block': 'var(--space-4, 1rem)',
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
      height: 'var(--cdg-pudo-icon-height)',
    },

    '&:before, &:after': {
      content: '',
      position: 'absolute',
      insetInline: 0,
      zIndex: -1,
      width: '100%',
      height:
        'calc(50% - var(--cdg-pudo-icon-height) / 2 + var(--cdg-pudo-dot-size) * 2)',
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
    '.cdg-pudo-item__input, .cdg-pudo-item__custom': {
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
      custom: {
        paddingInline: '$4',

        '.cdg-pudo-item__custom': {
          paddingBlock: 'var(--cdg-pudo-item-padding-block)',
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
        '--cdg-pudo-item-padding-block': 'calc(var(--cdg-pudo-dot-size) * 4)',
        '&~ .cdg-pudo-item': {
          '.cdg-pudo-item__input, .cdg-pudo-item__custom': {
            borderTop: 'none',
          },
        },

        '.cdg-pudo-item__input': {
          input: {
            height: '$10',
          },
        },

        '.cdg-pudo-item__icon': {
          '&:before, &:after': {
            height:
              'calc(50% - var(--cdg-pudo-icon-height) / 2 + var(--cdg-pudo-dot-size) * 1.5)',
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
        '--cdg-pudo-item-padding-block': 'calc(var(--cdg-pudo-dot-size) * 2)',
        '&~ .cdg-pudo-item': {
          '.cdg-pudo-item__input, .cdg-pudo-item__custom': {
            borderTop: 'none',
          },
        },

        '.cdg-pudo-item__input': {
          input: {
            paddingBlock: '$1',
            height: 'auto',
          },
        },

        '.cdg-pudo-item__icon': {
          '&:before, &:after': {
            height:
              'calc(50% - var(--cdg-pudo-icon-height) / 2 + var(--cdg-pudo-dot-size) * 1.5)',
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

          '&:before, &:after': {
            height:
              'calc(50% - var(--cdg-pudo-icon-height) / 2 + var(--cdg-pudo-dot-size) * 2)',
          },
        },
      },
      top: {
        '.cdg-pudo-item__icon': {
          paddingTop: 'var(--cdg-pudo-item-padding-block)',

          '&:before': {
            top: 0,
            height:
              'calc(var(--cdg-pudo-item-padding-block) + var(--cdg-pudo-dot-size))',
          },
          '&:after': {
            bottom: 0,
            height:
              'calc(100% - var(--cdg-pudo-icon-height) - var(--cdg-pudo-item-padding-block) + var(--cdg-pudo-dot-size))',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      type: 'custom',
      alignIcon: 'center',
      compact: 'sm',
      css: {
        '.cdg-pudo-item__icon': {
          '&:before, &:after': {
            height:
              'calc(50% - var(--cdg-pudo-icon-height) / 2 + var(--cdg-pudo-dot-size))',
          },
        },
      },
    },
    {
      compact: 'md',
      alignIcon: 'top',
      css: {
        '.cdg-pudo-item__icon': {
          '&:before': {
            top: 0,
            height: 'var(--cdg-pudo-item-padding-block)',
          },
          '&:after': {
            bottom: 0,
            height:
              'calc(100% - var(--cdg-pudo-icon-height) - var(--cdg-pudo-item-padding-block))',
          },
        },
      },
    },
    {
      compact: 'sm',
      alignIcon: 'top',
      css: {
        '.cdg-pudo-item__icon': {
          '&:before': {
            top: 0,
            height: 'var(--cdg-pudo-item-padding-block)',
          },
          '&:after': {
            bottom: 0,
            height:
              'calc(100% - var(--cdg-pudo-icon-height) - var(--cdg-pudo-item-padding-block))',
          },
        },
      },
    },
  ],
})

export type PudoItemVariantProps = VariantProps<typeof StyledPUDOItem>
export type PudoVariantProps = VariantProps<typeof StyledPUDO>
