import type {IconProp} from '@fortawesome/fontawesome-svg-core'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Icon} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import type BreadcrumbItem from './breadcrumb-item'
import {BreadcrumbsVariantProps, StyledBreadcrumbs} from './breadcrumbs.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  dividerIcon?: IconProp
  isCurrent?: (item: number) => boolean
}

export type BreadcrumbsProps = Props &
  BreadcrumbsVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      dividerIcon = faChevronRight,
      isCurrent,
      // AriaBreadcrumbsProps
      ...ariaSafeProps
    } = props

    const {children} = ariaSafeProps

    const breadcrumbsRef = useDOMRef<HTMLDivElement>(ref)
    const items = React.Children.toArray(children)

    const htmlProps = {...ariaSafeProps} as Omit<
      React.HTMLAttributes<HTMLDivElement>,
      keyof Props
    >

    return (
      <StyledBreadcrumbs
        css={css}
        ref={breadcrumbsRef}
        {...htmlProps}
        aria-label={'Breadcrumbs'}
      >
        <ol>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {React.cloneElement(item as JSX.Element, {
                isCurrent: isCurrent ? isCurrent(i) : false,
              })}
              {i < items.length - 1 && (
                <li aria-hidden className='divider'>
                  <Icon className='divider-icon' icon={dividerIcon} />
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </StyledBreadcrumbs>
    )
  },
)

export default Breadcrumbs as typeof Breadcrumbs & {Item: typeof BreadcrumbItem}
