import {SlideAction} from '@comfortdelgro/react-compass'

export default function SliderActionDocs() {
  return (
    <SlideAction
      label='Swipe to confirm'
      onSwipeEnd={() => {
        // do sth when users swiped to the end, e.g. call API, mutation data, etc...
      }}
    />
  )
}
