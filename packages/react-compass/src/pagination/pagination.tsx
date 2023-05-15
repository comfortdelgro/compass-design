import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons'
import {useHover} from '@react-aria/interactions'
import React, {useCallback, useMemo} from 'react'
import {Icon} from '../icon'
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
  const {hoverProps, isHovered} = useHover({})
  const icon = useMemo(
    () => (isHovered ? (isBefore ? faAnglesLeft : faAnglesRight) : faEllipsis),
    [isBefore, isHovered],
  )

  return (
    <StyledPaginationItem {...hoverProps} {...props}>
      <Icon icon={icon} />
    </StyledPaginationItem>
  )
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
      // VariantProps
    } = props

    const paginationRef = useDOMRef<HTMLDivElement>(ref)
    const {items, active, setPage, next, previous} = usePagination({
      page,
      total,
      initialPage,
      onChange,
    })

    const renderItem = useCallback(
      (item: typeof items[number], index: number) => {
        if (item === 'dots') {
          const isBefore = index < items.indexOf(active)

          return (
            <Ellipsis
              key={index}
              isBefore={isBefore}
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
          >
            {item}
          </StyledPaginationItem>
        )
      },
      [total, active],
    )

    return (
      <StyledPagination css={css} ref={paginationRef}>
        <StyledPaginationItem onClick={previous}>
          <Icon icon={faAngleLeft} />
        </StyledPaginationItem>
        {items.map(renderItem)}
        <StyledPaginationItem onClick={next}>
          <Icon icon={faAngleRight} />
        </StyledPaginationItem>
      </StyledPagination>
    )
  },
)

export default Pagination
