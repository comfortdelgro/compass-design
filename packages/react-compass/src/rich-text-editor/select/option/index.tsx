import React, {Key} from 'react'
import {DropdownItemProps} from '../item'
import {OptionVariantProps, StyledContent, StyledOption} from './index.styles'

interface Props extends OptionVariantProps {
  key: Key | null
  disabledKeys: React.Key[]
  focusKey: React.Key | undefined
  currentKey: React.Key | undefined
  item: React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  onSelect: (key: React.Key) => void
}

function Option({item, currentKey, focusKey, disabledKeys, onSelect}: Props) {
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
    </StyledOption>
  )
}

export default Option
