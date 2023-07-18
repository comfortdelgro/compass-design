import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {Key} from 'react'
import MultipleDropdown from '.'
import {Column} from '../utils'

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

export const Default: React.FC = () => {
  const [value, setValue] = React.useState<Key[]>(['cat'])
  const [value2, setValue2] = React.useState<Key[]>(['snake', 'cat', 'dog'])
  const [isChecked, setIsChecked] = React.useState(false)
  const [sectionSelected, setSectionSelected] = React.useState<
    React.ReactNode[]
  >([])
  const [loadMoreValue, setLoadMoreValue] = React.useState<Key[]>([])
  const [data, setData] = React.useState<SampleData[]>(generateRandomData(10))

  React.useEffect(() => {
    if (isChecked && sectionSelected.includes('Group 1')) {
      setValue(['red panda', 'cat', 'dog', 'aardvark', 'kangaroo', 'snake'])
    }
    if (!isChecked) {
      setValue([])
    }
  }, [isChecked])

  return (
    <Column>
      <Column>
        <h3>Controlled</h3>
        <MultipleDropdown
          label='Favorite Animal'
          disabledKeys={['cat']}
          placeholder='Choose an animal'
          selectedKeys={value}
          erroredKeys={['red panda']}
          isRequired
          onSelectionChange={(k: Key[]) => setValue(k)}
          onBlur={() => console.log('blur')}
          onFocus={() => console.log('focus')}
          css={{width: '50%'}}
        >
          <MultipleDropdown.Item key='red panda' textValue='Panda'>
            <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
          <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
          <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
          <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
          <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>UnControlled</h3>
        <MultipleDropdown
          label='Favorite Animal'
          disabledKeys={['snake']}
          defaultSelectedKeys={['snake']}
          placeholder='Choose an animal'
        >
          <MultipleDropdown.Item value='red panda ' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Errored</h3>
        <MultipleDropdown
          label='Favorite Animal'
          disabledKeys={['snake']}
          placeholder='Choose an animal'
          isErrored
          errorMessage='Error Message'
          helperText='Helper Message'
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>displayedValue: String</h3>
        <MultipleDropdown
          label='Favorite Animal'
          displayedValue='string'
          defaultSelectedKeys={['snake', 'cat', 'snake']}
          placeholder='Choosesss an animal'
          css={{width: '200px'}}
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>
          Custom display value (only effective when using with displayedValue
          string)
        </h3>
        <MultipleDropdown
          label='Favorite Animal'
          displayedValue='string'
          customDisplayValue={`${value2.length} animals selected`}
          placeholder='Choosesss an animal'
          css={{width: '290px'}}
          selectedKeys={value2}
          onSelectionChange={(k: Key[]) => setValue2(k)}
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Checkmark types</h3>
        <MultipleDropdown
          label='Favorite Animal'
          displayedValue='string'
          defaultSelectedKeys={['snake', 'cat', 'dog']}
          placeholder='Choosesss an animal'
          css={{width: '200px'}}
        >
          <MultipleDropdown.Item
            value='red panda'
            key='red panda'
            checkmark='tick'
          >
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat' checkmark='tick'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog' checkmark='tick'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item
            value='aardvark'
            key='aardvark'
            checkmark='tick'
          >
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item
            value='kangaroo'
            key='kangaroo'
            checkmark='tick'
          >
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake' checkmark='tick'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Loading</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
          isLoading
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>With Header</h3>
        <MultipleDropdown
          disabledKeys={['snake']}
          label='Favorite Animal'
          placeholder='Choose an animal'
        >
          <MultipleDropdown.Header>
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
          </MultipleDropdown.Header>
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>With Icon</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
          icon={<FontAwesomeIcon icon={faBug} />}
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Number of rows</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
          numberOfRows={4}
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>With Section</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
        >
          <MultipleDropdown.Item value='fly' key='fly'>
            Fly
          </MultipleDropdown.Item>
          <MultipleDropdown.Section title='Group 1'>
            <MultipleDropdown.Item value='red panda' key='red panda'>
              Red Panda
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='cat' key='cat'>
              Cat
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='dog' key='dog'>
              Dog
            </MultipleDropdown.Item>
          </MultipleDropdown.Section>
          <MultipleDropdown.Section title='Group 2'>
            <MultipleDropdown.Item value='aardvark' key='aardvark'>
              Aardvark
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
              Kangaroo
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='snake' key='snake'>
              Snake
            </MultipleDropdown.Item>
          </MultipleDropdown.Section>
        </MultipleDropdown>
        <h3>Handle Section Click</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
          selectedKeys={value}
          isRequired
          onSelectionChange={(k: Key[]) => setValue(k)}
          css={{width: '80%'}}
        >
          <MultipleDropdown.Section
            title='Group 1'
            isClickable
            checkmark='tick'
            // id='cdg-group-1'
            isChecked={isChecked}
            onClick={(title: React.ReactNode) => {
              setIsChecked(!isChecked)
              const newSectionSelected = [...sectionSelected]
              newSectionSelected.push(title)
              setSectionSelected(newSectionSelected)
            }}
          >
            <MultipleDropdown.Item
              value='red panda'
              key='red panda'
              checkmark='tick'
            >
              Red Panda
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='cat' key='cat' checkmark='tick'>
              Cat
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='dog' key='dog' checkmark='tick'>
              Dog
            </MultipleDropdown.Item>
            <MultipleDropdown.Item
              value='aardvark'
              key='aardvark'
              checkmark='tick'
            >
              Aardvark
            </MultipleDropdown.Item>
            <MultipleDropdown.Item
              value='kangaroo'
              key='kangaroo'
              checkmark='tick'
            >
              Kangaroo
            </MultipleDropdown.Item>
            <MultipleDropdown.Item value='snake' key='snake' checkmark='tick'>
              Snake
            </MultipleDropdown.Item>
          </MultipleDropdown.Section>
        </MultipleDropdown>
        <h3>Disabled</h3>
        <MultipleDropdown
          label='Favorite Animal'
          disabledKeys={['cat']}
          placeholder='Choose an animal'
          selectedKeys={value}
          isRequired
          onSelectionChange={(k: Key[]) => setValue(k)}
          isDisabled
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Variant: select</h3>
        <MultipleDropdown
          label='Favorite Animal'
          placeholder='Choose an animal'
          defaultSelectedKeys={['cat']}
          variant='select'
          displayedValue='string'
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Errored keys</h3>
        <MultipleDropdown
          label='Favorite Animal'
          defaultSelectedKeys={['red panda', 'cat']}
          erroredKeys={['red panda']}
          isErrored
          errorMessage='Red panda is not available'
        >
          <MultipleDropdown.Item value='red panda' key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat' key='cat'>
            Cat
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog' key='dog'>
            Dog
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='aardvark' key='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake' key='snake'>
            Snake
          </MultipleDropdown.Item>
        </MultipleDropdown>
        <h3>Load more</h3>
        <MultipleDropdown
          label='Using load more'
          placeholder='Select name'
          selectedKeys={loadMoreValue}
          onSelectionChange={(k: Key[]) => setLoadMoreValue(k)}
          onLoadMore={() => {
            setData((currentData) => [
              ...currentData,
              ...generateRandomData(10, currentData.length + 1),
            ])
          }}
          noDataMessage='There not one at all...'
        >
          {data.map((item) => (
            <MultipleDropdown.Item value={item.id} key={item.id}>
              {item.name}
            </MultipleDropdown.Item>
          ))}
        </MultipleDropdown>
        <div style={{height: '20rem'}} />
      </Column>
    </Column>
  )
}
