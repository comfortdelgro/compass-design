import {useOption} from '@react-aria/listbox'
import {ComboBoxState} from '@react-stately/combobox'
import React, {Key} from 'react'
import {DropdownItemProps} from '../item'
import { countries, Flag } from '../utils'
import {
  OptionVariantProps,
  StyledContent,
  StyledFlag,
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

  const currentState = React.useMemo(
    () =>
    countries.find(
        (country) =>
        country.name === item.key ||
        country['alpha-2'] === item.key ||
        country['alpha-3'] === item.key ||
        country['phone-code'] === item.key ||
        country['country-code'] === item.key,
      ),
    [item],
  )

  return (
    <StyledOption
      {...optionProps}
      ref={ref}
      isFocused={isFocused}
      isSelected={isSelected}
      isDisabled={isDisabled}
    >
      {currentState?.['alpha-3'] && (<StyledFlag><Flag iso={currentState['alpha-3']} /></StyledFlag>)}
      <StyledContent>{item.rendered}</StyledContent>
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
