import {styled} from '../theme'
import {VariantProps} from '../utils/stitches.types'

const DEFAULT_BORDER_WIDTH = '8px'

const bottomTriangleStyle = {
  borderLeft: `${DEFAULT_BORDER_WIDTH} solid transparent`,
  borderRight: `${DEFAULT_BORDER_WIDTH} solid transparent`,
  borderTop: `${DEFAULT_BORDER_WIDTH} solid currentColor`,
}

const leftTriangleStyle = {
  borderTop: `${DEFAULT_BORDER_WIDTH} solid transparent`,
  borderBottom: `${DEFAULT_BORDER_WIDTH} solid transparent`,
  borderRight: `${DEFAULT_BORDER_WIDTH} solid currentColor`,
}

const topTriangleStyle = {
  borderLeft: `${DEFAULT_BORDER_WIDTH} solid transparent`,
  borderRight: `${DEFAULT_BORDER_WIDTH} solid transparent`,
  borderBottom: `${DEFAULT_BORDER_WIDTH} solid currentColor`,
}

const rightTriangleStye = {
  borderTop: `${DEFAULT_BORDER_WIDTH} solid transparent`,
  borderBottom: `${DEFAULT_BORDER_WIDTH} solid transparent`,
  borderLeft: `${DEFAULT_BORDER_WIDTH} solid currentColor`,
}

export const StyledTooltipArrow = styled('span', {
  $$padding: `$space$4`,
  '&:before': {
    content: "''",
    display: 'block',
    width: '0',
    height: '0',
    position: 'absolute',
    color: '$cdgBlue',
  },

  variants: {
    arrowPosition: {
      top: {
        '&:before': {
          top: 'calc(($$padding * -1/2))',
          ...topTriangleStyle,
        },
      },
      right: {
        '&:before': {
          right: 'calc(($$padding * -1/2))',
          ...rightTriangleStye,
        },
      },
      left: {
        '&:before': {
          left: 'calc(($$padding * -1/2))',
          ...leftTriangleStyle,
        },
      },
      bottom: {
        '&:before': {
          bottom: 'calc(($$padding * -1/2))',
          ...bottomTriangleStyle,
        },
      },
    },
  },
})

export const StyledTooltip = styled('div', {
  $$themeColor: '$cdgBlue',
  position: 'absolute',
  padding: '$4',
  maxWidth: '$96',
  background: '$cdgBlue',
  lineHeight: '$normal',
  borderRadius: '$md',
  boxShadow:
    '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
  color: '$whiteText',

  '& .tooltip-header': {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '$4',
  },

  '& .tooltip-title': {
    fontSize: '$5',
    lineHeight: '$loose',
    margin: 0,
    marginRight: '$4',
  },

  '& .tootip-close-button': {
    marginLeft: 'auto',
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
    outline: 'inherit',
  },

  '& .tooltip-close-icon': {
    width: '$4',
    height: '$4',
  },
})

export type TooltipArrowVariantProps = VariantProps<typeof StyledTooltipArrow>
