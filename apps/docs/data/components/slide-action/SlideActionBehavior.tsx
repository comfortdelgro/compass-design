import {SlideAction, Typography} from '@comfortdelgro/react-compass-old'
import {useState} from 'react'

export default function SliderActionBehaviorDocs() {
  const [countSuccess, setCountSuccess] = useState(0)

  return (
    <>
      <Typography.Body variant='body3' css={{marginBottom: '$4'}}>
        Successful / confirmatory action count:{' '}
        <strong>{`${countSuccess}`}</strong>
      </Typography.Body>

      <SlideAction
        color='#475569'
        allowSwipeAfterEnd
        onSwipeEnd={() => setCountSuccess((currState) => currState + 1)}
      >
        Can swipe after success
      </SlideAction>
    </>
  )
}
