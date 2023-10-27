import CloseIcon from '@comfortdelgro/compass-icons/react/h5-close'
import WarningIcon from '@comfortdelgro/compass-icons/react/warning-filled'
import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React, {Key} from 'react'
import Snackbar from '.'
import Button from '../button/button'
import Dropdown from '../dropdown'
import {Icon} from '../icon'
import {Column} from '../utils/components'
import {SnackbarContextProvider, useSnackbar} from './service'
export const Default: React.FC = () => {
  const [type, setType] = React.useState<
    'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing'
  >('success')
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)

  return (
    <Column>
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
      <Button css={{width: '10rem'}} onPress={() => setIsDefaultOpen(true)}>
        Open Snackbar
      </Button>
      <Snackbar
        id='snackbar-1'
        isOpen={isDefaultOpen}
        handleClose={() => setIsDefaultOpen(false)}
        type={type}
        onClick={(e, id) => console.log(id)}
        css={{
          width: '343px',
        }}
      >
        <Snackbar.PrefixIcon>
          <Icon icon={faImage} />
        </Snackbar.PrefixIcon>
        <Snackbar.Text>Text goes here</Snackbar.Text>
        <Snackbar.SuffixIcon>
          <Icon icon={faXmark} />
        </Snackbar.SuffixIcon>
      </Snackbar>
    </Column>
  )
}

const SubService = () => {
  const snackbar = useSnackbar()
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <Button
        css={{width: 'fit-content', marginBottom: '1rem'}}
        onClick={() =>
          snackbar.show({
            type: 'success',
            text: 'Lorem ipsum dolor, sit amet consectetur Lorem ipsum  consectetur Lorem ipsum dolor, sit amet consectetur',
            prefixIcon: <WarningIcon />,
            suffixIcon: <CloseIcon />,
            autoClose: false,
          })
        }
      >
        Open snackbar
      </Button>
      <Button
        css={{width: 'fit-content', marginBottom: '1rem'}}
        onClick={() =>
          snackbar.show({
            text: 'Lorem ipsum dolor, sit amet consectetur',
            autoClose: false,
            prefixIcon: <WarningIcon />,
            type: 'success',
          })
        }
      >
        Without suffix icon
      </Button>
      <Button
        css={{width: 'fit-content', marginBottom: '1rem'}}
        onClick={() =>
          snackbar.show({
            text: 'Lorem ipsum dolor, sit amet consectetur',
            autoClose: false,
            suffixIcon: <CloseIcon />,
            type: 'success',
          })
        }
      >
        Without prefix icon
      </Button>
      <Button
        css={{width: 'fit-content', marginBottom: '1rem'}}
        onClick={() =>
          snackbar.show({
            text: 'Lorem ipsum dolor, sit amet consectetur',
            autoClose: false,
            type: 'success',
            suffixIcon: false,
          })
        }
      >
        With text only
      </Button>
      <Button
        css={{width: 'fit-content', marginBottom: '1rem'}}
        onClick={() =>
          snackbar.show({
            text: 'Lorem ipsum dolor, sit amet consectetur',
            suffixIcon: false,
            type: 'success',
            autoClose: 3000,
          })
        }
      >
        Autoclose after 3000ms
      </Button>
      <Button
        css={{width: 'fit-content', marginBottom: '1rem'}}
        onClick={() => snackbar.clearAll()}
      >
        Clear all snackbars
      </Button>
    </div>
  )
}

export const Multiple: React.FC = () => {
  return (
    <Column>
      <h3>Snackbar as a service</h3>
      <SnackbarContextProvider>
        <SubService />
      </SnackbarContextProvider>
    </Column>
  )
}
