import {styled} from '../../theme'
import type {VariantProps} from '../../utils/stitches.types'

export const StyledChart = styled('div', {
  fontFamily: 'inherit',
  backgroundColor: '#FFFFFF',
  // backgroundColor: 'red',
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
  flexDirection: 'column',
  padding: '0 $6 $6 $16',
})

export const StyledLabels = styled('div', {
  position: 'relative',
  width: '100%',
  fontSize: '$label2',
  color: '$gray50',
  display: 'flex',
  '& > span': {
    position: 'absolute',
    fontSize: '$label2',
    color: '$gray50',
    // marginBottom: '$2',
  },
  '& div': {
    width: '100%',
    marginRight: '-$2',
    display: 'flex',
    justifyContent: 'space-between',
    '& span': {
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
  position: 'relative',
  '& .chart-box-line-kind': {
    position: 'absolute',
    left: '-$10',
    bottom: '-$6',
    color: '$gray60',
    fontWeight: '$semibold',
    fontSize: '$label2',
  },
  '& .chart-box-line': {
    height: '100%',
    width: '0',
    border: 'none',
    borderRight: '1px dashed $gray30',
    marginRight: '-1px',
    display: 'flex',
    justifyContent: 'center',
    '&:nth-child(2)': {
      borderRight: '1px solid $gray60',
    },
    '&:before': {
      content: 'attr(title)',
      position: 'absolute',
      bottom: '-$6',
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
  flexDirection: 'column',
  '& div': {
    width: '100%',
    height: 'calc((100% / $$length) -  1rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    '&:before': {
      content: 'attr(title)',
      position: 'absolute',
      left: '-$6',
      fontSize: '$label2',
      fontWeight: '$semibold',
      color: '$gray70',
    },
  },
})

export type ChartVariantProps = VariantProps<typeof StyledChart>
