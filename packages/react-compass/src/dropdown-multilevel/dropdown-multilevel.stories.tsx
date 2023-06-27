import React from 'react'
import Button from '../button'
import {Column} from '../utils/components'
import DropdownMultilevel from './'

export const Default: React.FC = () => (
  <Column>
    <h3>Default divider</h3>
    <DropdownMultilevel>
      <DropdownMultilevel.Toggle>
        <Button>DropdownMultilevelToggle</Button>
      </DropdownMultilevel.Toggle>
      <DropdownMultilevel.Menu>
        <DropdownMultilevel.Item>
          Item 1
          <DropdownMultilevel.Submenu>
            <DropdownMultilevel.Item>Item 1 - 1</DropdownMultilevel.Item>
            <DropdownMultilevel.Item>Item 1 - 2</DropdownMultilevel.Item>
          </DropdownMultilevel.Submenu>
        </DropdownMultilevel.Item>
        <DropdownMultilevel.Item>Item 2</DropdownMultilevel.Item>
      </DropdownMultilevel.Menu>
    </DropdownMultilevel>
  </Column>
)
