import Button from '../button/button'
import Card from './index'

const lorem = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum nulla assumenda excepturi, a
quibusdam rem eligendi vero hic, doloremque nam deserunt,
consequuntur aut atque eveniet.
`

const backgroundSrc =
  'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

describe('card.cy.ts', () => {
  it('C01: Should render children', () => {
    const card = (
      <Card size='sm' id='card'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{margin: 0}}>{lorem.slice(0, lorem.length / 5)}</p>
          <Card.Action>
            <Button variant='primary' id='btn1'>
              Button
            </Button>
            <Button variant='primary' id='btn2'>
              Button
            </Button>
          </Card.Action>
        </Card.Body>
      </Card>
    )

    cy.mount(card)

    cy.get('#card').should('be.visible')
    cy.get('img').should('be.visible')
    cy.get('#btn1').should('be.visible')
    cy.get('#btn2').should('be.visible')
  })
})
