import CheckIcon from '@comfortdelgro/compass-icons/react/tick'
import {
  SlideAction,
  Typography,
  type SlideActionOnSwipeEnd,
} from '@comfortdelgro/react-compass'
import {useCallback, useState} from 'react'

export default function SliderActionInteractiveDocs() {
  const [status, setStatus] = useState(false)

  const handleOnSwipeEnd = useCallback<SlideActionOnSwipeEnd>((reset) => {
    // do sth when users swiped to the end, e.g. call API, mutation data, etc...

    setTimeout(() => {
      reset()
    }, 1000)
  }, [])

  return (
    <>
      <SlideAction
        label='Swipe to confirm'
        color={status ? '--cdg-color-success' : undefined}
        icon={
          status ? <CheckIcon color='#fff' width={20} height={20} /> : undefined
        }
        onChange={setStatus}
        onSwipeEnd={handleOnSwipeEnd}
      />

      <Typography.Body variant='body3' style={{marginTop: '1rem'}}>
        Status:{' '}
        {status ? (
          <strong style={{color: 'var(--cdg-color-success)'}}>
            Confirmed!
          </strong>
        ) : (
          'Waiting for confirmation'
        )}
      </Typography.Body>
    </>
  )
}
