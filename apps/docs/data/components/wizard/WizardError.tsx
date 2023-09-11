import {Wizard} from '@comfortdelgro/react-compass'

function BasicExample() {
  return (
    <Wizard
      items={['Value1', 'Value2', 'Value3', 'Value4']}
      errorSteps={[2]}
      currentStep={3}
    />
  )
}

export default BasicExample
