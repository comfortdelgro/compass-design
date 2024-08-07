import React, {useContext, useEffect, useMemo} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {pickChild} from '../utils/pick-child'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import {DropdownContext} from './dropdown-context'
import DropdownLoading from './dropdown-loading'
import DropdownHeader from './dropdown.header'
import {useIsInViewport} from './hooks/useInViewport'
import styles from './styles/dropdown.module.css'
import {getDistanceBetweenElements, textContent} from './utils'

interface Props {
  searchValue?: string
  isLoading?: boolean
  children?: React.ReactNode
  noDataMessage?: string
  onLoadMore?: () => void
  css?: CSS
}

export type DropdownItemListProps = Props

const DropdownList: React.FC<DropdownItemListProps> = (
  props: DropdownItemListProps,
) => {
  const {children, isLoading, css = {}, noDataMessage, onLoadMore} = props

  const lastEl = useDOMRef<HTMLDivElement>(null)
  const standEl = useDOMRef<HTMLDivElement>(null)

  const isInViewport = useIsInViewport(lastEl)
  const {searchValue, labelId, isLoadingMore, disabledAutofill} =
    useContext(DropdownContext)

  const {child: DropdownHeaderElement, rest: dropdownItems} = pickChild(
    children,
    DropdownHeader,
  )

  const displayedItemsCount = useMemo(() => {
    let currentCount = 0
    React.Children.map(dropdownItems, (child) => {
      if (
        textContent(child)
          .toLocaleLowerCase()
          .includes(disabledAutofill ? '' : searchValue.toLocaleLowerCase())
      ) {
        currentCount++
      }
    })
    return currentCount
  }, [disabledAutofill, dropdownItems, searchValue])

  useEffect(() => {
    if (lastEl.current && standEl.current) {
      const distance = getDistanceBetweenElements(
        lastEl.current,
        standEl.current,
      )
      if (isInViewport && distance >= 0 && distance < 4) {
        !isLoadingMore && onLoadMore?.()
      }
    }
  }, [isInViewport, isLoadingMore, lastEl, onLoadMore, standEl])

  return useMemo(
    () => (
      <CssInjection css={css}>
        {DropdownHeaderElement && DropdownHeaderElement}
        <ul
          role='listbox'
          aria-labelledby={labelId}
          className={classNames(styles.dropdownList, 'cdg-dropdown-list')}
        >
          {isLoading ? (
            <DropdownLoading />
          ) : displayedItemsCount === 0 ? (
            <div
              className={classNames(
                styles.dropdownListEmptyData,
                'cdg-dropdown-list-empty-data',
              )}
            >
              {noDataMessage || 'No data'}
            </div>
          ) : (
            dropdownItems
          )}
          {React.Children.toArray(dropdownItems).length > 0 && (
            <div
              className={classNames(
                styles.dropdownListItem,
                'cdg-dropdown-list-item',
              )}
              ref={lastEl}
            />
          )}
          <div
            className={classNames(
              styles.dropdownListItem,
              'cdg-dropdown-list-item',
            )}
            ref={standEl}
          />
        </ul>
      </CssInjection>
    ),
    [
      css,
      DropdownHeaderElement,
      labelId,
      isLoading,
      displayedItemsCount,
      noDataMessage,
      dropdownItems,
      lastEl,
      standEl,
    ],
  )
}

export default DropdownList
