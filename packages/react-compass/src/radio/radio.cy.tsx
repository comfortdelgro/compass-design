import Radio from './index'

describe('progress-bar.cy.ts', () => {
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
    cy.get('.c-IGbri-bHwDvJ-variant-outlined')
      //   .matchImage()
      .should('have.css', 'border')
      .and('eq', '1px solid rgb(1, 66, 175)')

    cy.get('.c-eBLxVd svg').trigger('mouseover')

    cy.get('.c-eBLxVd div').should('have.css', 'display').and('eq', 'block')
  })
})
import Radio from './index'

describe('progress-bar.cy.ts', () => {
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
    cy.get('.c-IGbri-bHwDvJ-variant-outlined')
      //   .matchImage()
      .should('have.css', 'border')
      .and('eq', '1px solid rgb(1, 66, 175)')

    cy.get('.c-eBLxVd svg').trigger('mouseover')

    cy.get('.c-eBLxVd div').should('have.css', 'display').and('eq', 'block')
  })
})
