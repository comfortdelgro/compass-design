import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import GridItem from './grid-item'
import {GridContainerVariantProps, StyledGridContainer} from './grid.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type GridContainerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> &
  GridContainerVariantProps

const Grid = React.forwardRef<HTMLDivElement, GridContainerProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      spacing,
      justifyContent,
      alignItems,
      ...delegated
    } = props
    const variantProps = {
      spacing,
      justifyContent,
      alignItems,
    } as GridContainerVariantProps
    const gridContainerRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledGridContainer
        css={css}
        ref={gridContainerRef}
        {...variantProps}
        {...delegated}
      >
        {children}
      </StyledGridContainer>
    )
  },
)

export default Grid as typeof Grid & {
  Item: typeof GridItem
}
