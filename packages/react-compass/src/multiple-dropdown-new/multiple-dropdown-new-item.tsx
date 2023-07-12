import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {MultipleDropdownContext} from './multiple-dropdown-new-context'
import {
  StyledContent,
  StyledOption,
  StyledRightIcon,
} from './multiple-dropdown-new.styles'
import {textContent} from './utils'

interface Props extends StyledComponentProps {
  value: string | number
  textValue?: string
  checkmark?: 'none' | 'checkbox' | 'tick'
  children: React.ReactNode
}

export type MultipleDropdownItemProps = Props

const MultipleDropdownNewItem: React.FC<MultipleDropdownItemProps> = (
  props: MultipleDropdownItemProps,
) => {
  const {children, value, checkmark = 'checkbox'} = props
  const {
    disabledKeys = [],
    searchValue,
    focusKey,
    selectedItems,
    setDropdownItemKeys,
    onItemClick,
  } = React.useContext(MultipleDropdownContext)

  const ref = React.useRef<HTMLLIElement>(null)

  const isSelected = React.useMemo(() => {
    return (
      selectedItems?.findIndex(
        (selectedItem) => selectedItem.value.toString() === value.toString(),
      ) !== -1
    )
  }, [selectedItems, value])

  const isFocused = React.useMemo(
    () => focusKey === value.toString(),
    [focusKey, value],
  )

  const isDisabled = React.useMemo(
    () =>
      disabledKeys.findIndex(
        (disabledKey) => disabledKey.toString() === value.toString(),
      ) !== -1,
    [disabledKeys, value],
  )

  const canDisplayed = React.useMemo(() => {
    return (
      !searchValue ||
      textContent(children as React.ReactElement)
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    )
  }, [searchValue, children])

  React.useEffect(() => {
    if (!isDisabled) {
      setDropdownItemKeys?.((keys) => {
        const index = keys.findIndex(
          (keyItem) => keyItem.value.toString() === value.toString(),
        )
        if (index === -1) {
          keys.push({value, visibility: true})
        } else {
          keys[index] = {
            value,
            visibility: canDisplayed,
          }
        }

        return keys
      })
    }
  }, [value, isDisabled, canDisplayed])

  React.useEffect(() => {
    if (focusKey && focusKey.toString() === value.toString()) {
      if (ref.current) {
        ref.current.scrollIntoView({block: 'nearest', behavior: 'smooth'})
      }
    }
  }, [focusKey, value])

  const handleItemClick = () => {
    if (isDisabled) {
      return
    }
    onItemClick({
      value: value.toString(),
      displayValue: children,
    })
  }

  return canDisplayed ? (
    <StyledOption
      ref={ref}
      isFocused={isFocused}
      isSelected={isSelected && !isFocused}
      onClick={handleItemClick}
      isDisabled={isDisabled}
    >
      <StyledContent>{children}</StyledContent>
      <StyledRightIcon isSelected={isSelected} checkmark={checkmark}>
        {checkmark === 'checkbox' ? (
          <div>
            <Tick />
          </div>
        ) : checkmark === 'tick' ? (
          <BlueTick />
        ) : null}
      </StyledRightIcon>
    </StyledOption>
  ) : null
}

export default MultipleDropdownNewItem

const Tick = () => (
  <svg width='10' height='10' viewBox='0 0 10 10' fill='none'>
    <path
      d='M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z'
      fill='currentColor'
    />
  </svg>
)

const BlueTick = () => (
  <svg width='16' height='17' viewBox='0 0 16 17' fill='none'>
    <path
      d='M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z'
      fill='currentColor'
    />
  </svg>
)
