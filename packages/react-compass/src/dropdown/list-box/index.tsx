import {AriaListBoxOptions, useListBox} from '@react-aria/listbox'
import {ComboBoxState} from '@react-stately/combobox'
import React from 'react'
import Header from '../header'
import Option from '../option'

interface Props<T = unknown> extends AriaListBoxOptions<T> {
  state: ComboBoxState<T>
  headerTitle: string | undefined
  headerOnClick: (e: unknown) => void
  listBoxRef: React.RefObject<HTMLUListElement>
}

const ListBox: React.FC<Props> = (props) => {
  const ref = React.useRef<HTMLUListElement>(null)
  const {listBoxRef = ref, state} = props
  const {listBoxProps} = useListBox(
    {...props, ...listBoxRef},
    state,
    listBoxRef,
  )

  return (
    <>
      {props.headerTitle && (
        <Header title={props.headerTitle} onPress={props?.headerOnClick} />
      )}
      <ul {...listBoxProps} ref={listBoxRef}>
        {[...state.collection].map((item) => (
          <Option key={item.key} item={item} state={state} />
        ))}
      </ul>
    </>
  )
}

export default ListBox
