import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {Key} from 'react'
import {Column} from '../utils/components'
import ADFlag from './flags/ad'
import AEFlag from './flags/ae'
import AFFlag from './flags/af'
import Dropdown from './index'

export const Flag: React.FC = () => {
  const [value, setValue] = React.useState<React.Key>('')
  return (
    <Column>
      <h3>Flag</h3>
      <Dropdown.Flag
        isRequired
        label={
          <>
            List of country <FontAwesomeIcon icon={faBug} />
          </>
        }
        flagKeyType='country-code'
        placeholder='Choose a country'
        selectedKey={value}
        onSelectionChange={(e) => setValue(e)}
        onCountryChange={(e) => console.log(e)}
      />
      <h3>Disabled Flag</h3>
      <Dropdown.Flag
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
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          key='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Prefix</h3>
      <Dropdown.Select
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
        <Dropdown.Item key='afghanistan'>Afghanistan (+93)</Dropdown.Item>
        <Dropdown.Item key='albania'>Albania (+355)</Dropdown.Item>
        <Dropdown.Item key='algeria'>Algeria (+213)</Dropdown.Item>
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
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          key='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snakessss'>Snake</Dropdown.Item>
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
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item
          key='cat'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          type='color'
          rightColor='red'
          textValue='pandared'
        >
          Cat Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snakessss'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>UnControlled</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultSelectedKey={'dog'}
        disabledKeys={['dog']}
      >
        <Dropdown.Item
          key='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          textValue='pandared'
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Allow deselect with double click</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        defaultSelectedKey={'dog'}
        disabledKeys={['dog']}
        shouldDeselect
      >
        <Dropdown.Item
          key='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
          textValue='pandared'
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
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
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
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
        <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item key='cat'>Cat</Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Loading</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item key='cat'>Cat</Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>With Icon</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item key='cat'>Cat</Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>Number of rows</h3>
      <Dropdown.Select
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item key='cat'>Cat</Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.Select>
      <h3>With Section</h3>
      <Dropdown.Select label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item key='fly'>Fly</Dropdown.Item>
        <Dropdown.Section title='Group 1'>
          <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
          <Dropdown.Item key='cat'>Cat</Dropdown.Item>
          <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title='Group 2'>
          <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
          <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
          <Dropdown.Item key='snake'>Snake</Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Select>
    </Column>
  )
}

export const ComboBox: React.FC = () => {
  const [value, setValue] = React.useState<Key>('cat')
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
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Allow deselect with double click</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        shouldDeselect
      >
        <Dropdown.Item
          key='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>

      <h3>Disabled</h3>
      <Dropdown.ComboBox
        isDisabled
        isRequired
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value}
        onSelectionChange={(k: Key) => setValue(k)}
      >
        <Dropdown.Item
          key='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>UnControlled</h3>
      <Dropdown.ComboBox label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item
          key='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
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
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>with allowsCustomValue</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        selectedKey={value}
        onSelectionChange={(k: Key) => setValue(k)}
        allowsCustomValue
      >
        <Dropdown.Item
          key='red panda'
          leftIcon={<FontAwesomeIcon icon={faBug} />}
        >
          Red Panda
        </Dropdown.Item>
        <Dropdown.Item key='cat' type='color' rightColor='red'>
          Cat
        </Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
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
        <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item key='cat'>Cat</Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Loading</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item key='cat'>Cat</Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>With Icon</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item key='cat'>Cat</Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>Number of rows</h3>
      <Dropdown.ComboBox
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
        <Dropdown.Item key='cat'>Cat</Dropdown.Item>
        <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
        <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
        <Dropdown.Item key='snake'>Snake</Dropdown.Item>
      </Dropdown.ComboBox>
      <h3>With Section</h3>
      <Dropdown.ComboBox label='Favorite Animal' placeholder='Choose an animal'>
        <Dropdown.Item key='fly'>Fly</Dropdown.Item>
        <Dropdown.Section title='Group 1'>
          <Dropdown.Item key='red panda'>Red Panda</Dropdown.Item>
          <Dropdown.Item key='cat'>Cat</Dropdown.Item>
          <Dropdown.Item key='dog'>Dog</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title='Group 2'>
          <Dropdown.Item key='aardvark'>Aardvark</Dropdown.Item>
          <Dropdown.Item key='kangaroo'>Kangaroo</Dropdown.Item>
          <Dropdown.Item key='snake'>Snake</Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.ComboBox>
    </Column>
  )
}
