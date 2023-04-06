import React from 'react'
import Header from '../../dropdown/header'
import {DropdownItemProps} from '../../dropdown/item'
import {StyledLoading} from '../../dropdown/list-box/index.styles'
import {getDistanceBetweenElements, useIsInViewport} from '../../dropdown/utils'
import Option from '../option'

interface Props {
  collection: Array<
    React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  >
  disabledKeys: Iterable<React.Key>
  focusKey: React.Key | undefined
  currentKeys: Iterable<React.Key>
  headerTitle: string | undefined
  isLoading: boolean
  onLoadMore: () => void
  onHover: (key: React.Key | null) => void
  onSelect: (key: React.Key) => void
  headerOnClick: (e: unknown) => void
  listBoxRef: React.RefObject<HTMLUListElement>
}

function ListBox(props: Props) {
  const ref = React.useRef(null)
  const {
    listBoxRef = ref,
    collection,
    currentKeys,
    focusKey,
    disabledKeys,
    onHover,
    onSelect,
  } = props

  const lastEl = React.useRef<HTMLDivElement | null>(null)
  const standEl = React.useRef<HTMLDivElement | null>(null)
  const isInViewport = useIsInViewport(lastEl)
  React.useEffect(() => {
    if (lastEl.current && standEl.current) {
      const distance = getDistanceBetweenElements(
        lastEl.current,
        standEl.current,
      )
      if (isInViewport && distance > 0 && distance <= 1) {
        props.onLoadMore()
      }
    }
  }, [isInViewport])

  return (
    <>
      {props.headerTitle && (
        <Header title={props.headerTitle} onPress={props?.headerOnClick} />
      )}
      <ul ref={listBoxRef}>
        {props.isLoading ? (
          <StyledLoading>
            <div className='spinner'>
              <div className='spinner-1' />
              <div className='spinner-2' />
              <div className='spinner-3' />
              <div />
            </div>
          </StyledLoading>
        ) : (
          <>
            {[...collection].map((item) => (
              <Option
                key={item.key}
                item={item}
                disabledKeys={disabledKeys}
                currentKeys={currentKeys}
                focusKey={focusKey}
                onHover={onHover}
                onSelect={onSelect}
              />
            ))}
            {[...collection].length > 0 && (
              <div style={{height: 1}} ref={lastEl} />
            )}
          </>
        )}
      </ul>
      <div style={{height: 1}} ref={standEl} />
    </>
  )
}

export default ListBox
