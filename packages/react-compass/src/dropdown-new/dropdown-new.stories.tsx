import React from 'react'
import {Column} from '../utils'
import DropdownNew from './'

export const Default: React.FC = () => {
  const [value, setValue] = React.useState<React.Key>('dog')

  // useEffect(() => {
  //   console.log('Dropdown changed: ', value)
  // }, [value])

  return (
    <Column>
      {/* <h3>Default</h3>
      <DropdownNew
        placeholder='Choose an animal'
        label='Test'
        selectedKey={value}
        numberOfRows={4}
        onSelectionChange={(value) => setValue(value)}
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
      </DropdownNew> */}
      <h3>Combobox</h3>
      <DropdownNew
        type='combobox'
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
      </DropdownNew>
      <h3>Flag</h3>
      <DropdownNew type='flag' />
    </Column>
  )
}
