import {faCircleUser} from '@fortawesome/free-regular-svg-icons'

import Avatar from './index'

const src = `https://i.pravatar.cc/150?img=32`

describe('avatar.cy.ts', () => {
  it('C01: Able to see image', () => {
    const avatar = <Avatar label='Albert Einstein' image={src} size='lg' />

    cy.mount(avatar)
    cy.get('img').should('be.visible')
  })

  it('C02: Able to see image and icon', () => {
    const avatar = (
      <Avatar icon={faCircleUser} label='Albert Einstein' size='lg' />
    )

    cy.mount(avatar)
    cy.get('.icon-wrapper').should('be.visible')
  })
})
