import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/breadscrumbs-item.module.css'

interface Props {
  css?: unknown
  href?: string
  target?: string
  isCurrent?: boolean
  isDisabled?: boolean
  children?: React.ReactNode
}

export type BreadcrumbItemProps = Props &
  Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props>

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  (props, ref) => {
    const {
      href,
      target,
      children,
      css = {},
      isCurrent = false,
      isDisabled = false,
      className,
      ...delegated
    } = props

    const linkRef = useDOMRef<HTMLAnchorElement>(ref)

    const itemClass = React.useMemo(() => {
      let classes = `cdg-breadcrumb-item ${styles.breadcrumbsItem}`
      if(className) classes += ` ${className}`
      if(isCurrent) classes += ` ${styles.active}`
      if(isDisabled) classes += ` ${styles.disabled}`
      return classes
    },[isCurrent, isDisabled, className])

    return (
      <CssInjection css={css} childrenRef={linkRef}>
        <li>
          {React.createElement(
            isCurrent || isDisabled ? 'span' : 'a',
            {
              ...delegated,
              className: itemClass,
              ref: linkRef,
              href: href,
              target: target,
            },
            children,
          )}
        </li>
      </CssInjection>
    )
  },
)

export default BreadcrumbItem
