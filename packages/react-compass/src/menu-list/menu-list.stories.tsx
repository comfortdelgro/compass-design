import {faUser} from '@fortawesome/free-solid-svg-icons'
import {Column} from '../utils/components'
import MenuList, {MenuListDropdown} from './index'

export const MenuLists: React.FC = () => {
  return (
    <Column>
      <MenuList css={{height: '800px'}}>
        <MenuListDropdown>
          <MenuListDropdown.Header>Dashboard</MenuListDropdown.Header>
          <MenuListDropdown.Item>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item active>Menu</MenuListDropdown.Item>
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
          <MenuListDropdown.Item icon={faUser}>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item icon={faUser}>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item icon={faUser}>Menu</MenuListDropdown.Item>
          <MenuListDropdown.Item isNested>
            <MenuListDropdown>
              <MenuListDropdown.Header>Nested menu</MenuListDropdown.Header>
              <MenuListDropdown.Item icon={faUser}>Menu</MenuListDropdown.Item>
              <MenuListDropdown.Item icon={faUser}>Menu</MenuListDropdown.Item>
              <MenuListDropdown.Item icon={faUser}>Menu</MenuListDropdown.Item>
              <MenuListDropdown.Item icon={faUser}>Menu</MenuListDropdown.Item>
            </MenuListDropdown>
          </MenuListDropdown.Item>
        </MenuListDropdown>
      </MenuList>
    </Column>
  )
}
