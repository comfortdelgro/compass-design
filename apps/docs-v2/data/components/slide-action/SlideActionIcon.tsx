import {SlideAction} from '@comfortdelgro/react-compass'
import {faPowerOff} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function SliderActionIconDocs() {
  return (
    <SlideAction
      css={{
        border: 'none',
        backgroundColor: 'rgba(61, 127, 118, 0.5)',
      }}
      color='#fff'
      icon={<FontAwesomeIcon icon={faPowerOff} color='red' size='lg' />}
      labelType='slide'
    >
      Slide to power off
    </SlideAction>
  )
}
