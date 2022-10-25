import {useBreadcrumbItem} from '@react-aria/breadcrumbs'
import type {AriaBreadcrumbItemProps} from '@react-types/breadcrumbs'
import React, {useRef} from 'react'
import {StyledBreadcrumbItem} from './breadcrumb-item.styles'

interface Props {
  disabled?: boolean
}

export type BreadcrumbItemProps = Props &
  Omit<React.ComponentPropsWithoutRef<'a'>, keyof Props>

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  href,
  target,
  disabled,
  children,
  ...props
}) => {
  const ariaProps = {
    ...props,
    elementType: 'a',
    isDisabled: disabled,
  } as AriaBreadcrumbItemProps

  const ref = useRef<HTMLAnchorElement>(null)
  const {itemProps} = useBreadcrumbItem(ariaProps, ref)

  return (
    <li>
      <StyledBreadcrumbItem
        ref={ref}
        href={href}
        target={target}
        {...itemProps}
        active={(props as {isActive: boolean}).isActive}
      >
        {children}
      </StyledBreadcrumbItem>
    </li>
  )
}

export default BreadcrumbItem
