import {AriaListBoxOptions, useListBox, useOption} from '@react-aria/listbox'
import {ComboBoxState} from '@react-stately/combobox'
import React, {Key} from 'react'
import {Node} from '../tabs/types'
import {useDOMRef} from '../utils/use-dom-ref'
import Header from './header'

interface Props<T = unknown> extends AriaListBoxOptions<T> {
  state: ComboBoxState<T>
  headerTitle: string | undefined
  headerOnClick: (e: unknown) => void
}

const ListBox = React.forwardRef<HTMLDivElement, Props>(
  ({state, ...props}, ref) => {
    const listBoxRef = useDOMRef<HTMLDivElement>(ref)
    const {listBoxProps} = useListBox(props, state, listBoxRef)

    return (
      <div {...listBoxProps} ref={listBoxRef} className='dropdown-listbox'>
        {props.headerTitle && (
          <Header title={props.headerTitle} onPress={props?.headerOnClick} />
        )}
        <ul>
          {[...state.collection].map((item) => (
            <Option key={item.key} item={item} state={state} />
          ))}
        </ul>
      </div>
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
    const {optionProps, isSelected, isDisabled} = useOption(
      {key: item.key},
      state,
      optionRef,
    )

    let backgroundColor
    let color = 'black'

    if (isSelected) {
      backgroundColor = '#F9F9F9'
      color = '333333'
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
        }}
      >
        {item.rendered}
      </li>
    )
  },
)
