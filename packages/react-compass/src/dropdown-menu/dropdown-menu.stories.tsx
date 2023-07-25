import React from 'react'
import DropdownMenu from '.'
import Button from '../button'
import {Column} from '../utils/components'

export const Default: React.FC = () => {
  const handleItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
    console.log('handleItemClick: ', event)
  }

  return (
    <Column>
      <h3>Default</h3>
      <DropdownMenu>
        <DropdownMenu.Toggle>
          <Button>Default</Button>
        </DropdownMenu.Toggle>
        <DropdownMenu.Menu>
          <DropdownMenu.Item onClick={handleItemClick}>
            Item 1
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleItemClick}>
            Item 2
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleItemClick} isActived>
            Item 3
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleItemClick}>
            Item 4
          </DropdownMenu.Item>
        </DropdownMenu.Menu>
      </DropdownMenu>
      <h3>Submenu</h3>
      <DropdownMenu>
        <DropdownMenu.Toggle>
          <Button>Submenu</Button>
        </DropdownMenu.Toggle>
        <DropdownMenu.Menu>
          <DropdownMenu.Item isActived onClick={handleItemClick}>
            Item 1
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleItemClick}>
            Item 2
            <DropdownMenu.Submenu>
              <DropdownMenu.Item>
                Item 2 - 1
                <DropdownMenu.Submenu>
                  <DropdownMenu.Item>Item 2 - 1 - 1</DropdownMenu.Item>
                  <DropdownMenu.Item>Item 2 - 1 - 2</DropdownMenu.Item>
                </DropdownMenu.Submenu>
              </DropdownMenu.Item>
              <DropdownMenu.Item>Item 2 - 2</DropdownMenu.Item>
            </DropdownMenu.Submenu>
          </DropdownMenu.Item>
          <DropdownMenu.Item isDisabled onClick={handleItemClick}>
            Item 3
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleItemClick}>
            Item 4
            <DropdownMenu.Submenu>
              <DropdownMenu.Item>
                Item 4 - 1
                <DropdownMenu.Submenu>
                  <DropdownMenu.Item>Item 4 - 1 - 1</DropdownMenu.Item>
                  <DropdownMenu.Item>Item 4 - 1 - 2</DropdownMenu.Item>
                </DropdownMenu.Submenu>
              </DropdownMenu.Item>
              <DropdownMenu.Item>Item 4 - 2</DropdownMenu.Item>
            </DropdownMenu.Submenu>
          </DropdownMenu.Item>
        </DropdownMenu.Menu>
      </DropdownMenu>
    </Column>
  )
}
