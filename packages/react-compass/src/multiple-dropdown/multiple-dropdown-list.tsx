import React, {useMemo} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import {useIsInViewport} from './hooks/useInViewport'
import {MultipleDropdownContext} from './multiple-dropdown-context'
import DropdownLoading from './multiple-dropdown-loading'
import MultipleDropdownHeader from './multiple-dropdown.header'
import styles from './styles/multiple-dropdown.module.css'
import {getDistanceBetweenElements, textContent} from './utils'

interface Props {
  searchValue?: string
  isLoading?: boolean
  children?: React.ReactNode
  noDataMessage?: string
  css?: unknown
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
  const {searchValue, labelId, isLoadingMore} = React.useContext(
    MultipleDropdownContext,
  )

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
        !isLoadingMore && onLoadMore?.()
      }
    }
  }, [isInViewport])

  return (
    <CssInjection css={css}>
      {DropdownHeaderElement && DropdownHeaderElement}
      <ul
        role='listbox'
        aria-labelledby={labelId}
        className={`${styles.multipleDropdownList} cdg-multiple-dropdown-list`}
      >
        {isLoading ? (
          <DropdownLoading />
        ) : displayedItemsCount === 0 ? (
          <div className={`${styles.multipleDropdownListEmptyData}`}>
            {noDataMessage || 'No data'}
          </div>
        ) : (
          dropdownItems
        )}
        {React.Children.toArray(dropdownItems).length > 0 && (
          <div className={`${styles.multipleDropdownListItem}`} ref={lastEl} />
        )}
        <div className={`${styles.multipleDropdownListItem}`} ref={standEl} />
      </ul>
    </CssInjection>
  )
}

export default MultipleDropdownList
