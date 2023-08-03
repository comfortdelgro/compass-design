import React from 'react'
import DropdownMenu from '.'
import Button from '../button'
import {Column} from '../utils/components'

export const Default: React.FC = () => {
  const handleItemSelect = (
    event: React.MouseEvent<HTMLLIElement>,
    eventKey?: string | number,
  ) => {
    console.log('handleItemSelect: ', eventKey, event)
  }

  return (
    <Column>
      <h3>Default</h3>
      <DropdownMenu>
        <DropdownMenu.Toggle>
          <Button>Default</Button>
        </DropdownMenu.Toggle>
        <DropdownMenu.Menu>
          <DropdownMenu.Item onSelect={handleItemSelect} eventKey='item-1'>
            Item 1
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={handleItemSelect} eventKey='item-2'>
            Item 2
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={handleItemSelect}
            isActived
            eventKey='item-3'
          >
            Item 3
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={handleItemSelect} eventKey='item-4'>
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
          <DropdownMenu.Item
            isActived
            onSelect={handleItemSelect}
            eventKey='item-1'
          >
            Item 1
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={handleItemSelect} eventKey='item-2'>
            Item 2
            <DropdownMenu.Submenu>
              <DropdownMenu.Item
                eventKey='item-2-1'
                onSelect={handleItemSelect}
              >
                Item 2 - 1
                <DropdownMenu.Submenu>
                  <DropdownMenu.Item
                    eventKey='item-2-1-1'
                    onSelect={handleItemSelect}
                  >
                    Item 2 - 1 - 1
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    eventKey='item-2-1-2'
                    onSelect={handleItemSelect}
                  >
                    Item 2 - 1 - 2
                  </DropdownMenu.Item>
                </DropdownMenu.Submenu>
              </DropdownMenu.Item>
              <DropdownMenu.Item
                eventKey='item-2-2'
                onSelect={handleItemSelect}
              >
                Item 2 - 2
              </DropdownMenu.Item>
            </DropdownMenu.Submenu>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            isDisabled
            onSelect={handleItemSelect}
            eventKey='item-3'
          >
            Item 3
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={handleItemSelect} eventKey='item-4'>
            Item 4
            <DropdownMenu.Submenu>
              <DropdownMenu.Item
                eventKey='item-4-1'
                onSelect={handleItemSelect}
              >
                Item 4 - 1
                <DropdownMenu.Submenu>
                  <DropdownMenu.Item
                    eventKey='item-4-1-1'
                    onSelect={handleItemSelect}
                  >
                    Item 4 - 1 - 1
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    eventKey='item-4-1-2'
                    onSelect={handleItemSelect}
                  >
                    Item 4 - 1 - 2
                  </DropdownMenu.Item>
                </DropdownMenu.Submenu>
              </DropdownMenu.Item>
              <DropdownMenu.Item
                eventKey='item-4-2'
                onSelect={handleItemSelect}
              >
                Item 4 - 2
              </DropdownMenu.Item>
            </DropdownMenu.Submenu>
          </DropdownMenu.Item>
        </DropdownMenu.Menu>
      </DropdownMenu>
    </Column>
  )
}
