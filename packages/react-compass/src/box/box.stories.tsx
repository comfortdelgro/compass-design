import {Meta} from '@storybook/react'
import React from 'react'
import Box from './index'

export const ElementMapping: React.FC = () => {
  return (
    <div>
      <section>
        <h3>'as' prop</h3>
        The 'as' prop refers to the HTML element that the Box component should
        render as. By default, the Box component will render as a div element,
        but if you pass a different value to the as prop, it will render as that
        element instead.
      </section>
      <h3>Box as 'div' Element - default option</h3>
      <Box
        style={{
          backgroundColor: 'red',
          width: '8rem',
          textAlign: 'center',
        }}
      >
        My div
      </Box>
      <h3>Box as 'h2' Element</h3>
      <Box as='h2' color='red'>
        My 'div' box
      </Box>
    </div>
  )
}

export const DynamicStyling: React.FC = () => {
  return (
    <div>
      <h3>
        To style the Box component, you can use both 'css' and 'style' props.
      </h3>
      <h3>
        1. Styling with 'css' prop, giving you much more power than the regular
        'style' prop. But it is suitable for client side rendering only.
      </h3>
      <Box
        css={{
          backgroundColor: 'grey',
          width: '8rem',
          textAlign: 'center',
          '& p': {
            color: 'white',
          },
        }}
      >
        <p>My box</p>
      </Box>
      <h3>1. Styling with 'style' prop</h3>
      <Box
        style={{
          backgroundColor: 'grey',
          width: '8rem',
          textAlign: 'center',
          color: 'red',
        }}
      >
        <p>My box</p>
      </Box>
    </div>
  )
}

const meta = {
  title: 'Example/Box',
  component: ElementMapping,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ElementMapping>

export default meta
