import React, {useMemo} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useIsInViewport} from './hooks/useInViewport'
import {MultipleDropdownContext} from './multiple-dropdown-new-context'
import MultipleDropdownHeader from './multiple-dropdown-new.header'
import {
  StyledDropdownList,
  StyledEmptyData,
  StyledLoading,
} from './multiple-dropdown-new.styles'
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

  const lastEl = React.useRef<HTMLDivElement | null>(null)
  const standEl = React.useRef<HTMLDivElement | null>(null)

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
            <StyledLoading>
              <div className='spinner'>
                <div className='spinner-1' />
                <div className='spinner-2' />
                <div className='spinner-3' />
                <div />
              </div>
            </StyledLoading>
          ) : displayedItemsCount === 0 ? (
            <StyledEmptyData>{noDataMessage || 'No data'}</StyledEmptyData>
          ) : (
            children
          )}
          {React.Children.toArray(dropdownItems).length > 0 && (
            <div style={{height: 1}} ref={lastEl} />
          )}
          <div style={{height: 1}} ref={standEl} />
        </StyledDropdownList>
      </>
    ),
    [css, isLoading, children],
  )
}

export default MultipleDropdownList