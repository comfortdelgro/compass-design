import React from 'react'
import Option from '../option'
import BaseListBox, {BaseListBoxProps} from './base'
import {StyledSection} from './index.styles'

interface Props extends BaseListBoxProps {
  disabledKeys: React.Key[]
  focusKey: React.Key | undefined
  currentKey: React.Key | undefined
  dropdownType: 'select' | 'combobox' | 'flag'
  onSelect: (key: React.Key) => void
}

function ListBox(props: Props) {
  const ref = React.useRef(null)
  const {
    focusKey,
    isLoading,
    collection,
    currentKey,
    dropdownType,
    disabledKeys,
    rootChildren,
    listBoxRef = ref,
    sectionCollection,
    onSelect,
    onLoadMore,
  } = props

  return (
    <BaseListBox
      isLoading={isLoading}
      listBoxRef={listBoxRef}
      collection={collection}
      sectionCollection={sectionCollection}
      onLoadMore={onLoadMore}
      rootChildren={rootChildren}
      renderOptions={(l) =>
        l.map((item) => (
          <div key={item.id}>
            {item.title && <StyledSection>{item.title}</StyledSection>}
            {item.children.map((c) =>
              c ? (
                <Option
                  item={c}
                  key={c.key}
                  focusKey={focusKey}
                  currentKey={currentKey}
                  dropdownType={dropdownType}
                  disabledKeys={disabledKeys}
                  onSelect={onSelect}
                />
              ) : null,
            )}
          </div>
        ))
      }
    />
  )
}

export default ListBox
