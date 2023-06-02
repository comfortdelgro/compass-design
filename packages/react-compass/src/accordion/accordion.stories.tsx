import {
  faAddressBook,
  faCaretSquareDown,
} from '@fortawesome/free-regular-svg-icons'
import React, {useState} from 'react'
import Icon from '../icon'
import {Column} from '../utils/components'
import Accordion from './index'

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
        <Accordion.Title>Title</Accordion.Title>
        {lorem}
      </Accordion>

      <Accordion>
        <Accordion.Title>
          <p>{lorem}</p>
        </Accordion.Title>
        {lorem}
      </Accordion>

      <h3>Without left icon</h3>

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

      <h3>Customize left icon</h3>

      <Accordion>
        <Accordion.Title icon={<Icon icon={faAddressBook} />}>
          Title
        </Accordion.Title>
        {lorem}
      </Accordion>

      <h3>Customize expand icon</h3>

      <Accordion>
        <Accordion.ExpandIcon>
          <div
            style={{
              lineHeight: '1em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Show
          </div>
        </Accordion.ExpandIcon>
        <Accordion.Title>Title</Accordion.Title>
        {lorem}
      </Accordion>

      <Accordion>
        <Accordion.ExpandIcon>
          <Icon icon={faCaretSquareDown} />
        </Accordion.ExpandIcon>
        <Accordion.Title>Title</Accordion.Title>
        {lorem}
      </Accordion>
      <h3>Styling</h3>

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
      <Accordion.Title>
        <h2>Business Profile</h2>
      </Accordion.Title>
      <p>{lorem}</p>
      <Accordion.Table>{renderAccordionTableItems()}</Accordion.Table>
      <p>{lorem}</p>
    </Accordion>
  )
}
