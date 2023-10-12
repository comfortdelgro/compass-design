import Progress from '@comfortdelgro/react-compass/progress'
// import {Progress as StaticProgress} from '@comfortdelgro/static'

function CircularIndeterminate() {
  return (
    <div
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <Progress.Circular variant='indeterminate' />
      {/* <StaticProgress.Circular variant='indeterminate' /> */}
    </div>
  )
}

export default CircularIndeterminate
