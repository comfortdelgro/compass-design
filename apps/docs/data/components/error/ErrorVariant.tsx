import {Button, Error, Icon} from '@comfortdelgro/react-compass-old'
import {faBug} from '@fortawesome/free-solid-svg-icons'

function BasicExample() {
  return (
    <Error variant='secondary'>
      <Error.Image>
        <Icon icon={faBug} />
      </Error.Image>
      <Error.Title>Error: some bugs</Error.Title>
      <Error.Description>
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
