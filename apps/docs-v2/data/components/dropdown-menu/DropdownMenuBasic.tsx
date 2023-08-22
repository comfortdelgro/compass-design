import {Button, DropdownMenu} from '@comfortdelgro/react-compass'

function BasicExample() {
  return (
    <DropdownMenu>
      <DropdownMenu.Toggle>
        <Button variant='secondary'>Default</Button>
      </DropdownMenu.Toggle>
      <DropdownMenu.Menu>
        <DropdownMenu.Item>Item 1</DropdownMenu.Item>
        <DropdownMenu.Item>Item 2</DropdownMenu.Item>
        <DropdownMenu.Item isActived>Item 3</DropdownMenu.Item>
        <DropdownMenu.Item>Item 4</DropdownMenu.Item>
      </DropdownMenu.Menu>
    </DropdownMenu>
  )
}

export default BasicExample
