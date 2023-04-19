import React from 'react'
import {Column} from '../utils/components'
import Box from './index'

export const ElementMapping: React.FC = () => {
  return (
    <Column>
      <p>
        <h3>'as' prop</h3>
        The 'as' prop refers to the HTML element that the Box component should
        render as. By default, the Box component will render as a div element,
        but if you pass a different value to the as prop, it will render as that
        element instead.
      </p>
      <h3>Box as 'div' Element - default option</h3>
      <Box
        backgroundColor='grey'
        css={{
          backgroundColor: 'grey',
          width: '8rem',
          textAlign: 'center',
        }}
      >
        <p>My 'div' box</p>
      </Box>
      <h3>Box as 'h2' Element</h3>
      <Box as='h2' color='red'>
        <p>My 'div' box</p>
      </Box>
    </Column>
  )
}

export const DynamicStyling: React.FC = () => {
  return (
    <Column>
      <h3>
        To style the Box component, you can use both 'css' and 'style' props.
      </h3>
      <h3>
        1. Styling with 'css' prop, giving you much more power than the regular
        'style' prop.
      </h3>
      <Box
        backgroundColor='grey'
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
        backgroundColor='grey'
        style={{
          backgroundColor: 'grey',
          width: '8rem',
          textAlign: 'center',
        }}
      >
        <p>My box</p>
      </Box>
    </Column>
  )
}
