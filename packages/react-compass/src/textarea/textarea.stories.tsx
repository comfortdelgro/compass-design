import {faBook} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {Meta} from '@storybook/react'
import React, {useState} from 'react'
import Textarea from './index'

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '3rem',
}

export const Basic: React.FC = () => {
  const [value, setValue] = useState('My initial value')

  return (
    <div style={{...style}}>
      <h3> H5</h3>
      <Textarea
        variant='h5'
        placeholder='Type your feedback here'
        css={{
          textarea: {
            height: '129px',
          },
        }}
        label='Details'
        resizable={false}
        wordCount
        maxLength={200}
      />
      <h3> Simple textarea</h3>
      <Textarea placeholder='Enter your message' />
      <br />
      <h3> Textarea with label and isRequired</h3>
      <Textarea
        label={
          <>
            My custom label &nbsp;
            <FontAwesomeIcon icon={faBook} style={{fontSize: '0.9em'}} />
          </>
        }
        placeholder='Enter your message'
        isRequired
      />
      <br />
      <h3> Textarea with word count and max length</h3>
      <Textarea label='Text Label' placeholder='Enter your message' wordCount />
      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        wordCount
        maxLength={50}
      />
      <br />
      <h3>
        Textarea with isErrored and error message (error message is only visible
        when isErrored == true)
      </h3>
      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        wordCount
        maxLength={50}
        isErrored
        errorMessage='Error Message'
      />
      <br />
      <h3> Textarea with isDisabled</h3>
      <Textarea
        label='Disabled Text Label'
        placeholder='Enter your message'
        isDisabled
      />
      <br />
      <h3> Controlled Textarea</h3>
      <Textarea
        label='Controlled Text Label'
        placeholder='Enter your message'
        value={value}
        onChange={(value) => setValue(value)}
      />
      <br />
      <h3>Custom width and height</h3>
      <Textarea
        label='Disabled Text Label'
        placeholder='Enter your message'
        css={{'& textarea': {width: '600px', height: '300px'}}}
      />
    </div>
  )
}

const meta = {
  title: 'Example/Textarea ',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
