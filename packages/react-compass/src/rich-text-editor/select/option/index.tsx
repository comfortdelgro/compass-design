import React, {Key} from 'react'
import {DropdownItemProps} from '../item'
import {
  OptionVariantProps,
  StyledContent,
  StyledOption,
  StyledRightIcon,
} from './index.styles'

interface Props extends OptionVariantProps {
  key: Key | null
  disabledKeys: React.Key[]
  focusKey: React.Key | undefined
  currentKey: React.Key | undefined
  type: 'heading' | 'color' | 'alignment'
  item: React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  onSelect: (key: React.Key) => void
}

function Option({
  item,
  currentKey,
  focusKey,
  disabledKeys,
  type,
  onSelect,
}: Props) {
  const ref = React.useRef(null)
  const {children} = item.props
  const isSelected = React.useMemo(() => currentKey == item.key, [currentKey])
  const isFocused = React.useMemo(() => focusKey == item.key, [focusKey])
  const isDisabled = React.useMemo(
    () => (item.key ? [...disabledKeys].includes(item.key) : false),
    [disabledKeys],
  )

  const handleSelect = () => {
    if (item.key && !isDisabled) onSelect(item.key)
  }

  return (
    <StyledOption
      ref={ref}
      isFocused={isFocused}
      isSelected={isSelected}
      onClick={handleSelect}
      isDisabled={isDisabled}
    >
      <StyledContent>{children}</StyledContent>
      {type !== 'color' && (
        <StyledRightIcon isSelected={isSelected}>
          <svg
            width='16'
            height='17'
            viewBox='0 0 16 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z'
              fill='#0142AF'
            />
          </svg>
        </StyledRightIcon>
      )}
    </StyledOption>
  )
}

export default Option
