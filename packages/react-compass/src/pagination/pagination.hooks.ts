import {useCallback, useEffect, useMemo, useState} from 'react'

const range = (start: number, end: number) =>
  Array.from({length: end - start + 1}, (_, index) => index + start)

export interface UsePaginationHookProps {
  page?: number | undefined
  initialPage: number
  total: number
  onChange?: ((page: number) => void) | undefined
}

export const usePagination = ({
  page,
  initialPage,
  total,
  onChange,
}: UsePaginationHookProps) => {
  const [active, setActive] = useState(page ?? initialPage)

  useEffect(() => {
    if (page) setActive(page)
  }, [page])

  const setActivePage = useCallback(
    (newPage: number) => {
      setActive(newPage)
      onChange?.(newPage)
    },
    [onChange],
  )

  const setPage = useCallback(
    (newPage: number) => {
      if (newPage <= 0) {
        setActivePage(1)
      } else if (newPage > total) {
        setActivePage(total)
      } else {
        setActivePage(newPage)
      }
    },
    [total, setActivePage],
  )

  const next = () => setPage(active + 1)
  const previous = () => setPage(active - 1)
  const first = () => setPage(1)
  const last = () => setPage(total)

  const items = useMemo<Array<'dots' | number>>(() => {
    const maxItems = 7
    if (maxItems >= total) return range(1, total)

    const leftSiblingIndex = Math.max(active - 1, 1)
    const rightSiblingIndex = Math.min(active + 1, total - 1)

    const shouldShowLeftDots = leftSiblingIndex > 3
    const shouldShowRightDots = rightSiblingIndex < total - 2

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 5

      return [...range(1, leftItemCount), 'dots', total]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 4

      return [1, 'dots', ...range(total - rightItemCount, total)]
    }

    return [
      1,
      'dots',
      ...range(leftSiblingIndex, rightSiblingIndex),
      'dots',
      total,
    ]
  }, [total, active])

  return {
    items,
    active,
    setPage,
    next,
    previous,
    first,
    last,
  }
}
