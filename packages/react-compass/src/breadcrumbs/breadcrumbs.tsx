import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import type BreadcrumbItem from './breadcrumb-item'
import {BreadcrumbsVariantProps, StyledBreadcrumbs} from './breadcrumbs.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  dividerIcon?: React.ReactNode
  isCurrent?: (item: number) => boolean
}

export type BreadcrumbsProps = Props &
  BreadcrumbsVariantProps &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props>

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
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
      // AriaBreadcrumbsProps
      ...delegated
    } = props

    const breadcrumbsRef = useDOMRef<HTMLElement>(ref)
    const items = React.Children.toArray(children)

    return (
      <StyledBreadcrumbs
        css={css}
        ref={breadcrumbsRef}
        aria-label={'Breadcrumbs'}
        {...delegated}
      >
        <ol>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {React.cloneElement(item as JSX.Element, {
                isCurrent: isCurrent ? isCurrent(i) : false,
              })}
              {i < items.length - 1 && (
                <li aria-hidden className='divider'>
                  {dividerIcon}
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
