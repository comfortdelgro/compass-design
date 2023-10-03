import type { Meta } from '@storybook/react'
import React from 'react'

import '../theme-static/theme.module.css'
import Accordion from './accordion'
import AccordionTitle from './accordion-title'

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
  iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
  error optio consequatur.`

export const Basic: React.FC = () => {
  return (
    <div style={{padding: '1rem'}}> <Accordion>
      <AccordionTitle>Title</AccordionTitle>
      {lorem}
    </Accordion></div>
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
