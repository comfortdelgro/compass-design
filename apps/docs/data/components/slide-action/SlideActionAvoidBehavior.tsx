import {SlideAction, Typography} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export default function SliderActionAvoidBehaviorDocs() {
  const [countSuccess, setCountSuccess] = useState(0)

  return (
    <>
      <Typography.Body variant='body3' style={{marginBottom: 'var(--cdg-spacing-4)'}}>
        Successful / confirmatory action count:{' '}
        <strong>{`${countSuccess}`}</strong>
      </Typography.Body>

      <SlideAction
        color='#475569'
        allowSwipeAfterEnd
        onSwipeEnd={() => setCountSuccess(countSuccess + 1)}
      >
        Can swipe after success
      </SlideAction>
    </>
  )
}
