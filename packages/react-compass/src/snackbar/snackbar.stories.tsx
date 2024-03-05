import CloseIcon from '@comfortdelgro/compass-icons/react/h5-close'
import WarningIcon from '@comfortdelgro/compass-icons/react/warning-filled'
import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import {Meta} from '@storybook/react'
import React, {Key} from 'react'
import Snackbar from '.'
import Button from '../button/button'
import Dropdown from '../dropdown'
import {Icon} from '../icon'
import {SnackbarContextProvider, useSnackbar} from './service'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
  gap: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
  gap: '0.5rem',
}

export const Default: React.FC = () => {
  const [type, setType] = React.useState<
    'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing'
  >('success')
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)

  return (
    <div style={{...style}}>
      <h3>Default snackbar</h3>
      <Dropdown.Select
        css={{width: '44rem'}}
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
    </div>
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
    <div style={{...style}}>
      <h3>Snackbar as a service</h3>
      <SnackbarContextProvider>
        <SubService />
      </SnackbarContextProvider>
    </div>
  )
}

const meta = {
  title: 'Example/Snackbar',
  component: Multiple,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Multiple>

export default meta
