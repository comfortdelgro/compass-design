// import type { AriaBreadcrumbItemProps } from '@react-types/breadcrumbs'
import React, {useMemo} from 'react'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  BreadcrumbItemVariantProps,
  StyledBreadcrumbItem,
} from './breadcrumb-item.styles'

interface Props extends StyledComponentProps {
  href?: string
  target?: string
  isCurrent?: boolean
  isDisabled?: boolean
  children?: React.ReactNode
}

export type BreadcrumbItemProps = Props & BreadcrumbItemVariantProps

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      href,
      target,
      isCurrent = false,
      isDisabled = false,
      // AriaBreadcrumbItemProps
      ...ariaSafeProps
    } = props

    const {children} = ariaSafeProps

    const elementType = useMemo(
      () => (isCurrent || isDisabled ? 'span' : 'a'),
      [isCurrent, isDisabled],
    )

    const linkRef = useDOMRef<HTMLAnchorElement>(ref)

    return (
      <li>
        <StyledBreadcrumbItem
          as={elementType}
          css={css}
          ref={linkRef}
          // component props
          href={href}
          target={target}
          className={isCurrent ? 'active' : ''}
          // variants
          active={!!isCurrent}
          disabled={!!isDisabled}
          // aria props
          {...ariaSafeProps}
        >
          {children}
        </StyledBreadcrumbItem>
      </li>
    )
  },
)

export default BreadcrumbItem
