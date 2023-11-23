import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'
import {useState} from 'react'

export default function SliderActionDocs() {
  const [slideStatus, setSlideStatus] = useState(false)

  return (
    <Column>
      <Typography.Body variant='body2'>
        When users swiped all the way to the end, we can call it a successful or
        confirmatory action.
      </Typography.Body>
      <Typography.Body variant='body3' css={{color: '$grayShades60'}}>
        The component below will be reset 1000ms after that.
      </Typography.Body>

      <SlideAction
        label='Swipe to purchase'
        onChange={(isSuccess) => setSlideStatus(isSuccess)}
        onSwipeEnd={(reset) => {
          console.log('success')
          // do sth when users swiped to the end
          setTimeout(() => {
            reset()
          }, 1000)
        }}
      />

      <Typography.Body variant='body3'>
        Status: <strong>{`${slideStatus}`}</strong>
      </Typography.Body>
    </Column>
  )
}
