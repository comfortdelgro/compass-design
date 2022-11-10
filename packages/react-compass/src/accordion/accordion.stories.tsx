import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import {Column} from '../utils/components'
import Accordion from './accordion'
import AccordionTable from './accordionTable'

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

      <Accordion title={'Title'}>{lorem}</Accordion>

      <Accordion icon={faPlusCircle} title={<p>{lorem}</p>}>
        {lorem}
      </Accordion>

      <h3>Default without icon</h3>

      <Accordion icon={false} title={'Title'}>
        {lorem}
      </Accordion>

      <Accordion icon={false} title={<p>{lorem}</p>}>
        {lorem}
      </Accordion>

      <h3>Customized</h3>

      <Accordion
        defaultExpand={true}
        title={<p>{lorem}</p>}
        css={{background: 'Wheat', color: 'SaddleBrown'}}
        titleCss={{
          background: 'burlywood',
          textAlign: 'center',
          color: 'currentColor',
        }}
      >
        {lorem}
      </Accordion>

      <h3>Controlled</h3>

      <Accordion
        expand={expand === 'first'}
        onExpandedChange={handleControlledAccordion('first')}
        title={<p>{lorem}</p>}
      >
        {lorem}
        {lorem}
      </Accordion>
      <Accordion
        expand={expand === 'second'}
        onExpandedChange={handleControlledAccordion('second')}
        title={<p>{lorem}</p>}
      >
        {lorem}
        {lorem}
      </Accordion>
      <Accordion
        expand={expand === 'third'}
        onExpandedChange={handleControlledAccordion('third')}
        title={<p>{lorem}</p>}
      >
        {lorem}
        {lorem}
      </Accordion>
    </Column>
  )
}

export const Table: React.FC = () => {
  const data = [
    {leftData: 'Job ID', rightData: 'CDG180-1120'},
    {leftData: 'Status', rightData: 'Ended'},
    {leftData: 'Job Title', rightData: 'Demo 8'},
    {leftData: 'Number of Pax', rightData: '4'},
    {leftData: 'Job Type', rightData: 'One-way Transfer'},
    {leftData: 'Date/Time', rightData: '10/10/2022, 04:10 PM'},
    {leftData: 'Pick-up Location', rightData: 'Comfort Building'},
  ]

  const renderAccordionTableItems = () => {
    return data.map((eachData) => {
      return (
        <div>
          <p>
            <b>{eachData.leftData}</b>
          </p>
          <p style={{textAlign: 'left'}}>{eachData.rightData}</p>
        </div>
      )
    })
  }

  return (
    <Accordion
      title={
        <h2>
          <b>Business Profile</b>
        </h2>
      }
    >
      <p>{lorem}</p>
      <AccordionTable>{renderAccordionTableItems()}</AccordionTable>
      <p>{lorem}</p>
    </Accordion>
  )
}
