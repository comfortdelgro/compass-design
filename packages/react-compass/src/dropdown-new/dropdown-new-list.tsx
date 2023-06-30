import React, {useContext, useMemo} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {DropdownContext} from './dropdown-new-context'
import {
  StyledDropdownList,
  StyledEmptyData,
  StyledLoading,
} from './dropdown-new.styles'
import {textContent} from './utils'

interface Props extends StyledComponentProps {
  searchValue?: string
  isLoading?: boolean
  children?: React.ReactNode
}

export type DropdownItemListProps = Props

const DropdownNewList: React.FC<DropdownItemListProps> = (
  props: DropdownItemListProps,
) => {
  const {children, isLoading, css = {}} = props

  const {searchValue} = useContext(DropdownContext)

  const displayedItemsCount = useMemo(() => {
    let currentCount = 0
    React.Children.map(children, (child) => {
      if (
        textContent(child as React.ReactElement)
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      ) {
        currentCount++
      }
    })
    return currentCount
  }, [children, searchValue])

  return useMemo(
    () => (
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
          <StyledEmptyData>No data</StyledEmptyData>
        ) : (
          children
        )}
      </StyledDropdownList>
    ),
    [css, isLoading, displayedItemsCount, children],
  )
}

export default DropdownNewList
