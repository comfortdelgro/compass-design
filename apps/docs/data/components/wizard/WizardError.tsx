import {Wizard} from '@comfortdelgro/react-compass-old'
// import {Wizard as StaticsWizard} from '@comfortdelgro/static'

function BasicExample() {
  return (
    <>
      <Wizard
        items={['Value1', 'Value2', 'Value3', 'Value4']}
        erroredSteps={[2]}
        currentStep={3}
      />

      {/* <StaticsWizard
        items={['Value1', 'Value2', 'Value3', 'Value4']}
        erroredSteps={[2]}
        currentStep={3}
      /> */}
    </>
  )
}

export default BasicExample
