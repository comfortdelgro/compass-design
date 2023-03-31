import {faUser} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import MenuList, {MenuListDropdown} from './index'

describe('menu-list.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })
  it('C01: List should render children', () => {
    const menuList = (
      <MenuList css={{height: '800px'}} id='menu'>
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
    )
    cy.mount(menuList)
    cy.get('#menu').children().should('be.visible')
  })
})
