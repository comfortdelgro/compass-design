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
    className,
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

  const dividerClass = React.useMemo(() => {
    let classes = `cdg-divider ${styles.divider}`
    if (className) classes += ` ${className}`
    if (absolute) classes += ` ${styles.absolute}`
    if (flexItem) classes += ` ${styles.flexItem}`
    if (children) classes += ` ${styles.hasChildren}`
    if (variant === 'inset') classes += ` ${styles.variantInset}`
    if (orientation === 'vertical') classes += ` ${styles.orientationVertical}`

    if (variant === 'middle' && orientation === 'horizontal')
      classes += ` ${styles.variantMiddleOrientationHorizontal}`

    if (variant === 'middle' && orientation === 'vertical')
      classes += ` ${styles.variantMiddleOrientationVertical}`

    if (children && orientation === 'vertical')
      classes += ` ${styles.hasChildrenOrientationVertical}`

    if (textAlign === 'right' && orientation === 'horizontal')
      classes += ` ${styles.textAlignRightOrientationHorizontal}`

    if (textAlign === 'left' && orientation === 'horizontal')
      classes += ` ${styles.textAlignLeftOrientationHorizontal}`

    if (textAlign === 'top' && orientation === 'vertical')
      classes += ` ${styles.textAlignTopOrientationVertical}`

    if (textAlign === 'bottom' && orientation === 'vertical')
      classes += ` ${styles.textAlignBottomOrientationVertical}`

    return classes
  }, [className, absolute, flexItem, children, variant, orientation, textAlign])

  const bodyClass = React.useMemo(() => {
    let classes = `cdg-divider-body ${styles.body}`

    if (orientation === 'vertical')
      classes += ` ${styles.bodyOrientationVertical}`

    return classes
  }, [orientation])

  return (
    <CssInjection css={css} childrenRef={dividerRef}>
      {React.createElement(
        component,
        {
          ...delegated,
          classes: dividerClass,
          style: {'--divider-color': color},
          ref: dividerRef,
        },
        children && <span className={bodyClass}>{children}</span>,
      )}
    </CssInjection>
  )
})

export default Divider
