import React from 'react'
import {styled} from '../theme'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
//import {BoxVariantProps, StyledBox, StyledContentContainer} from './Box.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  as?: React.ElementType
  backgroundColor?: string
  border?: string
  borderRadius?: string
  color?: string
  overflow?: string
  fontFamily?: string
  fontSize?: string
  fontWeight?: string
  minHeight?: string
  margin?: string
  padding?: string
  width?: string
  textAlign?: string
}

export type BoxProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    // children props
    children,
    // styled component props
    css = {},
    // custom props
    as: asProp = 'div',
    backgroundColor,
    border,
    borderRadius,
    color,
    overflow,
    fontFamily,
    fontSize,
    fontWeight,
    minHeight,
    margin,
    padding,
    width,
    textAlign,
    // HTMLDiv Props
    ...delegated
  } = props

  const StyledComponent = styled(asProp, {
    // reset
    appearance: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    margin: '0px',
    padding: '0px',
  })
  const BoxRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <StyledComponent
      ref={BoxRef}
      css={{
        backgroundColor,
        border,
        borderRadius,
        color,
        overflow,
        fontFamily,
        fontSize,
        fontWeight,
        minHeight,
        margin,
        padding,
        width,
        textAlign,
        ...css,
      }}
      {...delegated}
    >
      {children}
    </StyledComponent>
  )
})

export default Box
