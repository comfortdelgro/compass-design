import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledChart = styled('div', {
  fontFamily: 'inherit',
  backgroundColor: '#FFFFFF',
  padding: '$6 $4',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '& > h1': {
    fontSize: '$header3',
    fontWeight: '$semibold',
    margin: 0,
    marginBottom: '$6',
  },
})

export const StyledContent = styled('div', {
  display: 'flex',
  alignItems: 'end',
  padding: '$8 0 $6 $16',
})

export const StyledBox = styled('div', {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column-reverse',
  position: 'relative',
  '& svg': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  '& .chart-box-line-kind': {
    position: 'absolute',
    left: '-$8',
    top: '-$8',
    color: '$gray60',
    fontWeight: '$semibold',
    fontSize: '$label2',
  },
  '& .chart-box-line': {
    height: '0px',
    width: '100%',
    border: 'none',
    borderTop: '1px dashed $gray30',
    marginBottom: '-1px',
    display: 'flex',
    alignItems: 'center',
    '&:nth-child(2)': {
      borderTop: '1px solid $gray60',
    },
    '&:before': {
      content: 'attr(title)',
      position: 'absolute',
      left: '-$8',
      fontSize: '$label2',
      fontWeight: '$semibold',
      color: '$gray70',
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
    '& div': {
      position: 'absolute',
      width: `0`,
      height: `0`,
      borderRadius: '$full',
    },
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
        marginBottom: '$6',
        justifyContent: 'flex-end',
      },
      bottom: {
        marginTop: '$6',
        justifyContent: 'center',
      },
    },
  },
})
export type ChartVariantProps = VariantProps<typeof StyledChart>
