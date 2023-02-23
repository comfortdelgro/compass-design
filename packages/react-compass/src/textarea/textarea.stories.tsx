import type {StoryDecorator} from '@ladle/react'
import React, {useState} from 'react'
import {Column} from '../utils/components'
import Textarea from './index'

export const Variants: React.FC = () => {
  const [value, setValue] = useState('Lorem ipsum dolor sit amet.')

  return (
    <Column>
      <Textarea
        placeholder='Enter your message'
        onChange={(value) => console.log('onChange', value)}
        onChangeEvent={(e) => console.log('onChangeEvent', e)}
      />
      <Textarea label='Text Label' placeholder='Enter your message' />
      <Textarea
        label='Text Label'
        placeholder='Enter your message'
        wordCount
        value='Lorem ipsum dolor sit amet.'
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
        errored
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
