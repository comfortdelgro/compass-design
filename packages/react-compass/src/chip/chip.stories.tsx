import type {Meta} from '@storybook/react'
import React from 'react'
import Chip from './index'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

export const Basic: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Basic Chip</h3>
      <Chip>Basic Chip</Chip>
    </div>
  )
}

export const Variants: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Close button</h3>
      <Chip
        hasCloseButton
        onClick={() => {
          console.log('Chip click...')
        }}
        onCloseClick={() => {
          console.log('Close button click')
        }}
      >
        Close button
      </Chip>
      <h3>Errored Chip</h3>
      <Chip hasCloseButton isErrored>
        Errored Chip
      </Chip>
      <h3>Large content</h3>
      <Chip hasCloseButton css={{maxWidth: '350px'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum.
      </Chip>
    </div>
  )
}

export const CustomStyling: React.FC = () => {
  return (
    <div style={{...style}}>
      <h3>Custom Styling</h3>
      <Chip
        hasCloseButton
        css={{
          border: '1px solid purple',
          '&:hover': {color: '$success'},
          '& > div:first-child': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
              height: '2rem',
              width: '2rem',
            },
          },
        }}
      >
        Close button
      </Chip>
    </div>
  )
}

const meta = {
  title: 'Example/Chip',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
