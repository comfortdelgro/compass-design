import MapMarked from '@comfortdelgro/compass-icons/react/map-marked'
import InfoOutlined from '@comfortdelgro/compass-icons/react/outlined/info-outlined'
import {
  Button,
  Column,
  Pudo,
  PudoItemProps,
  PudoValueChange,
  Row,
  Typography,
} from '@comfortdelgro/react-compass'
import {useState} from 'react'

const addItemsPool = [
  {name: 'des2', value: '', placeholder: 'Where to', allowSwap: true},
  {
    name: 'des3',
    icon: <MapMarked />,
    value: '',
    placeholder: 'New destination',
    allowSwap: true,
  },
  {
    name: 'des4',
    icon: <InfoOutlined />,
    value: '',
    placeholder: 'New destination 2',
  },
] as const

type PudoItemKeys = 'pickUp' | 'des1'
type PudoItemAllKeys = (typeof addItemsPool)[number]['name'] | PudoItemKeys

const defaultItems: Array<PudoItemProps<PudoItemKeys>> = [
  {name: 'pickUp', value: '', placeholder: 'Pick up from', maxLength: 200},
  {name: 'des1', value: '', placeholder: 'Where to', allowSwap: true},
]

export default function PudoManipulationDocs() {
  const [maxLength, setMaxLength] = useState(3)
  const [formValues, setFormValues] = useState<
    PudoValueChange<PudoItemAllKeys>
  >(defaultItems.map(({name, value = ''}) => ({name, value})))

  const pendingAddItemsCount =
    addItemsPool.length + defaultItems.length - formValues.length

  return (
    <Column>
      <Typography.Body variant='body3'>
        There are{' '}
        {pendingAddItemsCount ? (
          <>
            <strong>{pendingAddItemsCount}</strong> more items
          </>
        ) : (
          'no items remaining'
        )}{' '}
        to add.
        <br />
        <br />
        Current maxLength: <strong>{maxLength}</strong>
      </Typography.Body>

      <Row>
        <Button
          size='sm'
          css={{marginBottom: '$4'}}
          onClick={() => setMaxLength(maxLength + 1)}
        >
          Increase maxlength
        </Button>
      </Row>

      <Pudo
        items={defaultItems}
        onValuesChange={(values) => setFormValues(values)}
        addItems={addItemsPool}
        addItemsLabel='Add extra destination'
        removableItems={['des2', 'des3', 'des4']}
        removableLabel='Remove extra destination'
        minLength={2} // default value: 2
        maxLength={maxLength} // default value: 3
      />
      {formValues && (
        <>
          <Typography.Body variant='body3'>Values:</Typography.Body>
          <div
            style={{
              padding: '$2',
              margin: '0',

              width: '100%',
              minHeight: '1.25rem',
              borderRadius: '8px',

              backgroundColor: '#FAF9F8',
              fontSize: '0.875rem',
              whiteSpace: 'pre-wrap',
              overflowWrap: 'anywhere',
            }}
          >
            {JSON.stringify(formValues, null, 2)}
          </div>
        </>
      )}
    </Column>
  )
}
