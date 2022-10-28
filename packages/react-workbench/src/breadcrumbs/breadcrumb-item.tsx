import {useBreadcrumbItem} from '@react-aria/breadcrumbs'
import type {AriaBreadcrumbItemProps} from '@react-types/breadcrumbs'
import type {CSS} from '@stitches/react'
import React, {useRef} from 'react'
import {
  BreadcrumbItemVariantProps,
  StyledBreadcrumbItem,
} from './breadcrumb-item.styles'

interface Props extends BreadcrumbItemVariantProps {
  css?: CSS
  disabled?: boolean
}

export type BreadcrumbItemProps = Props &
  Omit<React.ComponentPropsWithoutRef<'a'>, keyof Props>

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  css = {},
  href,
  target,
  disabled,
  children,
  ...delegated
}) => {
  const ariaProps = {
    ...delegated,
    elementType: 'a',
    isDisabled: disabled,
  } as AriaBreadcrumbItemProps

  const ref = useRef<HTMLAnchorElement>(null)
  const {itemProps} = useBreadcrumbItem(ariaProps, ref)

  return (
    <li>
      <StyledBreadcrumbItem
        ref={ref}
        css={css}
        href={href}
        target={target}
        {...delegated}
        {...itemProps}
        active={(delegated as {isActive: boolean}).isActive}
      >
        {children}
      </StyledBreadcrumbItem>
    </li>
  )
}

export default BreadcrumbItem
