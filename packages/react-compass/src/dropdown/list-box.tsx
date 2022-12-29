import {AriaListBoxOptions, useListBox, useOption} from '@react-aria/listbox'
import {ComboBoxState} from '@react-stately/combobox'
// import {Node} from '@react-types/shared'
import React, {Key} from 'react'
import {Node} from '../tabs/types'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props<T = unknown> extends AriaListBoxOptions<T> {
  state: ComboBoxState<T>
}

const ListBox = React.forwardRef<HTMLUListElement, Props>(
  ({state, ...props}, ref) => {
    const listBoxRef = useDOMRef<HTMLUListElement>(ref)
    const {listBoxProps} = useListBox(props, state, listBoxRef)

    return (
      <ul
        {...listBoxProps}
        ref={listBoxRef}
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          maxHeight: 150,
          overflow: 'auto',
          minWidth: 200,
        }}
      >
        {[...state.collection].map((item) => (
          <Option key={item.key} item={item} state={state} />
        ))}
      </ul>
    )
  },
)

export default ListBox

interface ExtendedOptionsProps<T = unknown> {
  state: ComboBoxState<T>
  key: Key
  item: Node<T>
}

const Option = React.forwardRef<HTMLLIElement, ExtendedOptionsProps>(
  ({item, state}, ref) => {
    const optionRef = useDOMRef<HTMLLIElement>(ref)
    const {optionProps, isSelected, isFocused, isDisabled} = useOption(
      {key: item.key},
      state,
      optionRef,
    )

    let backgroundColor
    let color = 'black'

    if (isSelected) {
      backgroundColor = 'blueviolet'
      color = 'white'
    } else if (isFocused) {
      backgroundColor = 'gray'
    } else if (isDisabled) {
      backgroundColor = 'transparent'
      color = 'gray'
    }

    return (
      <li
        {...optionProps}
        ref={optionRef}
        style={{
          background: backgroundColor,
          color: color,
          padding: '2px 5px',
          outline: 'none',
          cursor: 'pointer',
        }}
      >
        {item.rendered}
      </li>
    )
  },
)
