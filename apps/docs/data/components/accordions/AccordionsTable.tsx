import {Accordion} from '@comfortdelgro/react-compass-old'

function TableAccordion() {
  const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
    officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
    iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
    error optio consequatur.`

  const data = [
    {id: 1, leftData: 'Job ID', rightData: 'CDG180-1120'},
    {id: 2, leftData: 'Status', rightData: 'Ended'},
    {id: 3, leftData: 'Job Title', rightData: 'Demo 8'},
    {id: 4, leftData: 'Number of Pax', rightData: '4'},
    {id: 5, leftData: 'Job Type', rightData: 'One-way Transfer'},
    {id: 6, leftData: 'Date/Time', rightData: '10/10/2022, 04:10 PM'},
    {id: 7, leftData: 'Pick-up Location', rightData: 'Comfort Building'},
  ]

  const renderAccordionTableItems = () => {
    return data.map((eachData) => {
      return (
        <div key={eachData.id}>
          <p>
            <b>{eachData.leftData}</b>
          </p>
          <p style={{textAlign: 'left'}}>{eachData.rightData}</p>
        </div>
      )
    })
  }

  return (
    <Accordion>
      <Accordion.Title>
        <h2>Business Profile</h2>
      </Accordion.Title>
      <p>{lorem}</p>
      <Accordion.Table>{renderAccordionTableItems()}</Accordion.Table>
      <p>{lorem}</p>
    </Accordion>
  )
}

export default TableAccordion
