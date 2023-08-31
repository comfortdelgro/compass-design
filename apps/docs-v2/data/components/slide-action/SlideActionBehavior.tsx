import {SlideAction, Typography} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export default function SliderActionBehaviorDocs() {
  const [countSuccess, setCountSuccess] = useState(0)

  return (
    <>
      <Typography.Body variant='body3' css={{marginBottom: '$4'}}>
        Success count: <strong>{`${countSuccess}`}</strong>
      </Typography.Body>

      <SlideAction
        color='#475569'
        enableDragAfterSuccess
        onSwipeEnd={() => setCountSuccess((currState) => currState + 1)}
      >
        Can slide after success
      </SlideAction>
    </>
  )
}
