import {Wizard} from '@comfortdelgro/react-compass-old'
// import {Wizard as StaticsWizard} from '@comfortdelgro/static'

function BasicExample() {
  return (
    <>
      <Wizard items={['Step 1', 'Step 2', 'Step 3']} currentStep={1} />
      {/* <StaticsWizard items={['Step 1', 'Step 2', 'Step 3']} currentStep={1} /> */}
    </>
  )
}

export default BasicExample
