import {useState} from 'react'
import {Column} from '../utils/components'
import Accordion from './accordion'
import AccordionTable from './accordionTable'
import {AccordionTitle} from './accordionTitle'

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
  iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
  error optio consequatur.`

export const Default: React.FC = () => {
  const [expand, setExpand] = useState<string | false>(false)

  const handleControlledAccordion = (id: string) => () => {
    setExpand((previous) => {
      if (previous === id) {
        return false
      }
      return id
    })
  }

  return (
    <Column>
      <h3>Default with icon</h3>

      <Accordion>
        <AccordionTitle>Title</AccordionTitle>
        {lorem}
      </Accordion>

      <Accordion>
        <AccordionTitle>
          <p>{lorem}</p>
        </AccordionTitle>
        {lorem}
      </Accordion>

      <h3>Default without icon</h3>

      <Accordion>
        <AccordionTitle icon={false}>Title</AccordionTitle>
        {lorem}
      </Accordion>

      <Accordion>
        <AccordionTitle icon={false}>
          <p>{lorem}</p>
        </AccordionTitle>
        {lorem}
      </Accordion>

      <h3>Customized</h3>

      <Accordion
        defaultExpand={true}
        css={{background: 'Wheat', color: 'SaddleBrown'}}
      >
        <AccordionTitle
          css={{
            background: 'burlywood',
            textAlign: 'center',
            color: 'currentColor',
          }}
        >
          <p>{lorem}</p>
        </AccordionTitle>
        {lorem}
      </Accordion>

      <h3>Controlled</h3>

      <Accordion
        expand={expand === 'first'}
        onExpandedChange={handleControlledAccordion('first')}
      >
        <AccordionTitle>
          <p>{lorem}</p>
        </AccordionTitle>
        {lorem}
        {lorem}
      </Accordion>
      <Accordion
        expand={expand === 'second'}
        onExpandedChange={handleControlledAccordion('second')}
      >
        <AccordionTitle>
          <p>{lorem}</p>
        </AccordionTitle>
        {lorem}
        {lorem}
      </Accordion>
      <Accordion
        expand={expand === 'third'}
        onExpandedChange={handleControlledAccordion('third')}
      >
        <AccordionTitle>
          <p>{lorem}</p>
        </AccordionTitle>
        {lorem}
        {lorem}
      </Accordion>
    </Column>
  )
}

export const Table: React.FC = () => {
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
      <AccordionTitle>
        <h2>Business Profile</h2>
      </AccordionTitle>
      <p>{lorem}</p>
      <AccordionTable>{renderAccordionTableItems()}</AccordionTable>
      <p>{lorem}</p>
    </Accordion>
  )
}
