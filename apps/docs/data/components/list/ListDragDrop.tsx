import {DragAndDropList} from '@comfortdelgro/react-compass-old'
// import {DragAndDropList as StaticDragAndDropList} from '@comfortdelgro/static'

import React, {Key} from 'react'

const DragAndDrop: React.FC = () => {
  const [arr, setArr] = React.useState<Key[]>(['red', 'green', 'blue'])
  return (
    <>
      <DragAndDropList onReorderByKeys={(a) => setArr(a)}>
        {arr.map((a) => (
          <DragAndDropList.Item key={a}>
            <div>{a}</div>
          </DragAndDropList.Item>
        ))}
      </DragAndDropList>

      {/* <StaticDragAndDropList onReorderByKeys={(a) => setArr(a)}>
        {arr.map((a) => (
          <StaticDragAndDropList.Item key={a}>
            <div>{a}</div>
          </StaticDragAndDropList.Item>
        ))}
      </StaticDragAndDropList> */}
    </>
  )
}

export default DragAndDrop
