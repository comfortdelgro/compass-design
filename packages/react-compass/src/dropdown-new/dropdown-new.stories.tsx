import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {Key} from 'react'
import {Column} from '../utils'
import DropdownNew from './'
import ADFlag from './flags/ad'
import AEFlag from './flags/ae'
import AFFlag from './flags/af'

export const Flag: React.FC = () => {
  const [value, setValue] = React.useState<React.Key>('')
  return (
    <Column>
      <h3>Flag</h3>
      <DropdownNew.Flag
        isRequired
        label={<>List of country</>}
        flagKeyType={'country-code'}
        placeholder='Choose a country'
        selectedKey={value}
        onSelectionChange={(e) => {
          console.log(e)
          setValue(e)
        }}
        onCountryChange={(e) => {
          console.log(e)
        }}
      />
      <h3>Disabled Flag</h3>
      <DropdownNew.Flag
        isDisabled
        isRequired
        label='List of country'
        placeholder='Choose a country'
      />
    </Column>
  )
}

export const Select: React.FC = () => {
  const [value, setValue] = React.useState<Key>('cat')
  const [value1, setValue1] = React.useState<Key>('cat')

  const handlePrefix = (key: Key) => {
    if (key === 'afghanistan') {
      return <ADFlag />
    }
    if (key === 'albania') {
      return <AEFlag />
    }
    if (key === 'algeria') {
      return <AFFlag />
    }
    return null
  }

  return (
    <Column>
      <h3>Controlled</h3>
      <DropdownNew.Select
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
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item
          key='cat'
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snakessss' key='snakessss'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>Prefix</h3>
      <DropdownNew.Select
        isRequired
        label={<>Phone Code Select</>}
        placeholder='Choose an animal'
        selectedKey={value}
        onSelectionChange={(k: Key) => setValue(k)}
        prefix={
          <div
            style={{
              marginRight: '0.7rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {handlePrefix(value)}
          </div>
        }
      >
        <DropdownNew.Item value='afghanistan' key='afghanistan'>
          Afghanistan (+93)
        </DropdownNew.Item>
        <DropdownNew.Item value='albania' key='albania'>
          Albania (+355)
        </DropdownNew.Item>
        <DropdownNew.Item value='algeria' key='algeria'>
          Algeria (+213)
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>Disable the whole thing</h3>
      <DropdownNew.Select
        isDisabled
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value1}
        onSelectionChange={(k: Key) => setValue1(k)}
      >
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item
          key='cat'
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snakessss' key='snakessss'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>Disable only one item</h3>
      <DropdownNew.Select
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value1}
        onSelectionChange={(k: Key) => setValue1(k)}
        disabledKeys={['dog']}
      >
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item
          key='cat'
          value='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snakessss' key='snakessss'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>UnControlled</h3>
      <DropdownNew.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultSelectedKey={'dog'}
        disabledKeys={['dog']}
      >
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          textValue='pandared'
        >
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>Allow deselect with double click</h3>
      <DropdownNew.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultSelectedKey={'dog'}
        disabledKeys={['dog']}
        shouldDeselect
      >
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          textValue='pandared'
        >
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>Erorr</h3>
      <DropdownNew.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>With Header</h3>
      <DropdownNew.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
      >
        <DropdownNew.Header>
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
        </DropdownNew.Header>
        <DropdownNew.Item key='red panda' value='red panda'>
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>Loading</h3>
      <DropdownNew.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <DropdownNew.Item key='red panda' value='red panda'>
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>With Icon</h3>
      <DropdownNew.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <DropdownNew.Item key='red panda' value='red panda'>
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>Number of rows</h3>
      <DropdownNew.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <DropdownNew.Item key='red panda' value='red panda'>
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.Select>
      <h3>With Section</h3>
      <DropdownNew.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
      >
        <DropdownNew.Item value='fly' key='fly'>
          Fly
        </DropdownNew.Item>
        <DropdownNew.Section title='Group 1'>
          <DropdownNew.Item key='red panda' value='red panda'>
            Red Panda
          </DropdownNew.Item>
          <DropdownNew.Item key='cat' value='cat'>
            Cat
          </DropdownNew.Item>
          <DropdownNew.Item value='dog' key='dog'>
            Dog
          </DropdownNew.Item>
        </DropdownNew.Section>
        <DropdownNew.Section title='Group 2'>
          <DropdownNew.Item value='aardvark' key='aardvark'>
            Aardvark
          </DropdownNew.Item>
          <DropdownNew.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </DropdownNew.Item>
          <DropdownNew.Item value='snake' key='snake'>
            Snake
          </DropdownNew.Item>
        </DropdownNew.Section>
      </DropdownNew.Select>
    </Column>
  )
}

export const Combobox: React.FC = () => {
  const [value, setValue] = React.useState<Key>('cat')
  return (
    <Column>
      <h3>Controlled</h3>
      <DropdownNew.ComboBox
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
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
        <DropdownNew.Item value='dog1' key='dog1'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark1' key='aardvark1'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo1' key='kangaroo1'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake1' key='snake1'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>

      <h3>Allow deselect with double click</h3>
      <DropdownNew.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        shouldDeselect
      >
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>

      <h3>Disabled</h3>
      <DropdownNew.ComboBox
        isDisabled
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value}
        onSelectionChange={(k: Key) => setValue(k)}
      >
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>
      <h3>UnControlled</h3>
      <DropdownNew.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
      >
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>
      <h3>Erorr</h3>
      <DropdownNew.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isErrored
        errorMessage='Error Message'
      >
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>
      <h3>with allowsCustomValue</h3>
      <DropdownNew.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value}
        onSelectionChange={(k: Key) => setValue(k)}
        allowsCustomValue
      >
        <DropdownNew.Item
          key='red panda'
          value='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat' type='color' rightColor='red'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>
      <h3>With Header</h3>
      <DropdownNew.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
      >
        <DropdownNew.Header>
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
        </DropdownNew.Header>
        <DropdownNew.Item key='red panda' value='red panda'>
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>
      <h3>Loading</h3>
      <DropdownNew.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <DropdownNew.Item key='red panda' value='red panda'>
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>
      <h3>With Icon</h3>
      <DropdownNew.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <DropdownNew.Item key='red panda' value='red panda'>
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>
      <h3>Number of rows</h3>
      <DropdownNew.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <DropdownNew.Item key='red panda' value='red panda'>
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>

      <h3>Disabled Clearable</h3>
      <DropdownNew.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        disableClearable
      >
        <DropdownNew.Item key='red panda' value='red panda'>
          Red Panda
        </DropdownNew.Item>
        <DropdownNew.Item key='cat' value='cat'>
          Cat
        </DropdownNew.Item>
        <DropdownNew.Item value='dog' key='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item value='aardvark' key='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item value='kangaroo' key='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item value='snake' key='snake'>
          Snake
        </DropdownNew.Item>
      </DropdownNew.ComboBox>

      <h3>With Section</h3>
      <DropdownNew.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
      >
        <DropdownNew.Item value='fly' key='fly'>
          Fly
        </DropdownNew.Item>
        <DropdownNew.Section title='Group 1'>
          <DropdownNew.Item key='red panda' value='red panda'>
            Red Panda
          </DropdownNew.Item>
          <DropdownNew.Item key='cat' value='cat'>
            Cat
          </DropdownNew.Item>
          <DropdownNew.Item value='dog' key='dog'>
            Dog
          </DropdownNew.Item>
        </DropdownNew.Section>
        <DropdownNew.Section title='Group 2'>
          <DropdownNew.Item value='aardvark' key='aardvark'>
            Aardvark
          </DropdownNew.Item>
          <DropdownNew.Item value='kangaroo' key='kangaroo'>
            Kangaroo
          </DropdownNew.Item>
          <DropdownNew.Item value='snake' key='snake'>
            Snake
          </DropdownNew.Item>
        </DropdownNew.Section>
      </DropdownNew.ComboBox>
    </Column>
  )
}
