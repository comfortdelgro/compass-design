import type {StoryDecorator} from '@ladle/react'
import React from 'react'
import {Column} from '../utils/components'
import SearchField from './index'

export const Variants: React.FC = () => (
  <Column>
    <h3>Basic</h3>
    <SearchField
      placeholder='Search'
      onSubmit={(text) => console.log(text)}
      value={'Initial value'}
      css={{width: '10rem'}}
    />

    <h3>isErrored</h3>
    <SearchField
      placeholder='Search'
      onSubmit={(text) => console.log(text)}
      value={'Initial value'}
      isErrored={true}
      css={{width: '10rem'}}
    />

    <h3>isDisabled</h3>
    <SearchField
      isDisabled
      placeholder='Search'
      css={{width: '10rem'}}
      onSubmit={(text) => console.log(text)}
    />
  </Column>
)

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
