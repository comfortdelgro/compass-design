import React from 'react'
import BaseListBox, {BaseListBoxProps} from '../../dropdown/list-box/base'
import {
  StyledRightIcon,
  StyledSection,
} from '../../dropdown/list-box/index.styles'
import Option from '../option'

interface Props extends BaseListBoxProps {
  currentKeys: React.Key[]
  disabledKeys: React.Key[]
  focusKey: React.Key | undefined
  listRef: React.MutableRefObject<Array<HTMLLIElement | null>>
  onSelect: (key: React.Key) => void
}

function ListBox(props: Props) {
  const ref = React.useRef(null)
  const {
    listRef,
    focusKey,
    isLoading,
    collection,
    currentKeys,
    disabledKeys,
    rootChildren,
    listBoxRef = ref,
    sectionCollection,
    onSelect,
    onLoadMore,
  } = props

  const Tick = () => (
    <svg width='10' height='10' viewBox='0 0 10 10' fill='none'>
      <path
        d='M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z'
        fill='currentColor'
      />
    </svg>
  )

  const BlueTick = () => (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z'
        fill='currentColor'
      />
    </svg>
  )

  const renderCheckmark = (
    checkmark: string,
    isClickable: boolean,
    isChecked: boolean,
  ) => {
    if (!isClickable || !isChecked) return <></>

    switch (checkmark) {
      case 'checkbox':
        return <Tick />
      case 'tick':
        return <BlueTick />
      default:
        return <></>
    }
  }

  return (
    <BaseListBox
      isLoading={isLoading}
      listBoxRef={listBoxRef}
      collection={collection}
      sectionCollection={sectionCollection}
      rootChildren={rootChildren}
      onLoadMore={onLoadMore}
      renderOptions={(l) =>
        l.map((item, index) => (
          <div key={item.id}>
            {item.title && (
              <StyledSection
                isClickable={item.isClickable ?? false}
                onClick={() => item.onClick?.(item.title)}
              >
                {item.title}
                <StyledRightIcon>
                  {renderCheckmark(
                    item.checkmark ?? 'tick',
                    item.isClickable ?? false,
                    item.isChecked ?? false,
                  )}
                </StyledRightIcon>
              </StyledSection>
            )}
            {item.children.map((c) =>
              c ? (
                <Option
                  ref={(node) => {
                    listRef.current[index] = node
                  }}
                  item={c}
                  key={c.key}
                  focusKey={focusKey}
                  currentKeys={currentKeys}
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
