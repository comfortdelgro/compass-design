import MapMarked from '@comfortdelgro/compass-icons/react/map-marked'
import InfoOutlined from '@comfortdelgro/compass-icons/react/outlined/info-outlined'
import {Meta} from '@storybook/react'
import debounce from 'lodash/debounce'
import {useCallback, useState} from 'react'
import {Box, SlideAction} from '..'
import Button from '../button'
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
    icon: <MapMarked style={{height: '0.875rem'}} />,
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
  >(pudoItems.map(({name, value = ''}) => ({name, value})))

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
    <Box
      css={{
        padding: 'var(--cdg-spacing-4)',
        paddingBottom: 'var(--cdg-spacing-12)',
        h4: {
          marginBlock: 'var(--cdg-spacing-6) var(--cdg-spacing-2)',
        },
        h5: {
          marginBlock: 'var(--cdg-spacing-4) var(--cdg-spacing-1)',
        },
      }}
    >
      <h4 style={{marginBlock: 0}}>PUDO</h4>
      <Typography.Body
        variant='body3'
        css={{
          marginTop: '0',
          fontSize: 'var(--cdg-font-size-body3)',
          color: 'var(--cdg-color-grayShades60)',
        }}
      >
        with 200ms debounced value changes.
      </Typography.Body>
      <Pudo items={exampleItems} onValuesChange={debounceUpdate} />
      <Button
        size='sm'
        css={{marginBlock: 'var(--cdg-spacing-4)'}}
        onClick={handleAddLocation}
      >
        Update first item
      </Button>
      <Box
        css={{
          pre: {
            padding: 'var(--cdg-spacing-2)',
            margin: '0',
            width: '100%',
            minHeight: 'var(--cdg-spacing-5)',
            borderRadius: 'var(--cdg-border-radius-lg)',
            backgroundColor: 'var(--cdg-color-secondaryBg)',
            fontSize: 'var(--cdg-font-size-label1)',
            whiteSpace: 'pre-wrap',
            overflowWrap: 'anywhere',
          },
        }}
      >
        <pre>{JSON.stringify(exampleValues, null, 2)}</pre>
      </Box>

      <h4>Swap, add and remove items</h4>
      <Typography.Body
        css={{
          marginTop: '0',
          fontSize: 'var(--cdg-font-size-body3)',
          color: 'var(--cdg-color-grayShades60)',
        }}
        variant='body3'
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
        isClearable
      />
      {formValues && (
        <Box
          css={{
            pre: {
              padding: 'var(--cdg-spacing-2)',
              margin: '0',
              width: '100%',
              minHeight: 'var(--cdg-spacing-5)',
              borderRadius: 'var(--cdg-border-radius-lg)',
              backgroundColor: 'var(--cdg-color-secondaryBg)',
              fontSize: 'var(--cdg-font-size-label1)',
              whiteSpace: 'pre-wrap',
              overflowWrap: 'anywhere',
            },
          }}
        >
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </Box>
      )}

      <h4>
        Item type: <code>custom</code>
      </h4>
      <Pudo
        items={[
          {
            name: 'item1',
            title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis.`,
            content: (
              <>
                <p
                  style={{
                    color: 'var(--colors-grayShades60)',
                    fontStyle: 'italic',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum, praesentium.{' '}
                  <del>
                    Fuga recusandae maxime molestias velit doloremque soluta
                    modi suscipit quia fugit vitae, non laboriosam perferendis
                    accusantium deserunt officiis eligendi.
                  </del>{' '}
                  Dolore! Fuga recusandae maxime molestias velit doloremque
                  soluta modi suscipit quia fugit vitae, non laboriosam.
                </p>
                <Button type='button' variant='secondary' size='sm'>
                  Some action
                </Button>
              </>
            ),
          },
          {
            name: 'item2',
            title: (
              <>
                <p style={{marginBlock: '0 1rem', color: 'blueviolet'}}>
                  <strong>Title only:</strong> Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Laborum assumenda officiis
                  voluptates quam rem qui libero commodi veritatis.
                </p>
                <SlideAction
                  css={{marginBlock: '0.5rem'}}
                  label='Some danger action on title'
                  labelType='slide'
                />
              </>
            ),
          },
          {
            name: 'item3',
            content: (
              <p style={{marginBlock: '0'}}>
                This item has <strong>content only</strong> ✨. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Laborum assumenda
                officiis voluptates quam rem qui libero commodi veritatis.
                deserunt harum voluptatum beatae perferendis, vitae minus magnam
                facere quidem tempora iusto? Tempore praesentium accusamus
                mollitia, inventore quos tenetur, aspernatur eos, in id corporis
                veniam blanditiis error. Est illo temporibus velit, beatae
                dolores accusantium quis vel corporis neque harum? Accusantium,
                voluptates consequuntur?
              </p>
            ),
          },
        ]}
        type='custom'
      />

      <h4>
        Align Icon: <code>top</code>
      </h4>
      <Pudo
        alignIcon='top'
        items={[
          {
            name: 'item1',
            title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis.`,
            content: (
              <>
                <p
                  style={{
                    color: 'var(--colors-grayShades60)',
                    fontStyle: 'italic',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum, praesentium. Fuga recusandae maxime molestias velit
                  doloremque soluta modi suscipit quia fugit vitae, non
                  laboriosam perferendis accusantium deserunt officiis eligendi.
                  Dolore!
                </p>
                <Button type='button' variant='secondary' size='sm'>
                  Some action
                </Button>
              </>
            ),
          },
          {
            name: 'item2',
            title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis.`,
          },
          {
            name: 'item3',
            content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            assumenda officiis voluptates quam rem qui libero commodi veritatis
            deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
            quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
            quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
            illo temporibus velit, beatae dolores accusantium quis vel corporis neque
            harum? Accusantium, voluptates consequuntur?`,
          },
        ]}
        type='custom'
      />

      <h4>Compact</h4>
      <Typography.Body
        variant='body3'
        css={{
          marginTop: '0',
          fontSize: 'var(--cdg-font-size-body3)',
          color: 'var(--cdg-color-grayShades60)',
        }}
      >
        Compact size: sm (1st example), md (2nd example)
      </Typography.Body>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--cdg-spacing-4)',
        }}
      >
        <Pudo
          items={[
            {name: 'item1', value: '', placeholder: 'item1'},
            {name: 'item2', value: '', placeholder: 'item2'},
          ]}
          compact='sm'
        />
        <Pudo
          items={[
            {name: 'item1', value: '', placeholder: 'item1'},
            {name: 'item2', value: '', placeholder: 'item2'},
          ]}
          compact='md'
        />
      </Box>

      <h5>
        Type <code>custom</code>
      </h5>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--cdg-spacing-4)',
        }}
      >
        <Pudo
          items={[
            {
              name: 'item1',
              title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis
          deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
          quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
          quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
          illo temporibus velit, beatae dolores accusantium quis vel corporis neque
          harum? Accusantium, voluptates consequuntur?`,
            },
            {name: 'item2', title: 'Destination'},
          ]}
          type='custom'
          compact='sm'
        />
        <Pudo
          items={[
            {
              name: 'item1',
              title: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          assumenda officiis voluptates quam rem qui libero commodi veritatis
          deserunt harum voluptatum beatae perferendis, vitae minus magnam facere
          quidem tempora iusto? Tempore praesentium accusamus mollitia, inventore
          quos tenetur, aspernatur eos, in id corporis veniam blanditiis error. Est
          illo temporibus velit, beatae dolores accusantium quis vel corporis neque
          harum? Accusantium, voluptates consequuntur?`,
            },
            {name: 'item2', title: 'Destination'},
          ]}
          type='custom'
          compact='md'
        />
      </Box>

      <h4>Styling</h4>
      <Pudo
        css={{
          '.cdg-pudo-items-wrapper': {
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
      />
    </Box>
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
