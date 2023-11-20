import Alert from '@comfortdelgro/react-compass-old/alert'

function AlertDismissible() {
  return (
    <div>
      <Alert color='info' dismissible onDismiss={() => {}}>
        This is an info alert — check it out!
      </Alert>
    </div>
  )
}

export default AlertDismissible
