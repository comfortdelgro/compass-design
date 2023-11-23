import {Progress} from '@comfortdelgro/react-compass'

function CircularIndeterminate() {
  return (
    <div
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <Progress.Circular variant='indeterminate' />
    </div>
  )
}

export default CircularIndeterminate
