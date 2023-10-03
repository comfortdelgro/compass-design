/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import BreadcrumbItem from './breadcrumb-item'
import styles from './styles/breadscrumbs.module.css'

export interface Props {
  css?: unknown
  children?: React.ReactNode
  dividerIcon?: React.ReactNode
  isCurrent?: (item: number) => boolean
  className?: string
}

export type BreadcrumbsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Breadcrumbs = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    css = {},
    dividerIcon = (
      <svg viewBox='0 0 320 512'>
        <path
          fill='currentColor'
          d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
        />
      </svg>
    ),
    isCurrent,
    children,
    className,
    ...delegated
  } = props

  const breadcrumbsRef = useDOMRef<HTMLDivElement>(ref)

  const items = React.Children.toArray(children)

  const wrapperClass = React.useMemo(() => {
    let classes = `cdg-breadcrumbs ${styles.breadcrumbs}`
    if(className) classes += ` ${className}`
    return classes
  },[className])

  return (
    <CssInjection css={css} childrenRef={breadcrumbsRef}>
      <nav ref={breadcrumbsRef} className={wrapperClass} {...delegated}>
        <ol className={styles.breadcrumbsList}>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {React.cloneElement(item as JSX.Element, {
                isCurrent: isCurrent ? isCurrent(i) : false,
              })}
              {i < items.length - 1 && (
                <li aria-hidden className={styles.divider}>
                  {dividerIcon}
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </CssInjection>
  )
})

export default Breadcrumbs as typeof Breadcrumbs & {Item: typeof BreadcrumbItem}
