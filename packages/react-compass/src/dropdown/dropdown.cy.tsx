import {Item} from '@react-stately/collections'
import Dropdown from './index'

describe('dropdown.cy.ts', () => {
  it('C01: Should render children', () => {
    const dropdown = (
      <Dropdown label='Favorite Animal' placeholder='adasdasd'>
        <Item key='red panda'>Red Panda</Item>
        <Item key='cat'>Cat</Item>
        <Item key='dog'>Dog</Item>
        <Item key='aardvark'>Aardvark</Item>
        <Item key='kangaroo'>Kangaroo</Item>
        <Item key='snake'>Snake</Item>
      </Dropdown>
    )
    cy.mount(dropdown)
  })
})
