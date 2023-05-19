/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import Option from '../option'

interface Props {
  collection: Array<React.DetailedReactHTMLElement<any, HTMLElement>>
  numberOfRows: number | undefined
  type: 'select' | 'combobox' | 'flag'
}

const RowCalculator = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {type, collection, numberOfRows} = props
  const visualizeList = useDOMRef<HTMLDivElement>(ref)
  return numberOfRows && numberOfRows >= 0 ? (
    <div
      ref={visualizeList}
      style={{
        position: 'absolute',
        top: 0,
        left: '-9999px',
        overflow: 'hidden',
        visibility: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: -99999999,
      }}
    >
      {collection
        .slice(0, Math.min(numberOfRows, collection.length))
        .map((c) => (
          <Option
            item={c}
            key={c.key}
            focusKey={undefined}
            currentKey={undefined}
            dropdownType={type}
            disabledKeys={[]}
            onHover={() => {
              //
            }}
            onSelect={() => {
              //
            }}
          />
        ))}
    </div>
  ) : null
})

export default RowCalculator
