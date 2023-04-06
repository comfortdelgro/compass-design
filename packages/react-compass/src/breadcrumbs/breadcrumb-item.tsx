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

  'aria-disabled'?: boolean
  onBlur?: () => void
  onClick?: () => void
  onDragStart?: () => void
  onFocus?: () => void
  onKeyDown?: () => void
  onKeyUp?: () => void
  onMouseDown?: () => void
  onPointerDown?: () => void
  onPointerUp?: () => void
  tabIndex?: number
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
          aria-disabled={props['aria-disabled']}
          onBlur={props.onBlur}
          onClick={props.onClick}
          onDragStart={props.onDragStart}
          onFocus={props.onFocus}
          onKeyDown={props.onKeyDown}
          onKeyUp={props.onKeyUp}
          onMouseDown={props.onMouseDown}
          onPointerDown={props.onPointerDown}
          onPointerUp={props.onPointerUp}
          tabIndex={props.tabIndex}
          {...ariaSafeProps}
        >
          {children}
        </StyledBreadcrumbItem>
      </li>
    )
  },
)

export default BreadcrumbItem
