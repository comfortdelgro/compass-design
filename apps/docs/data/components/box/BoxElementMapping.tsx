import {Box, Column, TextField} from '@comfortdelgro/react-compass-old'
import {useState} from 'react'

const ElementMapping: React.FC = () => {
  const [inputValue, setInputValue] = useState<string | number>('')
  return (
    <Column>
      <section>
        <h3>'as' prop</h3>
        The 'as' prop refers to the HTML element that the Box component should
        render as. By default, the Box component will render as a div element,
        but if you pass a different value to the as prop, it will render as that
        element instead.
      </section>
      <h3>Box as 'div' Element - default option</h3>
      <Box
        css={{
          backgroundColor: 'grey',
          width: '8rem',
          textAlign: 'center',
        }}
      >
        <TextField
          value={inputValue}
          onChange={(value) => setInputValue(value)}
        />
      </Box>
      <h3>Box as 'h2' Element</h3>
      <Box as='h2' color='red'>
        <p>My 'div' box</p>
      </Box>
    </Column>
  )
}

export default ElementMapping
