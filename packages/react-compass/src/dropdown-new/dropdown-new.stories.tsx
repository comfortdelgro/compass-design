import React from 'react'
import {Column} from '../utils'
import DropdownNew from './'

export const Default: React.FC = () => {
  const [value, setValue] = React.useState<React.Key>('')
  return (
    <Column>
      <h3>Default</h3>
      <DropdownNew placeholder='Choose an animal'>
        <DropdownNew.Item key='dog'>Dog</DropdownNew.Item>
        <DropdownNew.Item key='aardvark'>Aardvark</DropdownNew.Item>
        <DropdownNew.Item key='kangaroo'>Kangaroo</DropdownNew.Item>
        <DropdownNew.Item key='snakessss'>Snake</DropdownNew.Item>
      </DropdownNew>
      <h3>Combobox</h3>
      <DropdownNew type='combobox'>
        <DropdownNew.Item key='dog'>Dog</DropdownNew.Item>
        <DropdownNew.Item key='aardvark'>Aardvark</DropdownNew.Item>
        <DropdownNew.Item key='kangaroo'>Kangaroo</DropdownNew.Item>
        <DropdownNew.Item key='snakessss'>Snake</DropdownNew.Item>
      </DropdownNew>
      <h3>Flag</h3>
      <DropdownNew type='flag'>
        <DropdownNew.Item key='dog'>Dog</DropdownNew.Item>
        <DropdownNew.Item key='aardvark'>Aardvark</DropdownNew.Item>
        <DropdownNew.Item key='kangaroo'>Kangaroo</DropdownNew.Item>
        <DropdownNew.Item key='snakessss'>Snake</DropdownNew.Item>
      </DropdownNew>
    </Column>
  )
}
