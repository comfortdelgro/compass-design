import React, {Key} from 'react'
import {DropdownItemProps} from '../item'
import {
  OptionVariantProps,
  StyledColor,
  StyledContent,
  StyledIcon,
  StyledOption,
} from './index.styles'

interface Props extends OptionVariantProps {
  key: Key | null
  item: React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  disabledKeys: Iterable<React.Key>
  currentKey: React.Key | undefined
  focusKey: React.Key | undefined
  onHover: (key: React.Key | null) => void
  onSelect: (key: React.Key) => void
}

function Option({
  item,
  currentKey,
  focusKey,
  disabledKeys,
  onHover,
  onSelect,
}: Props) {
  const ref = React.useRef(null)
  const {type = 'icon', leftIcon, rightIcon, rightColor, children} = item.props
  const isSelected = currentKey === item.key
  const isFocused = focusKey === item.key
  const isDisabled = item.key ? [...disabledKeys].includes(item.key) : false
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

// export interface Node<T> {
//   type: string
//   key: Key
//   value: T
//   level: number
//   hasChildNodes: boolean
//   childNodes: Iterable<Node<T>>
//   rendered: React.ReactNode
//   textValue: string
//   'aria-label'?: string
//   index?: number
//   wrapper?: (element: React.ReactElement) => React.ReactElement
//   parentKey?: Key
//   prevKey?: Key
//   nextKey?: Key
//   props?: DropdownItemProps
//   /** @private */
//   shouldInvalidate?: (context: unknown) => boolean
// }
