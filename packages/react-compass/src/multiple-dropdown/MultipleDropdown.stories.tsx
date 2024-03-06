import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {Meta} from '@storybook/react'
import React from 'react'
import MultipleDropdown from '.'

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
const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '100%',
  padding: '3rem',
}

export const Basic: React.FC = () => {
  const [value, setValue] = React.useState<string[]>(['cat'])
  const [sectionValue, setSectionValue] = React.useState<string[]>(['cat'])
  const [value2, setValue2] = React.useState<string[]>(['snake', 'cat', 'dog'])
  const [loadMoreValue, setLoadMoreValue] = React.useState<string[]>([])
  const [data, setData] = React.useState<SampleData[]>(generateRandomData(10))

  return (
    <div style={{...style}}>
      <h3>Controlled</h3>
      <MultipleDropdown
        label='Favorite Animal'
        disabledValues={['cat']}
        placeholder='Choose an animal'
        values={value}
        erroredValues={['panda']}
        isRequired
        onValuesChange={(k: string[]) => setValue(k)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
        css={{width: '50%'}}
      >
        <MultipleDropdown.Header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
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
              onClick={() => setValue([])}
            >
              Clear
            </button>
          </div>
        </MultipleDropdown.Header>
        <MultipleDropdown.Item value='panda' textValue='Panda'>
          <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>UnControlled</h3>
      <MultipleDropdown
        label='Favorite Animal'
        disabledValues={['snake']}
        defaultValues={['snake']}
        placeholder='Choose an animal'
      >
        <MultipleDropdown.Item value='red panda '>
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Errored</h3>
      <MultipleDropdown
        label='Favorite Animal'
        disabledValues={['snake']}
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
        helperText='Helper Message'
      >
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>displayedValue: String</h3>
      <MultipleDropdown
        label='Favorite Animal'
        displayedValue='string'
        defaultValues={['snake', 'cat', 'dog']}
        placeholder='Choosesss an animal'
        css={{width: '200px'}}
      >
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
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
        values={value2}
        onValuesChange={(k: string[]) => setValue2(k)}
      >
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Checkmark types</h3>
      <MultipleDropdown
        label='Favorite Animal'
        displayedValue='string'
        defaultValues={['snake', 'cat', 'dog']}
        placeholder='Choosesss an animal'
        css={{width: '200px'}}
      >
        <MultipleDropdown.Item value='panda' checkmark='tick'>
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat' checkmark='tick'>
          Cat
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog' checkmark='tick'>
          Dog
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark' checkmark='tick'>
          Aardvark
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo' checkmark='tick'>
          Kangaroo
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake' checkmark='tick'>
          Snake
        </MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Loading</h3>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>With Header</h3>
      <MultipleDropdown
        disabledValues={['snake']}
        label='Favorite Animal'
        placeholder='Choose an animal'
      >
        <MultipleDropdown.Header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
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
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>With Icon</h3>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Number of rows</h3>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>With Section</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Choose an animal'>
        <MultipleDropdown.Item value='fly'>Fly</MultipleDropdown.Item>
        <MultipleDropdown.Section title='Group 1'>
          <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Group 2'>
          <MultipleDropdown.Item value='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
        </MultipleDropdown.Section>
      </MultipleDropdown>
      <h3>Handle Section Click</h3>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Choose an animal'
        values={sectionValue}
        isRequired
        onValuesChange={(k: string[]) => setSectionValue(k)}
        css={{width: '80%'}}
      >
        <MultipleDropdown.Section
          title='Amphibians'
          isClickable
          checkmark='tick'
        >
          <MultipleDropdown.Item value='frogs' checkmark='tick'>
            Frogs
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='newts' checkmark='tick'>
            Newts
          </MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Birds' isClickable checkmark='tick'>
          <MultipleDropdown.Item value='chickens' checkmark='tick'>
            Chickens
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='hummingbirds' checkmark='tick'>
            Hummingbirds
          </MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Fish' isClickable checkmark='tick'>
          <MultipleDropdown.Item value='eels' checkmark='tick'>
            Eels
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='hagfish' checkmark='tick'>
            Hagfish
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='lampreys' checkmark='tick'>
            Lampreys
          </MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section isClickable title='Mammals' checkmark='tick'>
          <MultipleDropdown.Item value='aardvarks' checkmark='tick'>
            Aardvarks
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='bats' checkmark='tick'>
            Bats
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='humans' checkmark='tick'>
            Humans
          </MultipleDropdown.Item>
        </MultipleDropdown.Section>
      </MultipleDropdown>
      <h3>Disabled</h3>
      <MultipleDropdown
        label='Favorite Animal'
        disabledValues={['cat']}
        placeholder='Choose an animal'
        values={value}
        isRequired
        onValuesChange={(k: string[]) => setValue(k)}
        isDisabled
      >
        <MultipleDropdown.Item value='panda'>
          <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Variant: select</h3>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultValues={['cat']}
        variant='select'
        displayedValue='string'
      >
        <MultipleDropdown.Item value='panda'>
          <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Errored strings</h3>
      <MultipleDropdown
        label='Favorite Animal'
        defaultValues={['panda', 'cat']}
        erroredValues={['panda']}
        isErrored
        errorMessage='Red panda is not available'
      >
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Limit width for Popover</h3>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Animals'
        css={{width: '250px'}}
        popoverCSS={{width: 'auto'}}
      >
        <MultipleDropdown.Item value='Panda' textValue='Panda'>
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Custom CSS</h3>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Animals'
        css={{
          '& .button': {span: {color: '$whiteText'}},
          '& .dropdownContainer': {
            color: '$whiteText',
            borderColor: '$warning',
            borderWidth: '3px',
            backgroundColor: '$cdgBlue100',
            '& .selectedItemWrapper > div': {
              color: '$whiteText',
              svg: {
                color: '$whiteText',
              },
            },
            '& .selectedItemWrapper > input': {
              color: '$whiteText',
              backgroundColor: '$cdgBlue100',
            },
            '& .dropdown-icon svg': {
              color: '$whiteText',
            },
          },
        }}
      >
        <MultipleDropdown.Item value='Panda' textValue='Panda'>
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Load more</h3>
      <MultipleDropdown
        label='Using load more'
        placeholder='Select name'
        values={loadMoreValue}
        onValuesChange={(k: string[]) => setLoadMoreValue(k)}
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
    </div>
  )
}

const meta = {
  title: 'Example/Multiple Dropdown',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
