import {Button, Error, Icon} from '@comfortdelgro/react-compass'
import {faBug} from '@fortawesome/free-solid-svg-icons'

function BasicExample() {
  return (
    <Error>
      <Error.Icon>
        <Icon icon={faBug} />
      </Error.Icon>
      <Error.Title>Error: some bugs</Error.Title>
      <Error.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. pariatur.
      </Error.Description>
      <Error.Action>
        <Button
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
