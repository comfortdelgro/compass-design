import {useOption} from '@react-aria/listbox'
import {ComboBoxState} from '@react-stately/combobox'
import React, {Key} from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
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

const Option = React.forwardRef<HTMLLIElement, Props>(({item, state}, ref) => {
  const optionRef = useDOMRef<HTMLLIElement>(ref)
  const {optionProps, isSelected, isDisabled} = useOption(
    {key: item.key},
    state,
    optionRef,
  )
  const {type = 'icon', leftIcon, rightIcon, rightColor} = item.props ?? {}

  return (
    <StyledOption
      {...optionProps}
      ref={optionRef}
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
})

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
