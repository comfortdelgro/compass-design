/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import Option from '../option'

interface Props {
  collection: Array<React.DetailedReactHTMLElement<any, HTMLElement>>
  numberOfRows: number | undefined
}

const RowCalculator = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {collection, numberOfRows} = props
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
            currentKeys={[]}
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
