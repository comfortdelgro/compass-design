import React from 'react'
import Header from '../header'
import {DropdownItemProps} from '../item'
import Option from '../option'
import {
  getDistanceBetweenElements,
  getListBoxCollection,
  SectionCollection,
  useIsInViewport,
} from '../utils'
import {StyledLoading, StyledSection} from './index.styles'

interface Props {
  isLoading: boolean
  disabledKeys: React.Key[]
  focusKey: React.Key | undefined
  headerTitle: string | undefined
  currentKey: React.Key | undefined
  dropdownType: 'select' | 'combobox' | 'flag'
  listBoxRef: React.RefObject<HTMLUListElement>
  collection: Array<
    React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
  >
  sectionCollection: SectionCollection[]
  onLoadMore: () => void
  onHover: (key: React.Key | null) => void
  onSelect: (key: React.Key) => void
  headerOnClick: (e: unknown) => void
}

function ListBox(props: Props) {
  const ref = React.useRef(null)
  const {
    listBoxRef = ref,
    collection,
    currentKey,
    focusKey,
    disabledKeys,
    dropdownType,
    sectionCollection,
    onHover,
    onSelect,
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
            {listBoxCollection.map((item) => (
              <div key={item.id}>
                {item.title && <StyledSection>{item.title}</StyledSection>}
                {item.children.map((c) =>
                  c ? (
                    <Option
                      key={c.key}
                      item={c}
                      disabledKeys={disabledKeys}
                      currentKey={currentKey}
                      focusKey={focusKey}
                      dropdownType={dropdownType}
                      onHover={onHover}
                      onSelect={onSelect}
                    />
                  ) : null,
                )}
              </div>
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
