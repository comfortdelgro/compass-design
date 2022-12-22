import Badge from '../badge'
import Breadcrumbs from '../breadcrumbs'
import Button from '../button'
import PageHeader from './index'

const isCurrent = (i: number) => {
  if (window && window.location) return window.location.hash === `#${i}`
  return false
}

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum
amet natus doloribus laudantium exercitationem blanditiis velit
laborum repudiandae quas expedita.Lorem ipsum dolor sit amet
consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint
officiis, nisi quos quibusdam, voluptatum amet natus doloribus
laudantium exercitationem blanditiis velit laborum repudiandae quas
expedita.`

describe('page-header.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: ', () => {
    const pageHeader = (
      <PageHeader color='white' id='pageHeader'>
        <Breadcrumbs isCurrent={isCurrent} id='breadcrumbs'>
          <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
          <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>
        </Breadcrumbs>
        <PageHeader.Header id='Header'>
          <PageHeader.Title>Title</PageHeader.Title>
          <PageHeader.Subtitle>This is subtitle</PageHeader.Subtitle>
          <Badge label='Processing' variant='outline' />
          <Button css={{marginLeft: 'auto'}}>Call to action</Button>
          <Button>Call to action</Button>
          <Button>Call to action</Button>
        </PageHeader.Header>
        <PageHeader.Description id='description'>
          {lorem}
        </PageHeader.Description>
      </PageHeader>
    )

    cy.mount(pageHeader)
    cy.get('#pageHeader')
      //   .matchImage()
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 255, 255)')

    cy.get('#breadcrumbs').should('be.visible')
    cy.get('#Header').should('be.visible')
    cy.get('#description').should('be.visible').and('have.text', lorem)
  })
})
