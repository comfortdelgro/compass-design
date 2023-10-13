import React from 'react'
import {DropdownItemProps} from '../item'
import Option from '../option'

interface Props {
  disabledKeys: React.Key[]
  focusKey: React.Key | undefined
  currentKey: React.Key | undefined
  type: 'heading' | 'color' | 'alignment'
  listBoxRef: React.RefObject<HTMLUListElement>
  collection: Array<
    React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  >
  onSelect: (key: React.Key) => void
}

function ListBox(props: Props) {
  const ref = React.useRef(null)
  const {
    focusKey,
    collection,
    currentKey,
    disabledKeys,
    listBoxRef = ref,
    onSelect,
  } = props

  return (
    <ul ref={listBoxRef}>
      {collection.map((item) => (
        <Option
          item={item}
          key={item.key}
          type={props.type}
          focusKey={focusKey}
          currentKey={currentKey}
          disabledKeys={disabledKeys}
          onSelect={onSelect}
        />
      ))}
    </ul>
  )
}

export default ListBox
