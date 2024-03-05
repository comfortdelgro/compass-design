// import type {StoryDecorator} from '@ladle/react'
import {Meta} from '@storybook/react'
import React from 'react'
import SearchField from './index'

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

export const Variants: React.FC = () => {
  const [value, setValue] = React.useState('My initial value')
  return (
    <div style={{...style}}>
      <h3>Basic</h3>
      <SearchField
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
        value={'Initial value'}
        css={{width: '15rem'}}
      />

      <h3>isErrored</h3>
      <SearchField
        label='SearchField isErrored = true'
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
        value={'Initial value'}
        isErrored={true}
        css={{width: '15rem'}}
        errorMessage='SearchField error message'
      />

      <h3>isDisabled</h3>
      <SearchField
        isDisabled
        placeholder='Search'
        css={{width: '15rem'}}
        onSubmit={(text) => console.log(text)}
      />
      <h3>isReadOnly</h3>
      <SearchField
        isReadOnly
        placeholder='Search'
        css={{width: '15rem'}}
        onSubmit={(text) => console.log(text)}
      />

      <h3>Controlled</h3>
      <SearchField
        placeholder='Search'
        value={value}
        onChange={(value) => setValue(value)}
        css={{width: '15rem'}}
      />
      <h3> Max Length</h3>
      <SearchField
        placeholder='Search'
        maxLength={10}
        css={{width: '15rem'}}
        onSubmit={(text) => console.log(text)}
      />
      <h3> Min Length</h3>
      <SearchField
        placeholder='Search'
        minLength={5}
        css={{width: '15rem'}}
        onSubmit={(text) => console.log(text)}
      />

      <h3> H5</h3>
      <SearchField
        placeholder='Search'
        minLength={5}
        css={{
          width: '343px',
        }}
        h5
        onSubmit={(text) => console.log(text)}
      />

      <h3> H5 Searchfield with box shadow</h3>
      <SearchField
        placeholder='Search'
        minLength={5}
        css={{
          width: '343px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 4px;',
        }}
        h5
        onSubmit={(text) => console.log(text)}
      />
    </div>
  )
}

const meta = {
  title: 'Example/SearchField',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta
