import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/breadscrumbs-item.module.css'

interface Props {
  css?: CSS
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
      ...htmlProps
    } = props

    const linkRef = useDOMRef<HTMLAnchorElement>(ref)

    const itemClass = React.useMemo(() => {
      return [
        styles.breadcrumbsItem,
        isCurrent && styles.isActive,
        isDisabled && styles.isDisabled,
        'cdg-breadcrumb-item',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [isCurrent, isDisabled, className])

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
              className: itemClass,
            },
            children,
          )}
        </li>
      </CssInjection>
    )
  },
)

export default BreadcrumbItem
