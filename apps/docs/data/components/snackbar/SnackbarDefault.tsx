import {Button, Dropdown} from '@comfortdelgro/react-compass'
import Icon from '@comfortdelgro/react-compass/icon'
import Snackbar from '@comfortdelgro/react-compass/snackbar'
import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React, {Key} from 'react'

const Default: React.FC = () => {
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)
  const [horizontal, setHorizontal] = React.useState<
    'center' | 'left' | 'right'
  >('right')
  const [vertical, setVertical] = React.useState<'center' | 'top' | 'bottom'>(
    'top',
  )
  const [type, setType] = React.useState<
    'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing'
  >('default')

  return (
    <div>
      <h3>Default snackbar</h3>
      <Dropdown.Select
        isRequired
        label='Please select horizontal'
        placeholder='Choose a horizontal'
        selectedKey={horizontal}
        onSelectionChange={(k: Key) =>
          setHorizontal(k as 'center' | 'left' | 'right')
        }
      >
        <Dropdown.Item key='left'>Left</Dropdown.Item>
        <Dropdown.Item key='center'>Center</Dropdown.Item>
        <Dropdown.Item key='right'>Right</Dropdown.Item>
      </Dropdown.Select>
      <br />
      <Dropdown.Select
        isRequired
        label='Please select vertical'
        placeholder='Choose a vertical'
        selectedKey={vertical}
        onSelectionChange={(k: Key) =>
          setVertical(k as 'center' | 'top' | 'bottom')
        }
      >
        <Dropdown.Item key='top'>Top</Dropdown.Item>
        <Dropdown.Item key='center'>Center</Dropdown.Item>
        <Dropdown.Item key='bottom'>Bottom</Dropdown.Item>
      </Dropdown.Select>
      <br />
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
        anchorOrigin={{horizontal, vertical}}
      >
        <Snackbar.PrefixIcon>
          <Icon icon={faImage} />
        </Snackbar.PrefixIcon>
        <Snackbar.Text>Text goes here</Snackbar.Text>
        <Snackbar.Detail>Detail</Snackbar.Detail>
        <Snackbar.DetailDescription>Detail</Snackbar.DetailDescription>
        <Snackbar.SuffixIcon>
          <Icon icon={faXmark} />
        </Snackbar.SuffixIcon>
      </Snackbar>
    </div>
  )
}

export default Default
