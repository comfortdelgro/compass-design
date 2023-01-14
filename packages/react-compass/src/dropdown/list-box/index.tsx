import {AriaListBoxOptions, useListBox} from '@react-aria/listbox'
import {ComboBoxState} from '@react-stately/combobox'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import Header from '../header'
import Option from '../option'

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
      <div {...listBoxProps} ref={listBoxRef}>
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
