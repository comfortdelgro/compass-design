import Progress from '@comfortdelgro/react-compass/progress'

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
