import CloseIcon from '@comfortdelgro/compass-icons/react/h5-close'
import WarningIcon from '@comfortdelgro/compass-icons/react/warning-filled'
import {
  Button,
  SnackbarContextProvider,
  useSnackbar,
} from '@comfortdelgro/react-compass-old'
import React from 'react'
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

const SnackbarAsService: React.FC = () => {
  return (
    <div>
      <h3>Snackbar as a service</h3>

      <SnackbarContextProvider>
        <>
          <SubService />
        </>
      </SnackbarContextProvider>
    </div>
  )
}
export default SnackbarAsService
