import type {Meta} from '@storybook/react'
import React from 'react'
import {Button} from '..'
import DropdownMenu from './index'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

export const Basic: React.FC = () => {
  const handleItemSelect = (
    event: React.MouseEvent<HTMLLIElement>,
    eventKey?: string | number,
  ) => {
    console.log('handleItemSelect: ', eventKey, event)
  }

  return (
    <div style={{...style}}>
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
    </div>
  )
}

const meta = {
  title: 'Example/DropdownMenu',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
