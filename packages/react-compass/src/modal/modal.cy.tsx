import React from 'react'
import Button from '../button/index'
import TextField from '../textfield'
import Modal from './index'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'

describe('modal.cy.ts', () => {
  it('C01: Should render children', () => {
    const modal = (
      <Modal.Trigger isOpen={true}>
        <Modal>
          <Modal.Title id='title'>My small title</Modal.Title>
          <Modal.Description id='description'>
            {lorem}
            <TextField />
          </Modal.Description>
          <Modal.Actions id='action'>
            <Button>Cancel</Button>
            <Button>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    )

    cy.mount(modal)

    cy.get('#title').should('have.text', 'My small title')
    cy.get('#description').should('have.text', lorem)
    cy.get('#action').children().should('be.visible')
  })
})
