import Toggle from '@comfortdelgro/react-compass-old/toggle'

function ToggleCustomStyling() {
  return (
    <div>
      <Toggle css={{'&:hover': {background: 'red'}}} />
    </div>
  )
}

export default ToggleCustomStyling
