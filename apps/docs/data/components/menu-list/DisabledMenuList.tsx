import BugIcon from '@comfortdelgro/compass-icons/react/bug'
import {Column, MenuList, MenuListDropdown} from '@comfortdelgro/react-compass'

const DisabledItem: React.FC = () => {
  return (
    <Column>
      <MenuList css={{height: '800px'}}>
        <MenuListDropdown>
          <MenuListDropdown.Header>Dashboard</MenuListDropdown.Header>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item isActive>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item isNested>
            <MenuListDropdown>
              <MenuListDropdown.Header>Dashboard</MenuListDropdown.Header>
              <MenuListDropdown.Item icon={<BugIcon />}>
                Menu
              </MenuListDropdown.Item>
              <MenuListDropdown.Item isDisabled icon={<BugIcon />}>
                Menu
              </MenuListDropdown.Item>
              <MenuListDropdown.Item icon={<BugIcon />}>
                Menu
              </MenuListDropdown.Item>
              <MenuListDropdown.Item icon={<BugIcon />}>
                Menu
              </MenuListDropdown.Item>
              <MenuListDropdown.Item icon={<BugIcon />}>
                Menu
              </MenuListDropdown.Item>
              <MenuListDropdown.Item icon={<BugIcon />}>
                Menu
              </MenuListDropdown.Item>
              <MenuListDropdown.Item icon={<BugIcon />}>
                Menu
              </MenuListDropdown.Item>
            </MenuListDropdown>
          </MenuListDropdown.Item>
        </MenuListDropdown>
      </MenuList>
    </Column>
  )
}

export default DisabledItem
