import Progress from '@comfortdelgro/react-compass-old/progress'
// import {Progress as StaticProgress} from '@comfortdelgro/static'

function CircularSize() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <span>
        The default height/width is 40px. In this example, we tailored it to be
        70px
      </span>
      <br />
      <Progress.Circular variant='indeterminate' size={70} />
      {/* <StaticProgress.Circular variant='indeterminate' size={70} /> */}
    </div>
  )
}

export default CircularSize
