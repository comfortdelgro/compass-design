import {Spinner} from '@comfortdelgro/react-compass'

function SpinnerBasic() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 32,
      }}
    >
      <Spinner size='2xl' />
      <Spinner size='xl' />
      <Spinner size='lg' />
      <Spinner size='md' />
      <Spinner size='sm' />
    </div>
  )
}

export default SpinnerBasic
