import CloseIcon from '@comfortdelgro/compass-icons/react/h5-close'
import WarningIcon from '@comfortdelgro/compass-icons/react/warning-filled'
import {
  Button,
  Dropdown,
  SnackbarContextProvider,
  useSnackbar,
} from '@comfortdelgro/react-compass'
import React, {Key} from 'react'
const SubService1 = () => {
  const snackbar = useSnackbar()
  return (
    <>
      <Button
        css={{width: 'fit-content', marginBottom: '1rem'}}
        onClick={() =>
          snackbar.show({
            type: 'success',
            text: 'Lorem ipsum dolor, sit amet consectetur',
          })
        }
      >
        Open snackbar
      </Button>
      <br />
      <Button
        css={{width: 'fit-content', marginBottom: '1rem'}}
        onClick={() =>
          snackbar.show({
            text: 'Lorem ipsum dolor, sit amet consectetur',
            suffixIcon: false,
          })
        }
      >
        Open snackbar without close button
      </Button>
      <br />
    </>
  )
}
const SubService2 = () => {
  const snackbar = useSnackbar()
  return (
    <>
      <Button
        css={{width: 'fit-content', marginBottom: '1rem'}}
        onClick={() =>
          snackbar.show({
            autoClose: false,
            text: 'Lorem ipsum dolor, sit amet consectetur. Lorem ipsum dolor, sit amet consectetur.',
            prefixIcon: <WarningIcon />,
            suffixIcon: <CloseIcon />,
            type: 'reminder',
            css: {
              alignItems: 'flex-start',
            },
          })
        }
      >
        Open snackbar autoClose: false
      </Button>
      <br />
      <Button
        css={{width: 'fit-content', marginBottom: '1rem'}}
        onClick={() => snackbar.clearAll()}
      >
        Clear all snackbars
      </Button>
    </>
  )
}

const SnackbarAsService: React.FC = () => {
  const [horizontal, setHorizontal] = React.useState<
    'center' | 'left' | 'right'
  >('right')
  const [vertical, setVertical] = React.useState<'center' | 'top' | 'bottom'>(
    'bottom',
  )

  return (
    <div>
      <h3>Snackbar as a service</h3>
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
      <SnackbarContextProvider
        anchorOrigin={{horizontal, vertical}}
        containerCSS={{
          bottom: '50px',
        }}
      >
        <>
          <SubService1 />
          <SubService2 />
        </>
      </SnackbarContextProvider>
    </div>
  )
}
export default SnackbarAsService
