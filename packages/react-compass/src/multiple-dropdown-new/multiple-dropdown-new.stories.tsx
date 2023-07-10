import React, {useEffect} from 'react'
import {Column} from '../utils'
import MultipleDropdown from './'

export const Default: React.FC = () => {
  const [value2, setValue2] = React.useState([1])

  useEffect(() => {
    console.log(value2)
  }, [value2])

  return (
    <Column>
      <MultipleDropdown
        placeholder='Multiple dropdown Select'
        defaultSelectedKeys={[1, 2]}
        variant='select'
        displayedValue='string'
      >
        <MultipleDropdown.Section title='Group 1' isClickable id={1}>
          <MultipleDropdown.Item value={1}>Item 1</MultipleDropdown.Item>
          <MultipleDropdown.Item value={2}>Item 2</MultipleDropdown.Item>
          <MultipleDropdown.Item value={3}>Item 3</MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Group 2' id={2}>
          <MultipleDropdown.Item value={11}>Item 11</MultipleDropdown.Item>
          <MultipleDropdown.Item value={22}>Item 22</MultipleDropdown.Item>
          <MultipleDropdown.Item value={33}>Item 33</MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Group 3' isClickable id={3}>
          <MultipleDropdown.Item value={111}>Item 111</MultipleDropdown.Item>
          <MultipleDropdown.Item value={222}>Item 222</MultipleDropdown.Item>
          <MultipleDropdown.Item value={333}>Item 333</MultipleDropdown.Item>
        </MultipleDropdown.Section>
      </MultipleDropdown>
      <MultipleDropdown
        placeholder='MultipleDropdown'
        selectedKeys={value2}
        erroredKeys={[11, 22]}
        onSelectionChange={(values) =>
          setValue2(values.map((item) => Number(item)))
        }
      >
        <MultipleDropdown.Item value={1}>Item 1</MultipleDropdown.Item>
        <MultipleDropdown.Item value={2}>Item 2</MultipleDropdown.Item>
        <MultipleDropdown.Item value={3}>Item 3</MultipleDropdown.Item>
        <MultipleDropdown.Item value={11}>Item 11</MultipleDropdown.Item>
        <MultipleDropdown.Item value={22}>Item 22</MultipleDropdown.Item>
        <MultipleDropdown.Item value={33}>Item 33</MultipleDropdown.Item>
        <MultipleDropdown.Item value={111}>Item 111</MultipleDropdown.Item>
        <MultipleDropdown.Item value={222}>Item 222</MultipleDropdown.Item>
        <MultipleDropdown.Item value={333}>Item 333</MultipleDropdown.Item>
      </MultipleDropdown>
    </Column>
  )
}
