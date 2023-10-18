import type { Meta } from '@storybook/react'
import React, { PropsWithChildren, useState } from 'react'

import { Button } from '..'
import Accordion from '.'

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
  iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
  error optio consequatur.`

const Content = (props: PropsWithChildren<unknown>) => {
  return <div style={{ padding: '1rem' }}>{props.children}</div>
}

export const Basic: React.FC = () => {

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
          style={{ width: '20%' }}
          onPress={() => setContent(generateRandomString(1000) + lorem)}
        >
          Change content
        </Button>
        <Accordion>
          <Accordion.Title>Title</Accordion.Title>
          {content}
        </Accordion>
      </Content>
    </>
  )
}


const meta = {
  title: 'Example/Accordion Server',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
