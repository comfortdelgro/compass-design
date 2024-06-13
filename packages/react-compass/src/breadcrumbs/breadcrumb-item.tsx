import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/breadscrumbs-item.module.css'

interface Props {
  css?: CSS
  href?: string
  target?: string
  isCurrent?: boolean
  isDisabled?: boolean
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
      ...htmlProps
    } = props

    const linkRef = useDOMRef<HTMLAnchorElement>(ref)

    const rootClasses = classNames(
      styles.breadcrumbsItem,
      isCurrent && styles.isActive,
      isDisabled && styles.isDisabled,
      className,
      'cdg-breadcrumb-item',
    )

    return (
      <CssInjection css={css} childrenRef={linkRef}>
        <li>
          {React.createElement(
            isCurrent || isDisabled ? 'span' : 'a',
            {
              ...htmlProps,
              href: href,
              ref: linkRef,
              target: target,
              className: rootClasses,
            },
            children,
          )}
        </li>
      </CssInjection>
    )
  },
)

export default BreadcrumbItem
