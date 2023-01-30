import {AriaListBoxOptions, useListBox} from '@react-aria/listbox'
import {SelectState} from '@react-stately/select'
import React from 'react'
import Header from '../header'
import Option from '../option/select'

interface Props<T = unknown> extends AriaListBoxOptions<T> {
  state: SelectState<T>
  headerTitle: string | undefined
  headerOnClick: (e: unknown) => void
  listBoxRef: React.RefObject<HTMLUListElement>
}

function ListBox(props: Props) {
  const ref = React.useRef(null)
  const {listBoxRef = ref, state} = props
  const {listBoxProps} = useListBox(props, state, listBoxRef)

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
