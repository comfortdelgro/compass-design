import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter, classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import GridItem from './grid-item'
import styles from './styles/grid.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
  spacing?: 'sm' | 'md' | 'lg'
  justifyContent?:
    | 'flexStart'
    | 'flexEnd'
    | 'center'
    | 'spaceBetween'
    | 'spaceAround'
    | 'spaceEvenly'
  alignItems?: 'flexStart' | 'flexEnd' | 'center' | 'stretch' | 'baseline'
}

export type GridContainerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Grid = React.forwardRef<HTMLDivElement, GridContainerProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      spacing,
      justifyContent,
      alignItems,
      className,
      ...htmlProps
    } = props

    const gridContainerRef = useDOMRef<HTMLDivElement>(ref)

    const rootClasses = classNames(
      styles.container,
      spacing && styles[`containerSpacing${capitalizeFirstLetter(spacing)}`],
      justifyContent &&
        styles[
          `containerJustifyContent${capitalizeFirstLetter(justifyContent)}`
        ],
      alignItems &&
        styles[`containerAlignItems${capitalizeFirstLetter(alignItems)}`],
      className,
      'cdg-grid',
    )

    // Loop children and for each element in children, pass prop spacing to the element
    const clonedChildren = React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement, {
        spacing: spacing,
      })
    })

    return (
      <CssInjection css={css}>
        <div {...htmlProps} ref={gridContainerRef} className={rootClasses}>
          {clonedChildren}
        </div>
      </CssInjection>
    )
  },
) as typeof Grid & {
  Item: typeof GridItem
}

export default Grid
