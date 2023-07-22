import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import Icon from '../icon'
import TextField from '../textfield'
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
        <Accordion.Title icon={<Icon icon={faBug} />}>Title</Accordion.Title>
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
          <Icon icon={faBug} />
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

      <h3>Accessibility</h3>
      <Accordion>
        <Accordion.Title aria-controls='sect1'>
          Personal Information
        </Accordion.Title>
        <div id='sect1' role='region' aria-labelledby='accordion1id'>
          <TextField
            label={
              <>
                Name: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your name'
            isRequired
          />
          <TextField
            label={
              <>
                Email: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your email'
            isRequired
          />
          <TextField
            label={
              <>
                Phone: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your phone'
            isRequired
          />
          <TextField
            label={
              <>
                Extension: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Extension'
          />
          <TextField
            label={
              <>
                Country: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your country'
          />
          <TextField
            label={
              <>
                City/Province: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your city/province'
          />
        </div>
      </Accordion>
      <Accordion>
        <Accordion.Title aria-controls='sect2'>Billing Address</Accordion.Title>
        <div id='sect2' role='region' aria-labelledby='accordion2id'>
          <TextField
            label={
              <>
                Address 1: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your address 1'
            isRequired
          />
          <TextField
            label={
              <>
                Address 2: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your address 2'
            isRequired
          />
          <TextField
            label={
              <>
                City: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your city'
            isRequired
          />
          <TextField
            label={
              <>
                State: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='State'
          />
          <TextField
            label={
              <>
                Zip Code: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your zip code'
          />
        </div>
      </Accordion>
      <Accordion>
        <Accordion.Title aria-controls='sect3'>
          Shipping Address
        </Accordion.Title>
        <div id='sect3' role='region' aria-labelledby='accordion3id'>
          <TextField
            label={
              <>
                Address 1: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your address 1'
            isRequired
          />
          <TextField
            label={
              <>
                Address 2: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your address 2'
            isRequired
          />
          <TextField
            label={
              <>
                City: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your city'
            isRequired
          />
          <TextField
            label={
              <>
                State: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='state'
          />
          <TextField
            label={
              <>
                Zip Code: <FontAwesomeIcon icon={faBug} />
              </>
            }
            placeholder='Enter your zip code'
          />
        </div>
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
