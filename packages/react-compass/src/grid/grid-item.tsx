import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {capitalizeFirstLetter, classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/grid.module.css'

interface Props {
  children?: React.ReactNode
  css?: CSS
  spacing?: 'sm' | 'md' | 'lg'
  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xxl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

export type GridItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => {
    const {
      children,
      css = {},
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      spacing,
      className,
      ...htmlProps
    } = props

    const gridItemRef = useDOMRef<HTMLDivElement>(ref)

    const rootClasses = classNames(
      styles.item,
      spacing && styles[`itemSpacing${capitalizeFirstLetter(spacing)}`],
      xs && styles[`itemXs${xs}`],
      sm && styles[`itemSm${sm}`],
      md && styles[`itemMd${md}`],
      lg && styles[`itemLg${lg}`],
      xl && styles[`itemXl${xl}`],
      xxl && styles[`itemXxl${xxl}`],
      className,
      'cdg-grid-item',
    )

    return (
      <CssInjection css={css}>
        <div {...htmlProps} ref={gridItemRef} className={rootClasses}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default GridItem
