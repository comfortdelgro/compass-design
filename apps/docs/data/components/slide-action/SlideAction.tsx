import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export default function SliderActionDocs() {
  const [status, setStatus] = useState(false)

  return (
    <Column>
      <Typography.Body variant='body2'>
        When users swiped all the way to the end, we can call it a successful or
        confirmatory action.
      </Typography.Body>

      <SlideAction
        label='Swipe to confirm'
        onSwipeEnd={() => {
          // do sth when users swiped to the end, e.g. call API, mutation data, etc...
          setStatus(true)
        }}
      />

      <Typography.Body variant='body3'>
        Status:{' '}
        {status ? (
          <strong style={{color: 'var(--cdg-color-success)'}}>
            Confirmed! 
          </strong>
        ) : (
          'Waiting for confirmation'
        )}
      </Typography.Body>
    </Column>
  )
}
