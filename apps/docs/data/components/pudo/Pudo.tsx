import {
  Column,
  Pudo,
  PudoValueChange,
  Typography,
} from '@comfortdelgro/react-compass'
import {useState} from 'react'
import pudoDocsClasses from './styles/pudo-docs.module.css'

export default function PudoDocs() {
  const [exampleValues, setExampleValues] = useState<PudoValueChange>()

  return (
    <Column>
      <Typography.Body
        variant='body3'
        css={{color: '$grayShades60', marginBottom: '1rem'}}
      >
        Default config: Minlength <strong>2</strong>, Maxlength{' '}
        <strong>3</strong>, Input&#39;s maxlength <strong>255</strong>
      </Typography.Body>

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
        isClearable
      />

      {exampleValues && (
        <>
          <Typography.Body variant='body3'>Values:</Typography.Body>
          <pre className={pudoDocsClasses.previewCode}>
            {JSON.stringify(exampleValues, null, 4)}
          </pre>
        </>
      )}
    </Column>
  )
}
