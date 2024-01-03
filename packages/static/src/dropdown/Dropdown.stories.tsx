import PersonOutlined from '@comfortdelgro/compass-icons/react/outlined/person-outlined'
import Phone from '@comfortdelgro/compass-icons/react/phone'
import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {Meta} from '@storybook/react'
import React from 'react'
import Dropdown from '.'
import ADFlag from './flags/ad'
import AEFlag from './flags/ae'
import AFFlag from './flags/af'

interface SampleData {
  id: number
  name: string
  age: number
  gender: string
  firstName: string
  lastName: string
}
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
const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '3rem',
}

export const Select: React.FC = () => {
  const [value, setValue] = React.useState<string>('aardvark1')
  const [assignee, setAssignee] = React.useState<string>('NateRusell')
  const [valueHeader, setValueHeader] = React.useState<string>('')
  const [flag, setFlag] = React.useState<string>('')
  const [loadMoreValue, setLoadMoreValue] = React.useState<string>('')
  const [loading, setLoading] = React.useState(true)
  const [loadingMoreStatus, setLoadingMoreStatus] = React.useState(false)
  const [data, setData] = React.useState<SampleData[]>(generateRandomData(10))
  const [value1, setValue1] = React.useState<string>('cat')

  const handlePrefix = (key: string) => {
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
    <div style={{...style}}>
      <h3>Controlled</h3>
      <Dropdown.Select
        isRequired
        label={
          <>
            <FontAwesomeIcon icon={faBug} />
          </>
        }
        placeholder='Choose an animal'
        value={value}
        onValueChange={(k: string | number) => setValue(k.toString())}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      >
        <Dropdown.Item
          checkmark='tick'
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
        <Dropdown.Item value='dog1'>Dog1</Dropdown.Item>
        <Dropdown.Item value='aardvark1'>Aardvark1</Dropdown.Item>
        <Dropdown.Item value='kangaroo1'>Kangaroo1</Dropdown.Item>
        <Dropdown.Item value='snakessss1'>Snake1</Dropdown.Item>
      </Dropdown.Select>
      <h3>Prefix</h3>
      <Dropdown.Select
        isRequired
        label={<>Phone Code Select</>}
        placeholder='Choose an animal'
        value={flag}
        onValueChange={(k: string | number) => setFlag(k.toString())}
        prefix={<>{handlePrefix(flag)}</>}
      >
        <Dropdown.Item value='afghanistan'>Afghanistan (+93)</Dropdown.Item>
        <Dropdown.Item value='albania'>Albania (+355)</Dropdown.Item>
        <Dropdown.Item value='algeria'>Algeria (+213)</Dropdown.Item>
      </Dropdown.Select>
      <h3>Custom Display</h3>
      <Dropdown.Select
        label={<>Assignee</>}
        placeholder='Select'
        value={assignee}
        onValueChange={(k: string | number) => setAssignee(k as string)}
        prefix={
          <div
            style={{
              marginRight: '0.7rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PersonOutlined color='blue' />
          </div>
        }
      >
        <Dropdown.Item value='NateRusell' checkmark='tick'>
          Nate Russell - Service advisor -
          <Phone />
          0029838882
        </Dropdown.Item>
        <Dropdown.Item value='AlanLau' checkmark='tick'>
          Alan Lau - Service advisor - <Phone />
          0029838284
        </Dropdown.Item>
        <Dropdown.Item value='JeremyLin' checkmark='tick'>
          Jeremy Lin - Service advisor - <Phone />
          0029839381
        </Dropdown.Item>
      </Dropdown.Select>
      <h3>Disable the whole thing</h3>
      <Dropdown.Select
        isDisabled
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={value1}
        onValueChange={(k: string | number) => setValue1(k.toString())}
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Disable only one item</h3>
      <Dropdown.Select
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={value1}
        onValueChange={(k: string | number) => setValue1(k.toString())}
        disabledValues={['dog']}
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>UnControlled</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultValue={'cat'}
        disabledValues={['dog']}
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          textValue='pandared'
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Allow deselect with double click</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultValue={'dog'}
        shouldDeselect
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          textValue='pandared'
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Erorr</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>With Header</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={valueHeader}
        onValueChange={(value: string | number) =>
          setValueHeader(value.toString())
        }
      >
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
              onClick={() => setValueHeader('')}
            >
              Clear
            </button>
          </div>
        </Dropdown.Header>
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Loading</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        onOpenChange={(open) => {
          if (open) {
            setTimeout(() => {
              setLoading(false)
            }, 3000)
          } else {
            setLoading(true)
          }
        }}
        isLoading={loading}
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>With Icon</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Number of rows</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>With Section</h3>
      <Dropdown.Select label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item value='fly'>Fly</Dropdown.Item>
        <Dropdown.Section title='Group 1'>
          <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
          <Dropdown.Item value='cat'>Cat</Dropdown.Item>
          <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title='Group 2'>
          <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
          <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
          <Dropdown.Item value='snake'>Snake</Dropdown.Item>
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
      <h3>Limit width for Popover</h3>
      <Dropdown.Select
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        css={{width: '250px'}}
        popoverCSS={{width: 'auto'}}
      >
        <Dropdown.Item
          checkmark='tick'
          value='panda'
          css={{textWrap: 'nowrap'}}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Custom CSS</h3>
      <Dropdown.Select
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        css={{
          '& .cdg-dropdown-button': {span: {color: '$whiteText'}},
          '& .cdg-dropdown-input': {
            borderColor: '$warning',
            borderWidth: '3px',
            backgroundColor: '$cdgBlue100',
            '& .cdg-dropdown-button-icon': {
              color: '$whiteText',
            },
          },
        }}
      >
        <Dropdown.Item value='panda'>Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Load more</h3>
      <Dropdown.Select
        isRequired
        label='Using load more'
        placeholder='Select name'
        value={loadMoreValue}
        isLoadingMore={loadingMoreStatus}
        onValueChange={(k: string | number) => setLoadMoreValue(k.toString())}
        onLoadMore={() => {
          setLoadingMoreStatus(true)
          setData((currentData) => {
            setTimeout(() => {
              setLoadingMoreStatus(false)
            })
            return [
              ...currentData,
              ...generateRandomData(10, currentData.length + 1),
            ]
          })
        }}
      >
        {data.map((item) => (
          <Dropdown.Item value={item.id} key={item.id}>
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Select>
    </div>
  )
}

export const Combobox: React.FC = () => {
  const [value, setValue] = React.useState<string>('cat')
  const [valueHeader, setValueHeader] = React.useState<string>('')
  const [disabledValue] = React.useState<string>('dog')
  const [customValue, setCustomValue] = React.useState<string>('kangaroo')

  return (
    <div style={{...style}}>
      <h3>Controlled</h3>
      <Dropdown.ComboBox
        isRequired
        label={
          <>
            Favorite Animal <FontAwesomeIcon icon={faBug} />
          </>
        }
        placeholder='Choose an animal'
        value={value}
        onValueChange={(k: string | number) => setValue(k.toString())}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
        <Dropdown.Item value='dog1'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark1'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo1'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake1'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Allow deselect with double click</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        shouldDeselect
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Disabled</h3>
      <Dropdown.ComboBox
        isDisabled
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={disabledValue}
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>UnControlled</h3>
      <Dropdown.ComboBox label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Erorr</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>with allowsCustomValue</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={customValue}
        onValueChange={(k: string | number) => setCustomValue(k.toString())}
        allowsCustomValue
      >
        <Dropdown.Item
          value='panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item value='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>With Header</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        value={valueHeader}
        onValueChange={(value: string | number) =>
          setValueHeader(value.toString())
        }
      >
        <Dropdown.Header>
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
              onClick={() => setValueHeader('')}
            >
              Clear
            </button>
          </div>
        </Dropdown.Header>
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Loading</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>With Icon</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Number of rows</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Disabled Clearable</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        disableClearable
      >
        <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item value='cat'>Cat</Dropdown.Item>
        <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item value='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>With Section</h3>
      <Dropdown.ComboBox label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item value='fly'>Fly</Dropdown.Item>
        <Dropdown.Section title='Group 1'>
          <Dropdown.Item value='panda'>Red Panda</Dropdown.Item>
          <Dropdown.Item value='cat'>Cat</Dropdown.Item>
          <Dropdown.Item value='dog'>Dog</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title='Group 2'>
          <Dropdown.Item value='aardvark'>Aardvark</Dropdown.Item>
          <Dropdown.Item value='kangaroo'>Kangaroo</Dropdown.Item>
          <Dropdown.Item value='snake'>Snake</Dropdown.Item>
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
    </div>
  )
}

export const ForH5 = () => {
  return (
    <div style={{...style}}>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        h5
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
    </div>
  )
}

const meta = {
  title: 'Example/Dropdown',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Select>

export default meta
