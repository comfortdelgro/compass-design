import React from 'react'
import {pickChild} from '../../utils/pick-child'
import {default as DropdownHeader} from '../header'
import {DropdownItemProps} from '../item'
import {
  getDistanceBetweenElements,
  getListBoxCollection,
  ListBoxCollections,
  SectionCollection,
  useIsInViewport,
} from '../utils'
import {StyledLoading} from './index.styles'

interface Props {
  isLoading: boolean
  rootChildren: React.ReactNode
  listBoxRef: React.RefObject<HTMLUListElement>
  collection: Array<
    React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  >
  sectionCollection: SectionCollection[]

  onLoadMore: () => void
  renderOptions?: (l: ListBoxCollections[]) => React.ReactNode
}

export type BaseListBoxProps = Props

function BaseListBox(props: Props) {
  const ref = React.useRef(null)
  const {
    listBoxRef = ref,
    collection,
    rootChildren,
    sectionCollection,
    renderOptions,
  } = props

  const lastEl = React.useRef<HTMLDivElement | null>(null)
  const standEl = React.useRef<HTMLDivElement | null>(null)
  const isInViewport = useIsInViewport(lastEl)
  const listBoxCollection = React.useMemo(
    () => getListBoxCollection(sectionCollection, collection),
    [sectionCollection, collection],
  )

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

  const {child: DropdownHeaderElement} = pickChild<typeof DropdownHeader>(
    rootChildren,
    DropdownHeader,
  )

  return (
    <>
      {DropdownHeaderElement}
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
            {renderOptions?.(listBoxCollection)}
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

export default BaseListBox
