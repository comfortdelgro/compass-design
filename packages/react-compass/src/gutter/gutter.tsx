import React, {Children, useState} from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import GutterContent from './gutter-content'
import {GutterContext} from './gutter-context'
import GutterResizer from './gutter-resizer'
import {StyledGutter} from './gutter.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  maxWidth?: CSS['maxWidth']
  minWidth?: CSS['minWidth']
  width?: CSS['width']
  hasBothSides?: boolean
}

export type GutterProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Gutter = React.forwardRef<HTMLDivElement, GutterProps>((props, ref) => {
  const {
    children,
    maxWidth,
    minWidth,
    hasBothSides = false,
    width = undefined,
    css = {},
  } = props
  const [gutterWidth, setGutterWidth] = useState<CSS['width']>(width)
  const [isResizing, setIsResizing] = useState(false)
  const domRef = useDOMRef(ref)

  const [leftComponent, rightComponent] = Children.toArray(children)

  const isGutterLeftSide =
    (leftComponent as React.ReactElement).type === GutterResizer

  return (
    <GutterContext.Provider
      value={{
        gutterRef: domRef,
        isGutterLeftSide,
        isResizing,
        gutterWidth,
        minWidth,
        maxWidth,
        hasBothSides,
        setGutterWidth,
        setIsResizing,
      }}
    >
      <StyledGutter
        ref={domRef}
        css={{
          width: gutterWidth,
          maxWidth: maxWidth,
          minWidth: minWidth,
          ...css,
        }}
      >
        {leftComponent}
        {rightComponent}
      </StyledGutter>
    </GutterContext.Provider>
  )
})

export default Gutter as typeof Gutter & {
  Resizer: typeof GutterResizer
  Content: typeof GutterContent
}
