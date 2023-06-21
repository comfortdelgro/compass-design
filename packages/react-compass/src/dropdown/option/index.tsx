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
  disabledKeys: React.Key[]
  focusKey: React.Key | undefined
  currentKey: React.Key | undefined
  dropdownType: 'select' | 'combobox' | 'flag'
  item: React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  onSelect: (key: React.Key) => void
}

function Option({
  item,
  currentKey,
  focusKey,
  disabledKeys,
  dropdownType,
  onSelect,
}: Props) {
  const ref = React.useRef<HTMLLIElement>(null)
  const {type = 'icon', leftIcon, rightIcon, rightColor, children} = item.props
  const isSelected = React.useMemo(() => currentKey == item.key, [currentKey])
  const isFocused = React.useMemo(() => focusKey == item.key, [focusKey])
  const isDisabled = React.useMemo(
    () => (item.key ? [...disabledKeys].includes(item.key) : false),
    [disabledKeys],
  )

  const handleSelect = () => {
    if (item.key && !isDisabled) onSelect(item.key)
  }

  const flag = React.useMemo(() => {
    if (dropdownType === 'flag') {
      return countries.find((c) => c['alpha-3'] === item.key)
    }
    return null
  }, [dropdownType])

  React.useEffect(() => {
    if (isFocused) {
      ref.current?.scrollIntoView({block: 'nearest'})
    }
  }, [isFocused])

  React.useEffect(() => {
    if (isSelected) {
      ref.current?.scrollIntoView({block: 'center'})
    }
  }, [isSelected])

  return (
    <StyledOption
      ref={ref}
      isFocused={isFocused}
      isSelected={isSelected}
      onClick={handleSelect}
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
