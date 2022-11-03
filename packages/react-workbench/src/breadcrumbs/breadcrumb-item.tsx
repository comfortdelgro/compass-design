import {useBreadcrumbItem} from '@react-aria/breadcrumbs'
import type {AriaBreadcrumbItemProps} from '@react-types/breadcrumbs'
import React, {useMemo} from 'react'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  BreadcrumbItemVariantProps,
  StyledBreadcrumbItem,
} from './breadcrumb-item.styles'

interface Props extends AriaBreadcrumbItemProps, StyledComponentProps {
  href?: string
  target?: string
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
      isCurrent,
      isDisabled,
      // AriaBreadcrumbItemProps
      ...ariaSafeProps
    } = props

    const {children} = ariaSafeProps

    const elementType = useMemo(
      () => (isCurrent || isDisabled ? 'span' : 'a'),
      [isCurrent, isDisabled],
    )

    const linkRef = useDOMRef<HTMLAnchorElement>(ref)
    const {itemProps} = useBreadcrumbItem(
      {...ariaSafeProps, elementType},
      linkRef,
    )

    return (
      <li>
        <StyledBreadcrumbItem
          as={elementType}
          css={css}
          ref={linkRef}
          // component props
          href={href}
          target={target}
          // aria props
          {...itemProps}
          // variants
          active={!!isCurrent}
          disabled={!!isDisabled}
        >
          {children}
        </StyledBreadcrumbItem>
      </li>
    )
  },
)

export default BreadcrumbItem
