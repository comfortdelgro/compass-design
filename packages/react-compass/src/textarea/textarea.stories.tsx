import {faBook} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type {StoryDecorator} from '@ladle/react'
import React, {useState} from 'react'
import {Column} from '../utils/components'
import Textarea from './index'

export const Variants: React.FC = () => {
  const [value, setValue] = useState('My initial value')

  return (
    <Column>
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
      <br />
    </Column>
  )
}

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
