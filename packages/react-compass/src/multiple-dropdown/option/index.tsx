import React, {Key} from 'react'
import {DropdownItemProps} from '../../dropdown/item'
import {
  OptionVariantProps,
  StyledContent,
  StyledOption,
} from '../../dropdown/option/index.styles'
import {StyledRightIcon} from './index.styles'

interface Props extends OptionVariantProps {
  key: Key | null
  item: React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  disabledKeys: React.Key[]
  currentKeys: React.Key[]
  focusKey: React.Key | undefined
  onHover: (key: React.Key | null) => void
  onSelect: (key: React.Key) => void
}

function Option({
  item,
  currentKeys,
  focusKey,
  disabledKeys,
  onHover,
  onSelect,
}: Props) {
  const ref = React.useRef(null)
  const isSelected = React.useMemo(
    () => (item.key ? currentKeys.includes(item.key) : false),
    [currentKeys],
  )
  const isFocused = React.useMemo(() => focusKey === item.key, [focusKey])
  const isDisabled = React.useMemo(
    () => (item.key ? disabledKeys.includes(item.key) : false),
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
      onMouseOver={() => onHover(item.key)}
      onMouseOut={() => onHover(-1)}
      isDisabled={isDisabled}
    >
      <StyledContent>{item.props.children}</StyledContent>
      <StyledRightIcon isSelected={isSelected}>
        <div>
          <Tick />
        </div>
      </StyledRightIcon>
    </StyledOption>
  )
}

export default Option

const Tick = () => (
  <svg width='10' height='10' viewBox='0 0 10 10' fill='none'>
    <path
      d='M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z'
      fill='white'
    />
  </svg>
)
