import type {StoryDecorator} from '@ladle/react'
import React from 'react'
import {Column} from '../utils/components'
import SearchField from './index'

export const Variants: React.FC = () => {
  const [value, setValue] = React.useState('My initial value')
  return (
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
      <h3>isReadOnly</h3>
      <SearchField
        isReadOnly
        placeholder='Search'
        css={{width: '10rem'}}
        onSubmit={(text) => console.log(text)}
      />

      <h3>Controlled</h3>
      <SearchField
        placeholder='Search'
        value={value}
        onChange={(value) => setValue(value)}
        css={{width: '10rem'}}
      />
      <h3> Max Length</h3>
      <SearchField
        placeholder='Search'
        maxLength={10}
        css={{width: '10rem'}}
        onSubmit={(text) => console.log(text)}
      />
      <h3> Min Length</h3>
      <SearchField
        placeholder='Search'
        minLength={5}
        css={{width: '10rem'}}
        onSubmit={(text) => console.log(text)}
      />
      <h3> H5</h3>
      <SearchField
        placeholder='Search'
        minLength={5}
        css={{width: '343px'}}
        isH5Variant
        onSubmit={(text) => console.log(text)}
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
