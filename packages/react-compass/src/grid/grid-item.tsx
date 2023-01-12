import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {GridItemVariantProps, StyledGridItem} from './grid.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type GridItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> &
  GridItemVariantProps

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => {
    const {children, css = {}, xs, sm, md, lg, ...delegated} = props
    const variantProps = {xs, sm, md, lg} as GridItemVariantProps
    const gridItemRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledGridItem
        css={css}
        ref={gridItemRef}
        {...variantProps}
        {...delegated}
      >
        {children}
      </StyledGridItem>
    )
  },
)

export default GridItem
