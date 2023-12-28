import {faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Meta} from '@storybook/react'
import MenuList, {MenuListDropdown} from './index'

export const Basic = () => {
  return (
    <div>
      <MenuList css={{height: '800px'}}>
        <MenuListDropdown>
          <MenuListDropdown.Header>Dashboard</MenuListDropdown.Header>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item isActive>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
        </MenuListDropdown>
        <MenuListDropdown>
          <MenuListDropdown.Header leftIcon={false} rightIcon={true}>
            More menu
          </MenuListDropdown.Header>
          <MenuListDropdown.Item icon={<FontAwesomeIcon icon={faUser} />}>
            Menu
          </MenuListDropdown.Item>
          <MenuListDropdown.Item icon={<FontAwesomeIcon icon={faUser} />}>
            Menu
          </MenuListDropdown.Item>
          <MenuListDropdown.Item icon={<FontAwesomeIcon icon={faUser} />}>
            Menu
          </MenuListDropdown.Item>
          <MenuListDropdown.Item isNested>
            <MenuListDropdown>
              <MenuListDropdown.Header>Nested menu</MenuListDropdown.Header>
              <MenuListDropdown.Item icon={<FontAwesomeIcon icon={faUser} />}>
                Menu
              </MenuListDropdown.Item>
              <MenuListDropdown.Item icon={<FontAwesomeIcon icon={faUser} />}>
                Menu
              </MenuListDropdown.Item>
              <MenuListDropdown.Item icon={<FontAwesomeIcon icon={faUser} />}>
                Menu
              </MenuListDropdown.Item>
              <MenuListDropdown.Item icon={<FontAwesomeIcon icon={faUser} />}>
                Menu
              </MenuListDropdown.Item>
            </MenuListDropdown>
          </MenuListDropdown.Item>
        </MenuListDropdown>
      </MenuList>
    </div>
  )
}

const meta = {
  title: 'Example/MenuList',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
