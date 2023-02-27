import {useOption} from '@react-aria/listbox'
import {ComboBoxState} from '@react-stately/combobox'
import React, {Key} from 'react'
import {DropdownItemProps} from '../item'
import {
  OptionVariantProps,
  StyledColor,
  StyledContent,
  StyledIcon,
  StyledOption,
} from './index.styles'

interface Props<T = unknown> extends OptionVariantProps {
  state: ComboBoxState<T>
  key: Key
  item: Node<T>
}

function Option({item, state}: Props) {
  const ref = React.useRef(null)
  const {optionProps, isSelected, isFocused, isDisabled} = useOption(
    {key: item.key},
    state,
    ref,
  )
  const {type = 'icon', leftIcon, rightIcon, rightColor} = item.props ?? {}

  return (
    <StyledOption
      {...optionProps}
      ref={ref}
      isFocused={isFocused}
      isSelected={isSelected}
      isDisabled={isDisabled}
    >
      {leftIcon && <StyledIcon>{leftIcon}</StyledIcon>}
      <StyledContent>{item.rendered}</StyledContent>
      {type === 'icon' && rightIcon && <StyledIcon>{rightIcon}</StyledIcon>}
      {type === 'color' && rightColor && (
        <StyledColor css={{$$bg: rightColor}} />
      )}
    </StyledOption>
  )
}

export default Option

export interface Node<T> {
  type: string
  key: Key
  value: T
  level: number
  hasChildNodes: boolean
  childNodes: Iterable<Node<T>>
  rendered: React.ReactNode
  textValue: string
  'aria-label'?: string
  index?: number
  wrapper?: (element: React.ReactElement) => React.ReactElement
  parentKey?: Key
  prevKey?: Key
  nextKey?: Key
  props?: DropdownItemProps
  /** @private */
  shouldInvalidate?: (context: unknown) => boolean
}
