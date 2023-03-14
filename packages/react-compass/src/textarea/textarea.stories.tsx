import type {StoryDecorator} from '@ladle/react'
import React, {useState} from 'react'
import {Column} from '../utils/components'
import Textarea from './index'

export const Variants: React.FC = () => {
  const [value, setValue] = useState('Lorem ipsum dolor sit amet.')

  return (
    <Column>
      <Textarea placeholder='Enter your message' />
      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        isRequired
      />
      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        wordCount
        value='Lorem ipsum dolor sit amet.'
        isRequired
      />
      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        wordCount
        maxLength={50}
        value={value}
        onChange={setValue}
      />
      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        wordCount
        maxLength={50}
        isErrored
        errorMessage='Error Message'
      />
      <Textarea
        label='Disabled Text Label'
        placeholder='Enter your message'
        isDisabled={true}
      />
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
