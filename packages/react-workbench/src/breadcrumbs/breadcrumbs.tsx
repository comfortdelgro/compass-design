import {useBreadcrumbs} from '@react-aria/breadcrumbs'
import type {AriaBreadcrumbsProps} from '@react-types/breadcrumbs'
import React from 'react'
import type BreadcrumbItem from './breadcrumb-item'
import {BreadcrumbsVariantProps, StyledBreadcrumbs} from './breadcrumbs.styles'

interface Props extends BreadcrumbsVariantProps {
  divider?: React.ReactNode
  isActive?: (item: number) => boolean
}

export type BreadcrumbsProps = Props &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof Props>

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  divider,
  children,
  isActive,
  ...ariaProps
}) => {
  const {navProps} = useBreadcrumbs(ariaProps as AriaBreadcrumbsProps)
  const items = React.Children.toArray(children)

  return (
    <StyledBreadcrumbs {...navProps}>
      <ol>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {React.cloneElement(item as JSX.Element, {
              isActive: isActive ? isActive(i) : false,
            })}
            {i < items.length - 1 && (
              <li aria-hidden className='divider'>
                {divider || '/'}
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </StyledBreadcrumbs>
  )
}

export default Breadcrumbs as typeof Breadcrumbs & {Item: typeof BreadcrumbItem}
