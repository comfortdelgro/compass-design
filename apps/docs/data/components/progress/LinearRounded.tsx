import Progress from '@comfortdelgro/react-compass-old/progress'
// import {Progress as StaticProgress} from '@comfortdelgro/static'

function LinearRounded() {
  return (
    <div>
      <Progress.Linear variant='indeterminate' size={10} rounded />
      {/* <StaticProgress.Linear variant='indeterminate' size={10} rounded /> */}
    </div>
  )
}

export default LinearRounded
