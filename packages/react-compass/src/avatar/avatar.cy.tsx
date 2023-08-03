import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

import Avatar from './index'

const src = `https://i.pravatar.cc/150?img=32`

describe('avatar.cy.ts', () => {
  it('C01: Able to see image', () => {
    const avatar = <Avatar label='Albert Einstein' image={src} size='lg' />

    cy.mount(avatar)
    cy.get('img').should('be.visible')
  })

  it('C02: Able to see icon', () => {
    const avatar = (
      <Avatar
        icon={<FontAwesomeIcon icon={faBug} />}
        label='Albert Einstein'
        size='lg'
      />
    )

    cy.mount(avatar)
    cy.get('.icon-wrapper').should('be.visible')
  })
})
