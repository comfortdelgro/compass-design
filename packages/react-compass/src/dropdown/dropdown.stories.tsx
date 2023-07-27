import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {Key} from 'react'
import Dropdown from '.'
import {Column} from '../utils'
import ADFlag from './flags/ad'
import AEFlag from './flags/ae'
import AFFlag from './flags/af'

function generateRandomName() {
  const firstNames = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Emily',
    'Frank',
    'Gina',
    'Haley',
    'Isaac',
    'John',
  ]
  const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
  ]
  const firstName =
    firstNames[Math.floor(Math.random() * firstNames.length)] ?? ''
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)] ?? ''
  return {name: `${firstName} ${lastName}`, firstName, lastName}
}

function generateRandomData(numData: number, startNumber = 1): SampleData[] {
  const data = []

  for (let i = 0; i < numData; i++) {
    const id = i + startNumber // generate a random ID between 0 and 9999
    const nameObj = generateRandomName() // generate a random name
    const name = nameObj.name
    const firstName = nameObj.firstName
    const lastName = nameObj.lastName
    const age = Math.floor(Math.random() * 60 + 5)
    const gender = Math.floor(Math.random() * 10) % 2 === 1 ? 'Male' : 'Female'
    data.push({
      id,
      name,
      age,
      gender,
      firstName,
      lastName,
    }) // add the ID and name to the data array as an object
  }

  return data
}

interface SampleData {
  id: number
  name: string
  age: number
  gender: string
  firstName: string
  lastName: string
}

export const Select: React.FC = () => {
  const [value, setValue] = React.useState<Key>('cat')
  const [flag, setFlag] = React.useState<Key>('')
  const [loadMoreValue, setLoadMoreValue] = React.useState<Key>('')
  const [data, setData] = React.useState<SampleData[]>(generateRandomData(10))
  const [value1, setValue1] = React.useState<Key>('cat')

  const handlePrefix = (key: Key) => {
    if (key === 'afghanistan') {
      return (
        <div
          style={{
            marginRight: '0.7rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ADFlag />
        </div>
      )
    }
    if (key === 'albania') {
      return (
        <div
          style={{
            marginRight: '0.7rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AEFlag />
        </div>
      )
    }
    if (key === 'algeria') {
      return (
        <div
          style={{
            marginRight: '0.7rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AFFlag />
        </div>
      )
    }
    return null
  }

  return (
    <Column>
      <h3>Controlled</h3>
      <Dropdown.Select
        isRequired
        label={
          <>
            Favorite Animal <FontAwesomeIcon icon={faBug} />
          </>
        }
        placeholder='Choose an animal'
        selectedKey={value}
        onSelectionChange={(k: Key) => setValue(k)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      >
        <Dropdown.Item
          key='red panda'
          checkmark='checkbox'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          key='cat'
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='dog' value='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item key='aardvark' value='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item key='kangaroo' value='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item key='snakessss' value='snakessss'>
          Snake
        </Dropdown.Item>
        <Dropdown.Item key='dog1' value='dog1'>
          Dog1
        </Dropdown.Item>
        <Dropdown.Item key='aardvark1' value='aardvark1'>
          Aardvark1
        </Dropdown.Item>
        <Dropdown.Item key='kangaroo1' value='kangaroo1'>
          Kangaroo1
        </Dropdown.Item>
        <Dropdown.Item key='snakessss1' value='snakessss1'>
          Snake1
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>Prefix</h3>
      <Dropdown.Select
        isRequired
        label={<>Phone Code Select</>}
        placeholder='Choose an animal'
        selectedKey={flag}
        onSelectionChange={(k: Key) => setFlag(k)}
        prefix={<>{handlePrefix(flag)}</>}
      >
        <Dropdown.Item key='afghanistan' value='afghanistan'>
          Afghanistan (+93)
        </Dropdown.Item>
        <Dropdown.Item key='albania' value='albania'>
          Albania (+355)
        </Dropdown.Item>
        <Dropdown.Item key='algeria' value='algeria'>
          Algeria (+213)
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>Disable the whole thing</h3>
      <Dropdown.Select
        isDisabled
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value1}
        onSelectionChange={(k: Key) => setValue1(k)}
      >
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          key='cat'
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snakessss' key='snakessss'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>Disable only one item</h3>
      <Dropdown.Select
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value1}
        onSelectionChange={(k: Key) => setValue1(k)}
        disabledKeys={['dog']}
      >
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          key='cat'
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snakessss' key='snakessss'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>UnControlled</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultSelectedKey={'cat'}
        disabledKeys={['dog']}
      >
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          textValue='pandared'
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>Allow deselect with double click</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultSelectedKey={'dog'}
        shouldDeselect
      >
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          textValue='pandared'
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>Erorr</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>With Header</h3>
      <Dropdown.Select label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '8px 16px',
              borderBottom: '2px solid #EDEBE9',
            }}
          >
            <span
              style={{
                color: '#323130',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: 0,
                margin: 0,
              }}
            >
              Filter
            </span>
            <button
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#A4262C',
                border: 0,
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
            >
              Clear
            </button>
          </div>
        </Dropdown.Header>
        <Dropdown.Item key='red panda' value='red panda'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>Loading</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <Dropdown.Item key='red panda' value='red panda'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>With Icon</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <Dropdown.Item key='red panda' value='red panda'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>Number of rows</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <Dropdown.Item key='red panda' value='red panda'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>With Section</h3>
      <Dropdown.Select label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item value='fly' key='fly'>
          Fly
        </Dropdown.Item>
        <Dropdown.Section title='Group 1'>
          <Dropdown.Item key='red panda' value='red panda'>
            Red Panda
          </Dropdown.Item>
          <Dropdown.Item key='cat' value='cat'>
            Cat
          </Dropdown.Item>
          <Dropdown.Item value='dog' key='dog'>
            Dog
          </Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title='Group 2'>
          <Dropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </Dropdown.Item>
          <Dropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </Dropdown.Item>
          <Dropdown.Item value='snake' key='snake'>
            Snake
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Select>
      <h3>Don't close after select item</h3>
      <Dropdown.Select
        label='Favorite Animal'
        isCloseOnSelect={false}
        placeholder='Choose an animal'
      >
        <Dropdown.Item value='fly' checkmark='tick'>
          Fly
        </Dropdown.Item>
        <Dropdown.Item value='cat' checkmark='tick'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' checkmark='tick'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' checkmark='tick'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' checkmark='tick'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' checkmark='tick'>
          Snake
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>Load more</h3>
      <Dropdown.Select
        isRequired
        label='Using load more'
        placeholder='Select name'
        selectedKey={loadMoreValue}
        onSelectionChange={(k: Key) => setLoadMoreValue(k)}
        onLoadMore={() => {
          setData((currentData) => [
            ...currentData,
            ...generateRandomData(10, currentData.length + 1),
          ])
        }}
      >
        {data.map((item) => (
          <Dropdown.Item value={item.id} key={item.id}>
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Select>
    </Column>
  )
}

export const Combobox: React.FC = () => {
  const [value, setValue] = React.useState<Key>('cat')
  const [disabledValue] = React.useState<Key>('dog')
  const [customValue, setCustomValue] = React.useState<Key>('kangaroo')

  return (
    <Column>
      <h3>Controlled</h3>
      <Dropdown.ComboBox
        isRequired
        label={
          <>
            Favorite Animal <FontAwesomeIcon icon={faBug} />
          </>
        }
        placeholder='Choose an animal'
        selectedKey={value}
        onSelectionChange={(k: Key) => setValue(k)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      >
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
        <Dropdown.Item value='dog1' key='dog1'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark1' key='aardvark1'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo1' key='kangaroo1'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake1' key='snake1'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Allow deselect with double click</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        shouldDeselect
      >
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Disabled</h3>
      <Dropdown.ComboBox
        isDisabled
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={disabledValue}
      >
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>UnControlled</h3>
      <Dropdown.ComboBox label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Erorr</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>with allowsCustomValue</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={customValue}
        onSelectionChange={(k: Key) => setCustomValue(k)}
        allowsCustomValue
      >
        <Dropdown.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>With Header</h3>
      <Dropdown.ComboBox label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '8px 16px',
              borderBottom: '2px solid #EDEBE9',
            }}
          >
            <span
              style={{
                color: '#323130',
                fontSize: '12px',
                fontWeight: 'bold',
                padding: 0,
                margin: 0,
              }}
            >
              Filter
            </span>
            <button
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#A4262C',
                border: 0,
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
            >
              Clear
            </button>
          </div>
        </Dropdown.Header>
        <Dropdown.Item key='red panda' value='red panda'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Loading</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <Dropdown.Item key='red panda' value='red panda'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>With Icon</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <Dropdown.Item key='red panda' value='red panda'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Number of rows</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <Dropdown.Item key='red panda' value='red panda'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Disabled Clearable</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        disableClearable
      >
        <Dropdown.Item key='red panda' value='red panda'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' value='cat'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' key='dog'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' key='aardvark'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' key='snake'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>With Section</h3>
      <Dropdown.ComboBox label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item value='fly' key='fly'>
          Fly
        </Dropdown.Item>
        <Dropdown.Section title='Group 1'>
          <Dropdown.Item key='red panda' value='red panda'>
            Red Panda
          </Dropdown.Item>
          <Dropdown.Item key='cat' value='cat'>
            Cat
          </Dropdown.Item>
          <Dropdown.Item value='dog' key='dog'>
            Dog
          </Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title='Group 2'>
          <Dropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </Dropdown.Item>
          <Dropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </Dropdown.Item>
          <Dropdown.Item value='snake' key='snake'>
            Snake
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.ComboBox>

      <h3>Don't close after select item</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        isCloseOnSelect={false}
        placeholder='Choose an animal'
      >
        <Dropdown.Item value='fly' checkmark='tick'>
          Fly
        </Dropdown.Item>
        <Dropdown.Item value='red panda' checkmark='tick'>
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' checkmark='tick'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog' checkmark='tick'>
          Dog
        </Dropdown.Item>
        <Dropdown.Item value='aardvark' checkmark='tick'>
          Aardvark
        </Dropdown.Item>
        <Dropdown.Item value='kangaroo' checkmark='tick'>
          Kangaroo
        </Dropdown.Item>
        <Dropdown.Item value='snake' checkmark='tick'>
          Snake
        </Dropdown.Item>
      </Dropdown.ComboBox>
    </Column>
  )
}
