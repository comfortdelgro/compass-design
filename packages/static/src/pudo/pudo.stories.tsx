import MapMarked from '@comfortdelgro/compass-icons/react/map-marked'
import InfoOutlined from '@comfortdelgro/compass-icons/react/outlined/info-outlined'
import {Meta} from '@storybook/react'
import debounce from 'lodash/debounce'
import {useCallback, useState} from 'react'
import Button from '../button'
import Typography from '../typography'
import Pudo from './pudo'
import {PudoItemProps, PudoValueChange} from './pudo.types'
import classes from './styles/pudo-stories.module.css'

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className={classes.pudoStories}>
      <h4>PUDO</h4>
      <Typography.Body variant='body3' className={classes.description}>
        with 200ms debounced value changes.
      </Typography.Body>
      <Pudo items={exampleItems} onValuesChange={debounceUpdate} />
      <Button
        size='sm'
        className={classes.pudoUpdateItemButton}
        onClick={handleAddLocation}
      >
        Update first item
      </Button>
      <pre className={classes.previewCode}>
        {JSON.stringify(exampleValues, null, 2)}
      </pre>

      <h4>Swap, add and remove items</h4>
      <Typography.Body className={classes.description} variant='body3'>
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
        <pre className={classes.previewCode}>
          {JSON.stringify(formValues, null, 2)}
        </pre>
      )}

      <h4>Label view</h4>
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
      />

      <h4>Compact</h4>
      <Pudo
        items={[
          {name: 'item1', value: '', placeholder: 'item 1'},
          {name: 'item2', value: '', placeholder: 'item 2'},
        ]}
        compact='md'
      />

      <h4>Compact - Label view</h4>
      <Typography.Body variant='body3' className={classes.description}>
        Compact size: sm (left), md (right)
      </Typography.Body>
      <div className={classes.compactContainer}>
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
      </div>

      <h4>Styling</h4>
      <Pudo
        className={classes.pudoCustomStyling}
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
    </div>
  )
}

const meta: Meta<typeof Default> = {
  title: 'Example/Pudo',
  tags: ['autodocs'],
  component: Default,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
