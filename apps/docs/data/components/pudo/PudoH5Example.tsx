import {
  Column,
  Pudo,
  PudoValueChange,
  Typography,
} from '@comfortdelgro/react-compass'
import {useState} from 'react'
import {PreviewCode} from './Pudo'

export default function PudoH5ExampleDocs() {
  const [exampleValues, setExampleValues] = useState<PudoValueChange>()

  return (
    <Column>
      <Pudo
        items={[
          {name: 'pickUp', value: '', placeholder: 'Pick up from'},
          {name: 'des1', value: '', placeholder: 'Where to?', allowSwap: true},
        ]}
        onValuesChange={(value) => setExampleValues(value)}
        addItems={[{name: 'des2', value: '', placeholder: 'Where to?'}]}
        addItemsLabel='Add extra destination'
        removableItems={['des2']}
        removableLabel='Remove extra destination'
      />

      {exampleValues && (
        <>
          <Typography.Body variant='body3'>Values:</Typography.Body>
          <PreviewCode>{JSON.stringify(exampleValues, null, 2)}</PreviewCode>
        </>
      )}
    </Column>
  )
}
