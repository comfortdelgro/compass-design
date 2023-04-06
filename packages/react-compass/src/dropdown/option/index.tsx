import React, {Key} from 'react'
import {countries, Flag} from '../flags'
import {DropdownItemProps} from '../item'
import {
  OptionVariantProps,
  StyledColor,
  StyledContent,
  StyledFlag,
  StyledIcon,
  StyledOption,
} from './index.styles'

interface Props extends OptionVariantProps {
  key: Key | null
  item: React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  disabledKeys: Iterable<React.Key>
  currentKey: React.Key | undefined
  focusKey: React.Key | undefined
  dropdownType: 'select' | 'combobox' | 'flag'
  onHover: (key: React.Key | null) => void
  onSelect: (key: React.Key) => void
}

function Option({
  item,
  currentKey,
  focusKey,
  disabledKeys,
  dropdownType,
  onHover,
  onSelect,
}: Props) {
  const ref = React.useRef(null)
  const {type = 'icon', leftIcon, rightIcon, rightColor, children} = item.props
  const isSelected = React.useMemo(() => currentKey === item.key, [currentKey])
  const isFocused = React.useMemo(() => focusKey === item.key, [focusKey])
  const isDisabled = React.useMemo(
    () => (item.key ? [...disabledKeys].includes(item.key) : false),
    [disabledKeys],
  )
  const handleSelect = () => {
    if (item.key && !isDisabled) onSelect(item.key)
  }

  const flag = React.useMemo(() => {
    if (dropdownType === 'flag') {
      return countries.find(
        (c) =>
          c.name === item.key ||
          c['alpha-2'] === item.key ||
          c['alpha-3'] === item.key ||
          c['phone-code'] === item.key ||
          c['country-code'] === item.key,
      )
    }
    return null
  }, [dropdownType])

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
      {flag && (
        <StyledFlag>
          <Flag iso={flag['alpha-2']} />
        </StyledFlag>
      )}
      {leftIcon && <StyledIcon>{leftIcon}</StyledIcon>}
      <StyledContent>{children}</StyledContent>
      {type === 'icon' && rightIcon && <StyledIcon>{rightIcon}</StyledIcon>}
      {type === 'color' && rightColor && (
        <StyledColor css={{$$bg: rightColor}} />
      )}
    </StyledOption>
  )
}

export default Option
