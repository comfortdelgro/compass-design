import MapMarked from '@comfortdelgro/compass-icons/react/map-marked'
import InfoOutlined from '@comfortdelgro/compass-icons/react/outlined/info-outlined'
import React, {useState} from 'react'
import {styled} from '../theme'
import Typography from '../typography'
import Pudo from './pudo'
import {PudoItemProps} from './pudo.types'

const exampleItem = [
  {name: 'item1', value: '', placeholder: 'item1'},
  {name: 'item2', value: '', placeholder: 'item2'},
  {name: 'item3', value: '', placeholder: 'item3'},
] as const

type DataExampleState<T extends string | number | symbol = string> = {
  obj: Record<T, string>
  arr: Array<{name: T; value: string}>
}

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

const initFormValues = pudoItems.reduce(
  (obj, {name, value}) => ({...obj, [name]: value}),
  {},
) as Record<PudoItemAllKeys, string>

export function H5() {
  const [dataExample1, setDataExample1] =
    useState<DataExampleState<(typeof exampleItem)[number]['name']>>()

  const [formValues, setFormValues] = useState<
    DataExampleState<PudoItemAllKeys>
  >({
    obj: initFormValues,
    arr: pudoItems.map(({name, value}) => ({name, value})),
  })

  return (
    <>
      <h4>PUDO</h4>
      <Typography.Body
        variant='body3'
        css={{color: '$grayShades60', marginBlock: '$2 $4'}}
      >
        Support 2 types of return values with auto infer name types:
      </Typography.Body>
      <Pudo
        css={{marginBlock: '$4'}}
        items={exampleItem}
        onValuesChange={(objValues, arrValues) =>
          setDataExample1({obj: objValues, arr: arrValues})
        }
      />
      {dataExample1 && (
        <PreviewCodeContainer>
          <PreviewCode>{JSON.stringify(dataExample1.obj, null, 2)}</PreviewCode>
          <PreviewCode>{JSON.stringify(dataExample1.arr, null, 2)}</PreviewCode>
        </PreviewCodeContainer>
      )}
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
        onValuesChange={(objValues, arrValues) =>
          setFormValues({obj: objValues, arr: arrValues})
        }
        addItems={pendingAddItems}
        addItemsLabel='Add extra destination'
        removableItems={['des2', 'des3', 'des4']}
        removableLabel='Remove extra destination'
        minLength={2} // default value
        maxLength={3} // default value
      />
      {formValues && (
        <PreviewCodeContainer>
          <PreviewCode>{JSON.stringify(formValues.obj, null, 2)}</PreviewCode>
          <PreviewCode>{JSON.stringify(formValues.arr, null, 2)}</PreviewCode>
        </PreviewCodeContainer>
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

const PreviewCodeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '@sm': {
    flexDirection: 'row',
  },
})
