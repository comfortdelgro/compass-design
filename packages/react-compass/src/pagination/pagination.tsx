import React, {useCallback, useMemo} from 'react'
import type {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {usePagination} from './pagination.hooks'
import {
  PaginationVariantProps,
  StyledPagination,
  StyledPaginationItem,
} from './pagination.styles'

interface Props extends StyledComponentProps {
  page?: number
  total?: number
  initialPage?: number
  onChange?: (page: number) => void
}

export type PaginationProps = Props &
  PaginationVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Ellipsis: React.FC<
  React.ComponentPropsWithoutRef<typeof StyledPagination> & {isBefore: boolean}
> = ({isBefore, ...props}) => {
  const icon = useMemo(
    () =>
      isBefore ? (
        <svg viewBox='0 0 512 512'>
          <path
            fill='currentColor'
            d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z'
          ></path>
        </svg>
      ) : (
        <svg viewBox='0 0 512 512'>
          <path
            fill='currentColor'
            d='M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z'
          ></path>
        </svg>
      ),
    [isBefore],
  )

  return <StyledPaginationItem {...props}>{icon}</StyledPaginationItem>
}

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      page,
      total = 1,
      initialPage = 1,
      onChange,
      // html props
      ...delegated
    } = props

    const paginationRef = useDOMRef<HTMLDivElement>(ref)
    const {items, active, setPage, next, previous} = usePagination({
      page,
      total,
      initialPage,
      onChange,
    })

    const renderItem = useCallback(
      (item: (typeof items)[number], index: number) => {
        if (item === 'dots') {
          const isBefore = index < items.indexOf(active)

          return (
            <Ellipsis
              key={index}
              isBefore={isBefore}
              aria-label={isBefore ? 'previous 5 items' : 'next 5 items'}
              onClick={() => {
                if (isBefore) {
                  setPage(active - 5 >= 1 ? active - 5 : 1)
                } else {
                  setPage(active + 5 <= total ? active + 5 : total)
                }
              }}
            />
          )
        }

        return (
          <StyledPaginationItem
            key={index}
            active={item === active}
            onClick={() => item !== active && setPage(item)}
            aria-label={`page ${item}`}
            aria-current={item === active ? 'page' : undefined}
          >
            {item}
          </StyledPaginationItem>
        )
      },
      [total, active],
    )

    return (
      <StyledPagination
        css={css}
        ref={paginationRef}
        role='navigation'
        aria-label='pagination'
        {...delegated}
      >
        <StyledPaginationItem onClick={previous} aria-label='previous page'>
          <svg viewBox='0 0 320 512'>
            <path
              fill='currentColor'
              d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'
            ></path>
          </svg>
        </StyledPaginationItem>
        {items.map(renderItem)}
        <StyledPaginationItem onClick={next} aria-label='next page'>
          <svg viewBox='0 0 320 512'>
            <path
              fill='currentColor'
              d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'
            ></path>
          </svg>
        </StyledPaginationItem>
      </StyledPagination>
    )
  },
)

export default Pagination
