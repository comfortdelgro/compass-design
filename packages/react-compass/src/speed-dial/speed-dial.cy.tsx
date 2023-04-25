import React from 'react'
import SpeedDial from './index'

describe('speed-dial', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })
  const actions = [
    {
      name: 'Action 1',
      icon: '+',
      onClick: () => console.log('Action 1 clicked'),
    },
    {
      name: 'Action 2',
      icon: '-',
      onClick: () => console.log('Action 2 clicked'),
    },
    // Add more actions as needed
  ]

  const speedDial = <SpeedDial actions={actions} position='up' />

  it('clicks the first action button', () => {
    cy.mount(speedDial)
    cy.get('.speed-dial__trigger').click()
    cy.get('.speed-dial__actions').should('be.visible')
    cy.contains('Action 1').click()
    cy.window().then(($window) => {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect($window.console.log).to.be.calledWith('Action 1 clicked')
    })
  })

  it('clicks the second action button', () => {
    cy.visit('/')
    cy.get('.speed-dial__trigger').click()
    cy.get('.speed-dial__actions').should('be.visible')
    cy.contains('Action 2').click()
    cy.window().then(($window) => {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect($window.console.log).to.be.calledWith('Action 2 clicked')
    })
  })
})
