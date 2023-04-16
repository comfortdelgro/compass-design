import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Avatar from '../avatar'
import Badge from '../badge'
import Icon from '../icon'
import List from './list'
import ListCard from './list-card'

describe('list.cy.ts', () => {
  it('C01: List should render children', () => {
    const list = (
      <List
        title='Title'
        description='Line 1'
        leftInfo={<Avatar label='A' />}
        rightInfo={{text: 'Details', icon: <Icon icon={faChevronRight} />}}
      />
    )
    cy.mount(list)
    cy.get('.list-left-info').children().should('be.visible')
    cy.get('.list-right-side').children().should('be.visible')
    cy.get('.list-text-title').should('have.text', 'Title')
    cy.get('.list-text-description').should('have.text', 'Line 1')
  })
  it('C02: ListCard should render children', () => {
    const list = (
      <ListCard
        title='Lorem Ipsum'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        badge={<Badge label='Active' color='success' variant='secondary' />}
        css={{width: '347px'}}
      />
    )
    cy.mount(list)
    cy.get('.list-card-title').should('have.text', 'Lorem Ipsum')
    cy.get('.list-card-header-right-side').children().should('be.visible')
    cy.get('.list-card-description').should(
      'have.text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    )
  })
})
