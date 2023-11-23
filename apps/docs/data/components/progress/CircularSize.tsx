import {Progress} from '@comfortdelgro/react-compass'

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
      <Progress.Circular variant='indeterminate' size={70} />
    </div>
  )
}

export default CircularSize
