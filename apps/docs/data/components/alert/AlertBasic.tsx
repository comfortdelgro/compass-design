import Alert from '@comfortdelgro/react-compass/alert'

function AlertBasic() {
  return (
    <div>
      <Alert color='info'> This is an info alert — check it out! </Alert>
      <br />
      <Alert color='success'> This is a sucess alert — check it out! </Alert>
      <br />
      <Alert color='danger'> This is a danger alert — check it out! </Alert>
      <br />
      <Alert color='warning'> This is a warning alert — check it out! </Alert>
    </div>
  )
}

export default AlertBasic
