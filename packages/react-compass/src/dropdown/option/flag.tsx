import {useOption} from '@react-aria/listbox'
import {ComboBoxState} from '@react-stately/combobox'
import React, {Key} from 'react'
import {DropdownItemProps} from '../item'
import {countries, Flag} from '../utils'
import {
  OptionVariantProps,
  StyledContent,
  StyledFlag,
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
      {currentState?.['alpha-3'] && (
        <StyledFlag>
          <Flag iso={currentState['alpha-2']} />
        </StyledFlag>
      )}
      <StyledContent>{item.rendered}</StyledContent>
      {isSelected && (
        <StyledIcon>
          <Tick />
        </StyledIcon>
      )}
    </StyledOption>
  )
}

export default Option

const Tick = () => (
  <svg width='16' height='17' viewBox='0 0 16 17' fill='none'>
    <path
      d='M15.0264 3.47972C15.4356 3.89643 15.4356 4.56984 15.0264 4.98655L6.64494 13.5208C6.23569 13.9375 5.57434 13.9375 5.16509 13.5208L0.973465 9.25369C0.564346 8.83697 0.564346 8.16357 0.973465 7.74685C1.38265 7.33014 2.04596 7.33014 2.45521 7.74685L5.87555 11.2572L13.5465 3.47972C13.9558 3.06234 14.6171 3.06234 15.0264 3.47972Z'
      fill='#0142AF'
    />
  </svg>
)
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
