import Progress from '@comfortdelgro/react-compass/progress'

function CircularColor() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Progress.Circular variant='indeterminate' color='red' />
      <br />
      <Progress.Circular variant='indeterminate' color='green' />
      <br />
      <Progress.Circular variant='indeterminate' color='purple' />
    </div>
  )
}

export default CircularColor
