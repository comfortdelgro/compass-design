import {Button, Error, Icon} from '@comfortdelgro/react-compass'
import {faBug} from '@fortawesome/free-solid-svg-icons'

function BasicExample() {
  return (
    <Error variant='primary'>
      <Error.Icon>
        <Icon icon={faBug} />
      </Error.Icon>
      <Error.Title>Error: some bugs</Error.Title>
      <Error.Description css={{color: 'red'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. pariatur.
      </Error.Description>
      <Error.Action>
        <Button
          className='c-hKssGC-hYGuEl-variant-primary'
          onPress={() => {
            console.log('click ok')
          }}
        >
          OK
        </Button>
      </Error.Action>
    </Error>
  )
}

export default BasicExample
