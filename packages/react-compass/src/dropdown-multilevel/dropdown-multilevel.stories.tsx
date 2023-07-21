import React from 'react'
import Button from '../button'
import {Column} from '../utils/components'
import DropdownMenu from './'

export const Default: React.FC = () => (
  <Column>
    <h3>Default divider</h3>
    <DropdownMenu>
      <DropdownMenu.Toggle>
        <Button>DropdownMenuToggle</Button>
      </DropdownMenu.Toggle>
      <DropdownMenu.Menu>
        <DropdownMenu.Item>Item 1</DropdownMenu.Item>
        <DropdownMenu.Item>
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
      </DropdownMenu.Menu>
    </DropdownMenu>
  </Column>
)
