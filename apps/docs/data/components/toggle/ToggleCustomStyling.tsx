import {Toggle} from '@comfortdelgro/react-compass'

function ToggleCustomStyling() {
  return (
    <div>
      <Toggle css={{'&:hover': {background: 'red'}}} />
    </div>
  )
}

export default ToggleCustomStyling
