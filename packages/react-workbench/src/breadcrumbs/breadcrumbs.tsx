import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useBreadcrumbs} from '@react-aria/breadcrumbs'
import type {AriaBreadcrumbsProps} from '@react-types/breadcrumbs'
import type {CSS} from '@stitches/react'
import React from 'react'
import type BreadcrumbItem from './breadcrumb-item'
import {BreadcrumbsVariantProps, StyledBreadcrumbs} from './breadcrumbs.styles'

interface Props extends BreadcrumbsVariantProps {
  css?: CSS
  dividerIcon?: IconProp
  isActive?: (item: number) => boolean
}

export type BreadcrumbsProps = Props &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof Props>

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  css = {},
  dividerIcon,
  children,
  isActive,
  ...delegated
}) => {
  const {navProps} = useBreadcrumbs(delegated as AriaBreadcrumbsProps)
  const items = React.Children.toArray(children)

  return (
    <StyledBreadcrumbs css={css} {...delegated} {...navProps}>
      <ol>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {React.cloneElement(item as JSX.Element, {
              isActive: isActive ? isActive(i) : false,
            })}
            {i < items.length - 1 && (
              <li aria-hidden className='divider'>
                {
                  <FontAwesomeIcon
                    className='divider-icon'
                    icon={dividerIcon || faChevronRight}
                  />
                }
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </StyledBreadcrumbs>
  )
}

export default Breadcrumbs as typeof Breadcrumbs & {Item: typeof BreadcrumbItem}
