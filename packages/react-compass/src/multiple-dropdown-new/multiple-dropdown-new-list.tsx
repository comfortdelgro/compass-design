import React, {useMemo} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {MultipleDropdownContext} from './multiple-dropdown-new-context'
import MultipleDropdownHeader from './multiple-dropdown-new.header'
import {
  StyledDropdownList,
  StyledEmptyData,
  StyledLoading,
} from './multiple-dropdown-new.styles'
import {textContent} from './utils'

interface Props extends StyledComponentProps {
  searchValue?: string
  isLoading?: boolean
  children?: React.ReactNode
  noDataMessage?: string
}

export type DropdownItemListProps = Props

const MultipleDropdownList: React.FC<DropdownItemListProps> = (
  props: DropdownItemListProps,
) => {
  const {children, isLoading, css = {}, noDataMessage} = props

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
            <StyledEmptyData>{noDataMessage ?? 'No data'}</StyledEmptyData>
          ) : (
            children
          )}
        </StyledDropdownList>
      </>
    ),
    [css, isLoading, children],
  )
}

export default MultipleDropdownList
