import Alert from '@comfortdelgro/react-compass-old/alert'

function AlertCustom() {
  return (
    <div>
      <Alert
        color='success'
        css={{backgroundColor: 'orange', '&:hover': {backgroundColor: 'red'}}}
      >
        This is a success alert — check it out!
      </Alert>
    </div>
  )
}

export default AlertCustom
