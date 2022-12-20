import {faBug} from '@fortawesome/free-solid-svg-icons'
import Button from '../button/index'
import {Icon} from '../icon'
import Error from './index'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'

describe('dialog.cy.ts', () => {
  it('C01: Should render children', () => {
    const dialog = (
      <Error>
        <Error.Icon>
          <Icon icon={faBug} />
        </Error.Icon>
        <Error.Title>Error: some bugs</Error.Title>
        <Error.Description>{lorem}</Error.Description>
        <Error.Action>
          <Button>OK</Button>
        </Error.Action>
      </Error>
    )

    cy.mount(dialog)

    cy.get('h3').should('have.text', 'Error: some bugs')
    cy.get('p').should('have.text', lorem)
  })
})
