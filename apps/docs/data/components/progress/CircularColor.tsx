import Progress from '@comfortdelgro/react-compass-old/progress'
// import {Progress as StaticProgress} from '@comfortdelgro/static'

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
      {/* <StaticProgress.Circular variant='indeterminate' color='red' /> */}
      <br />
      <Progress.Circular variant='indeterminate' color='green' />
      {/* <StaticProgress.Circular variant='indeterminate' color='green' /> */}
      <br />
      <Progress.Circular variant='indeterminate' color='blue' />
      {/* <StaticProgress.Circular variant='indeterminate' color='blue' /> */}
    </div>
  )
}

export default CircularColor
