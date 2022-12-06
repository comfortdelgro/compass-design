import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledChart = styled('div', {
  fontFamily: 'inherit',
  backgroundColor: '#FFFFFF',
  padding: '$6 $4 $12 $4',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '& div': {
    display: 'flex',
    alignItems: 'end',
  },
})

export const StyledLabelColumn = styled('div', {
  width: 'min-width',
  marginRight: '$2',
  fontSize: '$label2',
  color: '$gray50',
  alignItems: 'end',
  flexDirection: 'column',
  display: 'flex',
  '& > span': {
    fontSize: '$label2',
    color: '$gray50',
    marginBottom: '$2',
  },
  '& div': {
    marginBottom: '-$2',
    display: 'flex',
    flexDirection: 'column',
    '& span': {
      height: '54px',
      display: 'flex',
      alignItems: 'end',
      color: '$gray70',
      fontWeight: '$semibold',
      justifyContent: 'flex-end',
      '&:first-child': {
        height: 'auto',
      },
    },
  },
})

export const StyledBox = styled('div', {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  position: 'relative',
  '& .chart-box-line': {
    height: '0px',
    width: '100%',
    border: 'none',
    borderTop: '1px dashed $gray30',
    marginBottom: '-1px',
    '&:last-child': {
      borderTop: '1px solid $gray60',
    },
  },
})

export const StyledBody = styled('div', {
  justifyContent: 'space-evenly',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  '& div': {
    height: '100%',
    width: 'calc((100% / $$length) -  1rem)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    '&:before': {
      content: 'attr(title)',
      position: 'absolute',
      bottom: '-$6',
      fontSize: '$label2',
      color: '#009EDA',
    },
  },
})

export const StyledLegend = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '$4',
  fontWeight: '$semibold',
  '.chart-legend-item': {
    display: 'flex',
    '& div': {
      marginRight: '$2',
      width: '$4',
      height: '$4',
      borderRadius: '$full',
    },
  },
  variants: {
    position: {
      top: {
        width: 'min-height',
        position: 'absolute',
        top: '$6',
        right: '$4',
      },
      bottom: {
        marginTop: '$10',
      },
    },
  },
})
export type ChartVariantProps = VariantProps<typeof StyledChart>
