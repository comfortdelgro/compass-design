import Progress from '@comfortdelgro/react-compass/progress'
// import {Progress as StaticProgress} from '@comfortdelgro/static'

function LinearColor() {
  return (
    <div>
      <Progress.Linear variant='indeterminate' color='red' />
      {/* <StaticProgress.Linear variant='indeterminate' color='red' /> */}
    </div>
  )
}

export default LinearColor
