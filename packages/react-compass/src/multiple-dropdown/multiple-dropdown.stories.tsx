import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {Key} from 'react'
import {Column} from '../utils/components'
import MultipleDropdown from './index'

export const Default: React.FC = () => {
  const [value, setValue] = React.useState<Key[]>([])
  return (
    <Column>
      <h3>Controlled</h3>
      <MultipleDropdown
        label='Favorite Animal'
        disabledKeys={['cat']}
        placeholder='Choose an animal'
        selectedKeys={value}
        defaultSelectedKeys={['dog']}
        isRequired
        onSelectionChange={(k: Key[]) => setValue(k)}
        onBlur={() => console.log('blur')}
        onFocus={() => console.log('focus')}
      >
        <MultipleDropdown.Item key='red panda'>
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
        <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
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
        <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>

      <h3>Custom Display value</h3>
      <MultipleDropdown
        label='Favorite Animal'
        customDisplayValue='Favorite Animal Selected'
        defaultSelectedKeys={['snake']}
        placeholder='Choose an animal'
      >
        <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog' variant='tick'>
          Dog
        </MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>

      <h3>Loading</h3>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Choose an animal'
        isLoading
      >
        <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
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
        <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>

      <h3>With Icon</h3>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Choose an animal'
        icon={<FontAwesomeIcon icon={faBug} />}
      >
        <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>

      <h3>Number of rows</h3>
      <MultipleDropdown
        label='Favorite Animal'
        placeholder='Choose an animal'
        numberOfRows={4}
      >
        <MultipleDropdown.Item key='red panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>

      <h3>With Section</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Choose an animal'>
        <MultipleDropdown.Item key='fly'>Fly</MultipleDropdown.Item>
        <MultipleDropdown.Section title='Group 1'>
          <MultipleDropdown.Item key='red panda'>
            Red Panda
          </MultipleDropdown.Item>
          <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
          <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Group 2'>
          <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
          <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
          <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
        </MultipleDropdown.Section>
      </MultipleDropdown>

      <h3>Disabled</h3>
      <MultipleDropdown
        label='Favorite Animal'
        disabledKeys={['cat']}
        placeholder='Choose an animal'
        selectedKeys={value}
        defaultSelectedKeys={['cat']}
        isRequired
        onSelectionChange={(k: Key[]) => setValue(k)}
        isDisabled
      >
        <MultipleDropdown.Item key='red panda'>
          <FontAwesomeIcon icon={faBug} style={{marginRight: 5}} />
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item key='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item key='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item key='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item key='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item key='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
    </Column>
  )
}
