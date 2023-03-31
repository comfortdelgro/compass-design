import React from 'react'
import Radio from './index'

describe('radio.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm value', () => {
    const radio = (
      <Radio.Group>
        <Radio
          variant='outlined'
          label='test'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='1'
          tooltip='This is tooltip'
        />
        <Radio
          variant='simple'
          label='test2'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='2'
        />
        <Radio
          variant='outlined'
          label='test3'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          value='3'
          isDisabled
        />
      </Radio.Group>
    )

    cy.mount(radio)
    cy.get(':nth-child(1) > .radio-content-wrapper > .radio-label').click()
    cy.get(':nth-child(2) > .radio-content-wrapper > .radio-label').click()
  })
})
