import {
  Button,
  Icon,
  ToastContextProvider,
  useToast,
} from '@comfortdelgro/react-compass-old'
import Dropdown from '@comfortdelgro/react-compass-old/dropdown'
import {faImage} from '@fortawesome/free-solid-svg-icons'
import React, {Key} from 'react'

const SubService1 = () => {
  const toast = useToast()
  return (
    <>
      <Button
        css={{width: 'fit-content'}}
        onClick={() =>
          toast.show({
            color: 'informative',
            title: 'Lorem ipsum dolor, sit amet consectetur',
          })
        }
      >
        Open toast
      </Button>
      <Button
        css={{width: 'fit-content'}}
        onClick={() =>
          toast.show({
            title: 'Lorem ipsum dolor, sit amet consectetur',
            hasCloseIcon: false,
          })
        }
      >
        Open toast without close button
      </Button>
    </>
  )
}
const SubService2 = () => {
  const toast = useToast()
  return (
    <>
      <Button
        css={{width: 'fit-content'}}
        onClick={() =>
          toast.show({
            autoClose: false,
            message: 'Lorem ipsum dolor, sit amet consectetur.',
            icon: <Icon icon={faImage} />,
            title: 'My Title',
            actions: (
              <>
                <Button>Take action</Button>
                <Button>Take action</Button>
              </>
            ),
            label: 'a few minutes ago',
          })
        }
      >
        Open toast autoClose: false
      </Button>
      <Button css={{width: 'fit-content'}} onClick={() => toast.clearAll()}>
        Clear all toasts
      </Button>
    </>
  )
}

const ToastAsService: React.FC = () => {
  const [horizontal, setHorizontal] = React.useState<
    'center' | 'left' | 'right'
  >('right')
  const [vertical, setVertical] = React.useState<'center' | 'top' | 'bottom'>(
    'top',
  )

  return (
    <div>
      <h3>Toast as a service</h3>
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
      <ToastContextProvider anchorOrigin={{horizontal, vertical}}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            margin: '1rem',
          }}
        >
          <SubService1 />
          <SubService2 />
        </div>
      </ToastContextProvider>
    </div>
  )
}

export default ToastAsService
