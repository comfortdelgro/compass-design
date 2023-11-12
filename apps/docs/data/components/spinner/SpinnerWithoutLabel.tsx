import Spinner from '@comfortdelgro/react-compass-old/spinner'

function SpinnerWithoutLabel() {
  return (
    <div>
      <Spinner size='2xl' label={false} />
      <Spinner size='xl' label={false} />
      <Spinner size='lg' label={false} />
      <Spinner size='md' label={false} />
      <Spinner size='sm' label={false} />
    </div>
  )
}

export default SpinnerWithoutLabel
