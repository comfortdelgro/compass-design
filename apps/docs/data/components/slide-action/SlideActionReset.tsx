import {
  Button,
  SlideAction,
  Typography,
  type SlideActionOnSwipeEnd,
  type SlideActionRef,
} from '@comfortdelgro/react-compass'
import {useCallback, useRef} from 'react'
import classes from './styles/slide-action-document.module.css'

export default function SlideActionResetDocs() {
  const lastSlideRef = useRef<SlideActionRef>(null)
  const handleOnSwipeEnd = useCallback<SlideActionOnSwipeEnd>((reset) => {
    // do sth when users swiped to the end
    setTimeout(() => {
      reset()
    }, 1000)
  }, [])

  return (
    <div className={classes.exampleContainer}>
      <Typography.Body variant='body2'>
        1. Call <code>reset</code> function that <code>onSwipeEnd</code>{' '}
        callback provided.
      </Typography.Body>
      <SlideAction
        label='Reset 1s after confirmation'
        onSwipeEnd={handleOnSwipeEnd}
      />

      <Typography.Body variant='body2'>
        2. Call <code>resetState</code> function from component ref.
      </Typography.Body>
      <Button
        variant='danger'
        type='button'
        onClick={() => lastSlideRef.current?.resetState()}
        style={{marginBottom: '1rem'}}
      >
        Reset below SlideAction
      </Button>
      <SlideAction ref={lastSlideRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </SlideAction>
    </div>
  )
}
