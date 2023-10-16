import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import WarningIcon from '@comfortdelgro/compass-icons/react/warning-filled'
import CloseIcon from '@comfortdelgro/compass-icons/react/h5-close'
import React, {Key} from 'react'
import Button from '../button/button'
import Dropdown from '../dropdown'
import {Icon} from '../icon'
import {Column} from '../utils/components'
import Snackbar from '.'
import { SnackbarContextProvider, useSnackbar } from './service'
export const Default: React.FC = () => {
  const [horizontal, setHorizontal] = React.useState<
    'center' | 'left' | 'right'
  >('right')
  const [vertical, setVertical] = React.useState<'center' | 'top' | 'bottom'>(
    'top',
  )
  const [type, setType] = React.useState<'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing'>(
    'default',
  )
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)

  return (
    <Column>
      <h3>Default toast</h3>
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
      <Dropdown.Select
        isRequired
        label='Please select type'
        placeholder='Choose a type'
        selectedKey={type}
        onSelectionChange={(k: Key) =>
          setType(k as 'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing')
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
        isOpen={isDefaultOpen}
        handleClose={() => setIsDefaultOpen(false)}
        anchorOrigin={{horizontal, vertical}}
        type={type}
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
    </Column>
  )
}

const SubService1 = () => {
  const snackbar = useSnackbar();
  return (
    <>
      <Button
        css={{width: 'fit-content'}}
        onClick={() =>
          snackbar.show({
            type: 'success',
            text: 'Lorem ipsum dolor, sit amet consectetur',
          })
        }
      >
        Open toast
      </Button>
      <Button
        css={{width: 'fit-content'}}
        onClick={() =>
          snackbar.show({
            text: 'Lorem ipsum dolor, sit amet consectetur',
            suffixIcon: false,
          })
        }
      >
        Open toast without close button
      </Button>
    </>
  )
}
const SubService2 = () => {
  const snackbar = useSnackbar()
  return (
    <>
      <Button
        css={{width: 'fit-content'}}
        onClick={() =>
          snackbar.show({
            autoClose: false,
            text: 'Lorem ipsum dolor, sit amet consectetur. Lorem ipsum dolor, sit amet consectetur.',
            prefixIcon: <WarningIcon />,
            suffixIcon: <CloseIcon />,
            type: 'warning',
            css: {
              alignItems: 'flex-start'
            }
          })
        }
      >
        Open toast autoClose: false
      </Button>
      <Button css={{width: 'fit-content'}} onClick={() => snackbar.clearAll()}>
        Clear all toasts
      </Button>
    </>
  )
}
export const Multiple: React.FC = () => {
  const [horizontal, setHorizontal] = React.useState<
    'center' | 'left' | 'right'
  >('right')
  const [vertical, setVertical] = React.useState<'center' | 'top' | 'bottom'>(
    'bottom',
  )

  return (
    <Column>
      <h3>Snackbart as a service</h3>
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
      <SnackbarContextProvider anchorOrigin={{horizontal, vertical}} containerCSS={{
        bottom: '50px'
      }}>
        <>
          <SubService1 />
          <SubService2 />
        </>
      </SnackbarContextProvider>
    </Column>
  )
}