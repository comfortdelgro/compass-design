import React, {useContext, useEffect, useMemo} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {DropdownContext} from './dropdown-context'
import DropdownLoading from './dropdown-loading'
import DropdownHeader from './dropdown.header'
import {
  StyledDropdownList,
  StyledDropdownListItem,
  StyledEmptyData,
} from './dropdown.styles'
import {useIsInViewport} from './hooks/useInViewport'
import {getDistanceBetweenElements, textContent} from './utils'

interface Props extends StyledComponentProps {
  searchValue?: string
  isLoading?: boolean
  children?: React.ReactNode
  noDataMessage?: string
  onLoadMore?: () => void
}

export type DropdownItemListProps = Props

const DropdownList: React.FC<DropdownItemListProps> = (
  props: DropdownItemListProps,
) => {
  const {children, isLoading, css = {}, noDataMessage, onLoadMore} = props

  const lastEl = useDOMRef<HTMLDivElement>(null)
  const standEl = useDOMRef<HTMLDivElement>(null)

  const isInViewport = useIsInViewport(lastEl)
  const {searchValue, labelId} = useContext(DropdownContext)

  const {child: DropdownHeaderElement, rest: dropdownItems} = pickChild<
    typeof DropdownHeader
  >(children, DropdownHeader)

  const displayedItemsCount = useMemo(() => {
    let currentCount = 0
    React.Children.map(dropdownItems, (child) => {
      if (
        textContent(child)
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      ) {
        currentCount++
      }
    })
    return currentCount
  }, [dropdownItems, searchValue])

  useEffect(() => {
    if (lastEl.current && standEl.current) {
      const distance = getDistanceBetweenElements(
        lastEl.current,
        standEl.current,
      )
      if (isInViewport && distance >= 0 && distance < 4) {
        onLoadMore?.()
      }
    }
  }, [isInViewport])

  return useMemo(
    () => (
      <>
        {DropdownHeaderElement && DropdownHeaderElement}
        <StyledDropdownList css={css} role='listbox' aria-labelledby={labelId}>
          {isLoading ? (
            <DropdownLoading />
          ) : displayedItemsCount === 0 ? (
            <StyledEmptyData>{noDataMessage || 'No data'}</StyledEmptyData>
          ) : (
            dropdownItems
          )}
          {React.Children.toArray(dropdownItems).length > 0 && (
            <StyledDropdownListItem ref={lastEl} />
          )}
          <StyledDropdownListItem ref={standEl} />
        </StyledDropdownList>
      </>
    ),
    [css, isLoading, displayedItemsCount, children],
  )
}

export default DropdownList
