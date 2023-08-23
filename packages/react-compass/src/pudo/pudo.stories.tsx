import MapMarked from '@comfortdelgro/compass-icons/react/map-marked'
import InfoOutlined from '@comfortdelgro/compass-icons/react/outlined/info-outlined'
import debounce from 'lodash/debounce'
import React, {useCallback, useState} from 'react'
import Button from '../button'
import {styled} from '../theme'
import Typography from '../typography'
import Pudo from './pudo'
import {PudoItemProps, PudoValueChange} from './pudo.types'

const exampleItem = [
  {name: 'item1', value: '', placeholder: 'item1'},
  {
    name: 'item2',
    value: '',
    placeholder: 'item2',
    allowSwap: true,
  },
  {
    name: 'item3',
    icon: <MapMarked />,
    value: '',
    placeholder: 'item3',
  },
]

type PudoItemKeys = 'pickUp' | 'des1'
const pudoItems: Array<PudoItemProps<PudoItemKeys>> = [
  {name: 'pickUp', value: '', placeholder: 'Pick up from', maxLength: 255},
  {name: 'des1', value: '', placeholder: 'Where to', allowSwap: true},
]
const pendingAddItems = [
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

type PudoItemAllKeys = (typeof pendingAddItems)[number]['name'] | PudoItemKeys

export function Default() {
  const [exampleItems, setExampleItems] = useState<PudoItemProps[]>(exampleItem)
  const [exampleValues, setExampleValues] = useState<PudoValueChange>(
    exampleItem.map(({name, value}) => ({name, value})),
  )
  const [formValues, setFormValues] = useState<
    PudoValueChange<PudoItemAllKeys>
  >(pudoItems.map(({name, value}) => ({name, value})))

  const debounceUpdate = useCallback(
    debounce((newValue: PudoValueChange) => {
      setExampleValues(newValue)

      const newItemsConfig = exampleItems.slice()
      newValue.forEach((item) => {
        const updateIndex = newItemsConfig.find(({name}) => item.name === name)
        if (!updateIndex) {
          return
        }
        updateIndex.value = item.value
      })

      setExampleItems(newItemsConfig)
    }, 200),
    [exampleItems],
  )

  const handleAddLocation = () => {
    setExampleItems((currState) =>
      currState.map((item, index) =>
        index === 0
          ? {
              ...item,
              placeholder: 'Current location: Hanoi',
            }
          : item,
      ),
    )
  }

  return (
    <>
      <h4>PUDO</h4>
      <Typography.Body
        variant='body3'
        css={{color: '$grayShades60', marginBlock: '$2 $4'}}
      >
        with 200ms debounced value changes.
      </Typography.Body>
      <Pudo
        css={{marginBlock: '$4'}}
        items={exampleItems}
        onValuesChange={debounceUpdate}
      />
      <Button size='sm' css={{marginBottom: '$4'}} onClick={handleAddLocation}>
        Update first item
      </Button>
      <PreviewCode>{JSON.stringify(exampleValues, null, 2)}</PreviewCode>

      <h4>Swap, add and remove items</h4>
      <Typography.Body
        variant='body3'
        css={{color: '$grayShades60', marginBlock: '$2 $4'}}
      >
        Default value - Minlength: <strong>2</strong>, Maxlength:{' '}
        <strong>3</strong>, Input&#39;s maxlength: <strong>255</strong>
      </Typography.Body>

      <Pudo
        items={pudoItems}
        onValuesChange={(values) => setFormValues(values)}
        addItems={pendingAddItems}
        addItemsLabel='Add extra destination'
        removableItems={['des2', 'des3', 'des4']}
        removableLabel='Remove extra destination'
        minLength={2} // default value
        maxLength={3} // default value
      />
      {formValues && (
        <PreviewCode>{JSON.stringify(formValues, null, 2)}</PreviewCode>
      )}

      <h4>Label view</h4>
      <Pudo
        css={{marginBlock: '$4'}}
        items={[
          {
            name: 'item1',
            value: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis
          deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
          quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
          quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
          illo temporibus velit, beatae dolores accusantium quis vel corporis neque
          harum? Accusantium, voluptates consequuntur?`,
            placeholder: 'item1',
          },
          {name: 'item2', value: 'Destination', placeholder: 'item2'},
        ]}
        type='label'
      />

      <h4>Compact</h4>
      <Pudo
        css={{
          marginBlock: '$4',
          '.pudo-items-wrapper': {
            border: 'none',
            boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.16)',
          },
        }}
        items={[
          {
            name: 'item1',
            value: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis
          deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
          quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
          quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
          illo temporibus velit, beatae dolores accusantium quis vel corporis neque
          harum? Accusantium, voluptates consequuntur?`,
            placeholder: 'item1',
          },
          {name: 'item2', value: 'Destination', placeholder: 'item2'},
        ]}
        compact='md'
      />

      <h4>Compact - Label view</h4>
      <Typography.Body
        variant='body3'
        css={{color: '$grayShades60', marginBlock: '$2 $4'}}
      >
        Compact size: sm (left), md (right)
      </Typography.Body>
      <CompactContainer>
        <Pudo
          items={[
            {
              name: 'item1',
              value: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis
          deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
          quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
          quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
          illo temporibus velit, beatae dolores accusantium quis vel corporis neque
          harum? Accusantium, voluptates consequuntur?`,
              placeholder: 'item1',
            },
            {name: 'item2', value: 'Destination', placeholder: 'item2'},
          ]}
          type='label'
          compact='sm'
        />
        <Pudo
          items={[
            {
              name: 'item1',
              value: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis
          deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
          quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
          quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
          illo temporibus velit, beatae dolores accusantium quis vel corporis neque
          harum? Accusantium, voluptates consequuntur?`,
              placeholder: 'item1',
            },
            {name: 'item2', value: 'Destination', placeholder: 'item2'},
          ]}
          type='label'
          compact='md'
        />
      </CompactContainer>
    </>
  )
}

const PreviewCode = styled('pre', {
  padding: '$2',
  margin: '0',

  width: '100%',
  minHeight: '$5',
  borderRadius: '$lg',

  backgroundColor: '$secondaryBg',
  fontSize: '$label1',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'anywhere',
})

const CompactContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '@sm': {
    width: '50%',
    flexDirection: 'row',
  },
})
