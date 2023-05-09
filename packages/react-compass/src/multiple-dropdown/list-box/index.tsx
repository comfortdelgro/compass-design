import React from 'react'
import BaseListBox, {BaseListBoxProps} from '../../dropdown/list-box/base'
import {StyledSection} from '../../dropdown/list-box/index.styles'
import Option from '../option'

interface Props extends BaseListBoxProps {
  currentKeys: React.Key[]
  disabledKeys: React.Key[]
  focusKey: React.Key | undefined
  onSelect: (key: React.Key) => void
  onHover: (key: React.Key | null) => void
}

function ListBox(props: Props) {
  const ref = React.useRef(null)
  const {
    focusKey,
    isLoading,
    collection,
    currentKeys,
    disabledKeys,
    rootChildren,
    listBoxRef = ref,
    sectionCollection,
    onHover,
    onSelect,
    onLoadMore,
  } = props

  return (
    <BaseListBox
      isLoading={isLoading}
      listBoxRef={listBoxRef}
      collection={collection}
      sectionCollection={sectionCollection}
      rootChildren={rootChildren}
      onLoadMore={onLoadMore}
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
                  currentKeys={currentKeys}
                  disabledKeys={disabledKeys}
                  onHover={onHover}
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
