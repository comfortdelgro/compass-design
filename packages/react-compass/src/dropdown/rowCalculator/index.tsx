/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import BaseListBox, {BaseListBoxProps} from '../list-box/base'
import {StyledSection} from '../list-box/index.styles'
import Option from '../option'
import {StyledCalc} from './index.styles'

interface Props extends BaseListBoxProps {
  dropdownType: 'select' | 'combobox' | 'flag'
  numberOfRows: number | undefined
}

const RowCalculator = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    dropdownType,
    collection,
    rootChildren,
    sectionCollection,
    listBoxRef,
    isLoading,
    numberOfRows,
    onLoadMore,
  } = props
  const visualizeList = useDOMRef<HTMLDivElement>(ref)

  return numberOfRows && numberOfRows >= 0 ? (
    <StyledCalc ref={visualizeList}>
      <BaseListBox
        isLoading={isLoading}
        collection={collection}
        listBoxRef={listBoxRef}
        rootChildren={rootChildren}
        sectionCollection={sectionCollection}
        renderOptions={(l) =>
          l.slice(0, Math.min(numberOfRows, collection.length)).map((item) => (
            <div key={item.id}>
              {item.title && <StyledSection>{item.title}</StyledSection>}
              {item.children.map((c) =>
                c ? (
                  <Option
                    item={c}
                    key={c.key}
                    focusKey={undefined}
                    currentKey={undefined}
                    dropdownType={dropdownType}
                    disabledKeys={[]}
                    onHover={() => {
                      //
                    }}
                    onSelect={() => {
                      //
                    }}
                  />
                ) : null,
              )}
            </div>
          ))
        }
        onLoadMore={onLoadMore}
      />
    </StyledCalc>
  ) : null
})

export default RowCalculator
