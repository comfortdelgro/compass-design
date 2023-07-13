import React, {useMemo} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {useIsInViewport} from './hooks/useInViewport'
import {MultipleDropdownContext} from './multiple-dropdown-context'
import DropdownLoading from './multiple-dropdown-loading'
import MultipleDropdownHeader from './multiple-dropdown.header'
import {
  StyledDropdownList,
  StyledDropdownListItem,
  StyledEmptyData,
} from './multiple-dropdown.styles'
import {getDistanceBetweenElements, textContent} from './utils'

interface Props extends StyledComponentProps {
  searchValue?: string
  isLoading?: boolean
  children?: React.ReactNode
  noDataMessage?: string
  onLoadMore?: () => void
}

export type DropdownItemListProps = Props

const MultipleDropdownList: React.FC<DropdownItemListProps> = (
  props: DropdownItemListProps,
) => {
  const {children, isLoading, css = {}, noDataMessage, onLoadMore} = props

  const lastEl = useDOMRef<HTMLDivElement>(null)
  const standEl = useDOMRef<HTMLDivElement>(null)

  const isInViewport = useIsInViewport(lastEl)
  const {searchValue} = React.useContext(MultipleDropdownContext)

  const {child: DropdownHeaderElement, rest: dropdownItems} = pickChild<
    typeof MultipleDropdownHeader
  >(children, MultipleDropdownHeader)

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

  React.useEffect(() => {
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
        <StyledDropdownList css={css}>
          {isLoading ? (
            <DropdownLoading />
          ) : displayedItemsCount === 0 ? (
            <StyledEmptyData>{noDataMessage || 'No data'}</StyledEmptyData>
          ) : (
            children
          )}
          {React.Children.toArray(dropdownItems).length > 0 && (
            <StyledDropdownListItem ref={lastEl} />
          )}
          <StyledDropdownListItem ref={standEl} />
        </StyledDropdownList>
      </>
    ),
    [css, isLoading, children],
  )
}

export default MultipleDropdownList
