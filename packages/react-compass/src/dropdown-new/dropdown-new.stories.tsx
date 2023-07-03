import React from 'react'
import {Column} from '../utils'
import DropdownNew from './'

export const Default: React.FC = () => {
  const [value, setValue] = React.useState<React.Key>('snakessss')

  return (
    <Column>
      {/* <h3>Default</h3>
      <DropdownNew.Select
        placeholder='Choose an animal'
        label='Test'
        selectedKey={value}
        shouldDeselect
        numberOfRows={4}
        onSelectionChange={(value) => setValue(value)}
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
        <DropdownNew.Item key='dog' value='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item key='aardvark' value='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item key='kangaroo' value='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item key='snakessss' value='snakessss'>
          Snake
        </DropdownNew.Item>
        <DropdownNew.Item key='dog1' value='dog1'>
          Dog 1
        </DropdownNew.Item>
        <DropdownNew.Item key='aardvark1' value='aardvark1'>
          Aardvark 1
        </DropdownNew.Item>
        <DropdownNew.Item key='kangaroo1' value='kangaroo1'>
          Kangaroo 1
        </DropdownNew.Item>
        <DropdownNew.Item key='snakessss1' value='snakessss1'>
          Snake 1
        </DropdownNew.Item>
      </DropdownNew.Select> */}
      <h3>Section</h3>
      <DropdownNew.Select
        placeholder='Choose an animal'
        label='Test'
        shouldDeselect
        numberOfRows={4}
        defaultSelectedKey='kangaroo'
      >
        <DropdownNew.Section title='Group 1'>
          <DropdownNew.Item key='dog' value='dog'>
            Dog
          </DropdownNew.Item>
          <DropdownNew.Item key='aardvark' value='aardvark'>
            Aardvark
          </DropdownNew.Item>
          <DropdownNew.Item key='kangaroo' value='kangaroo'>
            Kangaroo
          </DropdownNew.Item>
          <DropdownNew.Item key='snakessss' value='snakessss'>
            Snake
          </DropdownNew.Item>
        </DropdownNew.Section>
        <DropdownNew.Section title='Group 2'>
          <DropdownNew.Item key='dog1' value='dog1'>
            Dog 1
          </DropdownNew.Item>
          <DropdownNew.Item key='aardvark1' value='aardvark1'>
            Aardvark 1
          </DropdownNew.Item>
          <DropdownNew.Item key='kangaroo1' value='kangaroo1'>
            Kangaroo 1
          </DropdownNew.Item>
          <DropdownNew.Item key='snakessss1' value='snakessss1'>
            Snake 1
          </DropdownNew.Item>
        </DropdownNew.Section>
      </DropdownNew.Select>
      {/* <h3>Combobox</h3>
      <DropdownNew.ComboBox
        placeholder='Choose an animal'
        numberOfRows={4}
        onSelectionChange={(value) => console.log(value)}
      >
        <DropdownNew.Item key='dog' value='dog'>
          Dog
        </DropdownNew.Item>
        <DropdownNew.Item key='aardvark' value='aardvark'>
          Aardvark
        </DropdownNew.Item>
        <DropdownNew.Item key='kangaroo' value='kangaroo'>
          Kangaroo
        </DropdownNew.Item>
        <DropdownNew.Item key='snakessss' value='snakessss'>
          Snake
        </DropdownNew.Item>
        <DropdownNew.Item key='dog1' value='dog1'>
          Dog 1
        </DropdownNew.Item>
        <DropdownNew.Item key='aardvark1' value='aardvark1'>
          Aardvark 1
        </DropdownNew.Item>
        <DropdownNew.Item key='kangaroo1' value='kangaroo1'>
          Kangaroo 1
        </DropdownNew.Item>
        <DropdownNew.Item key='snakessss1' value='snakessss1'>
          Snake 1
        </DropdownNew.Item>
      </DropdownNew.ComboBox>
      <h3>Flag</h3>
      <DropdownNew.Flag type='flag' /> */}
    </Column>
  )
}
