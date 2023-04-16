import Button from '../button/index'
import Dialog from './index'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'

describe('dialog.cy.ts', () => {
  it('C01: Should render children', () => {
    const dialog = (
      <Dialog.Trigger isOpen={true}>
        <Dialog>
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button>Cancel</Button>
            <Button>Do it</Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>
    )

    cy.mount(dialog)

    cy.get('h3').should('have.text', 'My title')
    cy.get('p').should('have.text', lorem)
  })
})
