import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/divider.module.css'

interface Props {
  css?: unknown
  color?: string
  flexItem?: boolean
  absolute?: boolean
  children?: React.ReactNode
  component?: keyof JSX.IntrinsicElements
  textAlign?: 'center' | 'right' | 'left' | 'top' | 'bottom'
  orientation?: 'vertical' | 'horizontal'
  variant?: 'fullWidth' | 'inset' | 'middle'
}

export type DividerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Divider = React.forwardRef<HTMLElement, DividerProps>((props, ref) => {
  const {
    children,
    css = {},
    absolute = false,
    flexItem = false,
    textAlign = 'center',
    variant = 'fullWidth',
    orientation = 'horizontal',
    color = 'var(--cdg-color-divider)',
    component = children ? 'div' : 'hr',
    ...delegated
  } = props

  const dividerRef = useDOMRef<HTMLElement>(ref)

  const dividerStyle = React.useMemo(() => {
    let className = `cdg-divider ${styles.divider}`
    if (absolute) className += ` ${styles.absolute}`
    if (flexItem) className += ` ${styles.flexItem}`
    if (children) className += ` ${styles.hasChildren}`
    if (variant === 'inset') className += ` ${styles.variantInset}`
    if (orientation === 'vertical')
      className += ` ${styles.orientationVertical}`

    if (variant === 'middle' && orientation === 'horizontal')
      className += ` ${styles.variantMiddleOrientationHorizontal}`

    if (variant === 'middle' && orientation === 'vertical')
      className += ` ${styles.variantMiddleOrientationVertical}`

    if (children && orientation === 'vertical')
      className += ` ${styles.hasChildrenOrientationVertical}`

    if (textAlign === 'right' && orientation === 'horizontal')
      className += ` ${styles.textAlignRightOrientationHorizontal}`

    if (textAlign === 'left' && orientation === 'horizontal')
      className += ` ${styles.textAlignLeftOrientationHorizontal}`

    if (textAlign === 'top' && orientation === 'vertical')
      className += ` ${styles.textAlignTopOrientationVertical}`

    if (textAlign === 'bottom' && orientation === 'vertical')
      className += ` ${styles.textAlignBottomOrientationVertical}`

    return className
  }, [absolute, children, flexItem, orientation, variant, textAlign])

  const bodyStyle = React.useMemo(() => {
    let className = `cdg-divider-body ${styles.body}`

    if (orientation === 'vertical')
      className += ` ${styles.bodyOrientationVertical}`

    return className
  }, [orientation])

  return (
    <CssInjection css={css} childrenRef={dividerRef}>
      {React.createElement(
        component,
        {
          ...delegated,
          className: dividerStyle,
          style: {'--divider-color': color},
          ref: dividerRef,
        },
        children && <span className={bodyStyle}>{children}</span>,
      )}
    </CssInjection>
  )
})

export default Divider
