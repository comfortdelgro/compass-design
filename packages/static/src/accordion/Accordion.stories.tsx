import type {Meta} from '@storybook/react'
import React, {PropsWithChildren, useState} from 'react'

import {faBug} from '@fortawesome/free-solid-svg-icons'
import Accordion from '.'
import {Button, Icon} from '..'

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
  iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
  error optio consequatur.`

const Content = (props: PropsWithChildren<unknown>) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {props.children}
    </div>
  )
}

export const Basic: React.FC = () => {
  const [expand, setExpand] = useState<string | false>(false)
  const [content, setContent] = useState<string>(lorem)

  function generateRandomString(length: number) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '
    let result = ''
    const charactersLength = characters.length

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength)
      result += characters.charAt(randomIndex)
    }

    return result
  }

  const handleControlledAccordion = (id: string) => () => {
    setExpand((previous) => {
      if (previous === id) {
        return false
      }
      return id
    })
  }

  return (
    <>
      <Content>
        <h3>Default with icon</h3>
        <Accordion>
          <Accordion.Title>Title</Accordion.Title>
          {lorem}
        </Accordion>
      </Content>

      <Content>
        <h3>Content height change</h3>
        <Button
          style={{width: '20%'}}
          onPress={() => setContent(generateRandomString(1000) + lorem)}
        >
          Change content
        </Button>
        <Accordion>
          <Accordion.Title>Title</Accordion.Title>
          {content}
        </Accordion>
      </Content>

      <Content>
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
      </Content>

      <Content>
        <h3>Customize left icon</h3>

        <Accordion>
          <Accordion.Title icon={<Icon icon={faBug} />}>Title</Accordion.Title>
          {lorem}
        </Accordion>
      </Content>

      <Content>
        <h3>Customize expand icon</h3>

        <Accordion>
          <Accordion.ExpandIcon>
            <div
              style={{
                lineHeight: '1em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '16px',
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
      </Content>

      <Content>
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
      </Content>

      <Content>
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
      </Content>
    </>
  )
}

export const AccordionTable = () => {
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
    <Content>
      <Accordion>
        <Accordion.Title>
          <h2>Business Profile</h2>
        </Accordion.Title>
        <p>{lorem}</p>
        <Accordion.Table>{renderAccordionTableItems()}</Accordion.Table>
        <p>{lorem}</p>
      </Accordion>
    </Content>
  )
}

const meta = {
  title: 'Example/Accordion',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
