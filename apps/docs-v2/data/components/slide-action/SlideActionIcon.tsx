import {SlideAction} from '@comfortdelgro/react-compass'
import {faPowerOff} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function SliderActionIconDocs() {
  return (
    <SlideAction
      icon={<FontAwesomeIcon icon={faPowerOff} color='#fff' size='xl' />}
      labelType='slide'
    >
      Slide to shutdown
    </SlideAction>
  )
}
