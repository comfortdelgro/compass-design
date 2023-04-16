import {AriaListBoxOptions, useListBox} from '@react-aria/listbox'
import {SelectState} from '@react-stately/select'
import React from 'react'
import {StyledLoading} from '../dropdown.styles'
import Header from '../header'
import Option from '../option/select'
import {getDistanceBetweenElements, useIsInViewport} from '../utils'

interface Props<T = unknown> extends AriaListBoxOptions<T> {
  state: SelectState<T>
  headerTitle: string | undefined
  isLoading: boolean
  headerOnClick: (e: unknown) => void
  onLoadMore: () => void
  listBoxRef: React.RefObject<HTMLUListElement>
}

function ListBox(props: Props) {
  const ref = React.useRef(null)
  const {listBoxRef = ref, state} = props
  const {listBoxProps} = useListBox(props, state, listBoxRef)

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
      <ul {...listBoxProps} ref={listBoxRef}>
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
            {[...state.collection].map((item) => (
              <Option key={item.key} item={item} state={state} />
            ))}
            {[...state.collection].length > 0 && (
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
