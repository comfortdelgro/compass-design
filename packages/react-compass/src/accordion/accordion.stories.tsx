import React, {useState} from 'react'
import {Column} from '../utils/components'
import Accordion from './index'

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
  iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
  error optio consequatur.`

export const Basic: React.FC = () => {
  return (
    <Column style={{minHeight: '300vh'}}>
      <h3>Basic Accordion</h3>

      <Accordion>
        <Accordion.Title>Title</Accordion.Title>
        {lorem}
      </Accordion>

      <Accordion>
        <Accordion.Title>
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
      </Accordion>
    </Column>
  )
}

export const Controlled: React.FC = () => {
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
    <Column style={{minHeight: '300vh'}}>
      <h3>Controlled</h3>

      <Accordion
        expand={expand === 'first'}
        onExpandChange={handleControlledAccordion('first')}
      >
        <Accordion.Title>
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
        {lorem}
      </Accordion>
      <Accordion
        expand={expand === 'second'}
        onExpandChange={handleControlledAccordion('second')}
      >
        <Accordion.Title>
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
        {lorem}
      </Accordion>
      <Accordion
        expand={expand === 'third'}
        onExpandChange={handleControlledAccordion('third')}
      >
        <Accordion.Title>
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
        {lorem}
      </Accordion>
    </Column>
  )
}

export const Uncontrolled: React.FC = () => {
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
    <Column style={{minHeight: '300vh'}}>
      <h3>1. With icon</h3>

      <Accordion>
        <Accordion.Title>Title</Accordion.Title>
        {lorem}
      </Accordion>

      <Accordion>
        <Accordion.Title>
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
      </Accordion>

      <h3>2. Without icon</h3>

      <Accordion>
        <Accordion.Title icon={false}>Title</Accordion.Title>
        {lorem}
      </Accordion>

      <Accordion>
        <Accordion.Title icon={false}>
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
      </Accordion>

      <h3>3. Expand on default</h3>

      <Accordion
        defaultExpand={true}
        css={{background: 'Wheat', color: 'SaddleBrown'}}
      >
        <Accordion.Title
          css={{
            background: 'burlywood',
            textAlign: 'center',
            color: 'currentColor',
          }}
        >
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
      </Accordion>

      <h3>4. Table in Accordion</h3>
      <Accordion>
        <Accordion.Title>
          <h2>Business Profile</h2>
        </Accordion.Title>
        <p>{lorem}</p>
        <Accordion.Table>{renderAccordionTableItems()}</Accordion.Table>
        <p>{lorem}</p>
      </Accordion>
    </Column>
  )
}
