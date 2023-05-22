import React from 'react'
import {styled} from '../theme'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
//import {BoxVariantProps, StyledBox, StyledContentContainer} from './Box.styles'

export type BoxProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  as?: React.ElementType
  border?: string
  borderBottom?: string
  borderColor?: string
  borderLeft?: string
  borderRadius?: string
  borderRight?: string
  borderTop?: string
  boxShadow?: string
  displayPrint?: string
  displayRaw?: string
  alignContent?: string
  alignItems?: string
  alignSelf?: string
  flex?: string
  flexDirection?: string
  flexGrow?: string
  flexShrink?: string
  flexWrap?: string
  justifyContent?: string
  order?: string
  gap?: string
  columnGap?: string
  rowGap?: string
  gridColumn?: string
  gridRow?: string
  gridAutoFlow?: string
  gridAutoColumns?: string
  gridAutoRows?: string
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridTemplateAreas?: string
  gridArea?: string
  bgcolor?: string
  color?: string
  bottom?: string
  left?: string
  position?: string
  right?: string
  top?: string
  zIndex?: string
  height?: string
  maxHeight?: string
  maxWidth?: string
  minHeight?: string
  minWidth?: string
  width?: string
  boxSizing?: string
  margin?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  marginX?: string
  marginY?: string
  marginInline?: string
  marginInlineStart?: string
  marginInlineEnd?: string
  marginBlock?: string
  marginBlockStart?: string
  marginBlockEnd?: string
  padding?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
  paddingTop?: string
  paddingX?: string
  paddingY?: string
  paddingInline?: string
  paddingInlineStart?: string
  paddingInlineEnd?: string
  paddingBlock?: string
  paddingBlockStart?: string
  paddingBlockEnd?: string
  typography?: string
  fontFamily?: string
  fontSize?: string
  fontStyle?: string
  fontWeight?: string
  letterSpacing?: string
  lineHeight?: string
  textAlign?: string
}
const StyledBox = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
})
const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    // children props
    children,
    // styled component props
    css = {},
    // custom props
    as: asProp = 'div',
    border,
    borderBottom,
    borderColor,
    borderLeft,
    borderRadius,
    borderRight,
    borderTop,
    boxShadow,
    displayPrint,
    displayRaw,
    alignContent,
    alignItems,
    alignSelf,
    flex,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    order,
    gap,
    columnGap,
    rowGap,
    gridColumn,
    gridRow,
    gridAutoFlow,
    gridAutoColumns,
    gridAutoRows,
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    gridArea,
    bgcolor,
    color,
    bottom,
    left,
    position,
    right,
    top,
    zIndex,
    height,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    width,
    boxSizing,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    marginInline,
    marginInlineStart,
    marginInlineEnd,
    marginBlock,
    marginBlockStart,
    marginBlockEnd,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
    paddingInline,
    paddingInlineStart,
    paddingInlineEnd,
    paddingBlock,
    paddingBlockStart,
    paddingBlockEnd,
    typography,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign,
    ...delegated
  } = props

  const BoxRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledBox
      {...delegated}
      ref={BoxRef}
      as={asProp}
      css={{
        border,
        borderBottom,
        borderColor,
        borderLeft,
        borderRadius,
        borderRight,
        borderTop,
        boxShadow,
        displayPrint,
        displayRaw,
        alignContent,
        alignItems,
        alignSelf,
        flex,
        flexDirection,
        flexGrow,
        flexShrink,
        flexWrap,
        justifyContent,
        order,
        gap,
        columnGap,
        rowGap,
        gridColumn,
        gridRow,
        gridAutoFlow,
        gridAutoColumns,
        gridAutoRows,
        gridTemplateColumns,
        gridTemplateRows,
        gridTemplateAreas,
        gridArea,
        bgcolor,
        color,
        bottom,
        left,
        position,
        right,
        top,
        zIndex,
        height,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        width,
        boxSizing,
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginX,
        marginY,
        marginInline,
        marginInlineStart,
        marginInlineEnd,
        marginBlock,
        marginBlockStart,
        marginBlockEnd,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingX,
        paddingY,
        paddingInline,
        paddingInlineStart,
        paddingInlineEnd,
        paddingBlock,
        paddingBlockStart,
        paddingBlockEnd,
        typography,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight,
        letterSpacing,
        lineHeight,
        textAlign,
        ...css,
      }}
    >
      {children}
    </StyledBox>
  )
})

export default Box
