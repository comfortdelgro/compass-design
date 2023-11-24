import CloseIcon from '@comfortdelgro/compass-icons/react/h5-close'
import {Button, Dropdown} from '@comfortdelgro/react-compass-old'
import Icon from '@comfortdelgro/react-compass-old/icon'
import Snackbar from '@comfortdelgro/react-compass-old/snackbar'
import {faImage} from '@fortawesome/free-solid-svg-icons'
import React, {Key} from 'react'
const Default: React.FC = () => {
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)
  const [type, setType] = React.useState<
    'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing'
  >('default')

  return (
    <div>
      <h3>Default snackbar</h3>
      <Dropdown.Select
        isRequired
        label='Please select type'
        placeholder='Choose a type'
        selectedKey={type}
        onSelectionChange={(k: Key) =>
          setType(
            k as
              | 'default'
              | 'error'
              | 'success'
              | 'warning'
              | 'reminder'
              | 'ongoing',
          )
        }
      >
        <Dropdown.Item key='default'>Default</Dropdown.Item>
        <Dropdown.Item key='error'>Error</Dropdown.Item>
        <Dropdown.Item key='success'>Success</Dropdown.Item>
        <Dropdown.Item key='warning'>Warning</Dropdown.Item>
        <Dropdown.Item key='reminder'>Reminder</Dropdown.Item>
        <Dropdown.Item key='ongoing'>Ongoing</Dropdown.Item>
      </Dropdown.Select>
      <br />
      <Button
        css={{width: '10rem', marginTop: '1rem'}}
        onPress={() => setIsDefaultOpen(true)}
      >
        Open snackbar
      </Button>
      <Snackbar
        isOpen={isDefaultOpen}
        handleClose={() => setIsDefaultOpen(false)}
        type={type}
      >
        <Snackbar.PrefixIcon>
          <Icon icon={faImage} />
        </Snackbar.PrefixIcon>
        <Snackbar.Text>Text goes here</Snackbar.Text>
        <Snackbar.SuffixIcon>
          <CloseIcon />
        </Snackbar.SuffixIcon>
      </Snackbar>
    </div>
  )
}

export default Default
