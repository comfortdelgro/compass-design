import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React, {Key} from 'react'
import Button from '../button/button'
import Dropdown from '../dropdown'
import {Icon} from '../icon'
import {Column} from '../utils/components'
import {useToast} from './hooks/useToast'
import Toast from './index'
import {ToastContextProvider} from './service/toast-context'

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
export const Multiple: React.FC = () => {
  const [horizontal, setHorizontal] = React.useState<
    'center' | 'left' | 'right'
  >('right')
  const [vertical, setVertical] = React.useState<'center' | 'top' | 'bottom'>(
    'top',
  )

  return (
    <Column>
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
        <>
          <SubService1 />
          <SubService2 />
        </>
      </ToastContextProvider>
    </Column>
  )
}

export const Default: React.FC = () => {
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)

  return (
    <Column>
      <h3>Default toast</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsDefaultOpen(true)}>
        Open toast
      </Button>
      <Toast isOpen={isDefaultOpen} handleClose={() => setIsDefaultOpen(false)}>
        <Toast.Icon>
          <Icon icon={faImage} />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Icon icon={faXmark} />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>
    </Column>
  )
}

export const Colors: React.FC = () => {
  const [isInformativeOpen, setIsInformativeOpen] = React.useState(false)
  const [isNeutralOpen, setIsNeutralOpen] = React.useState(false)
  const [isPositiveOpen, setIsPositiveOpen] = React.useState(false)
  const [isNegativeOpen, setIsNegativeOpen] = React.useState(false)

  return (
    <Column>
      <h3>Informative: blue</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsInformativeOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isInformativeOpen}
        handleClose={() => setIsInformativeOpen(false)}
        color='informative'
      >
        <Toast.Icon>
          <Icon icon={faImage} />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Icon icon={faXmark} />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>

      <h3>Neutral: white</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsNeutralOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isNeutralOpen}
        handleClose={() => setIsNeutralOpen(false)}
        color='neutral'
      >
        <Toast.Icon>
          <Icon icon={faImage} />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Icon icon={faXmark} />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>

      <h3>Negative: red</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsNegativeOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isNegativeOpen}
        handleClose={() => setIsNegativeOpen(false)}
        color='negative'
      >
        <Toast.Icon>
          <Icon icon={faImage} />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Icon icon={faXmark} />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>

      <h3>Positive: green</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsPositiveOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isPositiveOpen}
        handleClose={() => setIsPositiveOpen(false)}
        color='positive'
      >
        <Toast.Icon>
          <Icon icon={faImage} />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Icon icon={faXmark} />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>
    </Column>
  )
}

export const AutoClose: React.FC = () => {
  const [isAutoCloseOpen, setIsAutoCloseOpen] = React.useState(false)
  return (
    <Column>
      <h3>Auto-close toast</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsAutoCloseOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isAutoCloseOpen}
        handleClose={() => setIsAutoCloseOpen(false)}
        autoClose={500}
        color='informative'
      >
        <Toast.Icon>
          <Icon icon={faImage} />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Icon icon={faXmark} />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>
    </Column>
  )
}

export const Portal: React.FC = () => {
  const [isAutoCloseOpen, setIsAutoCloseOpen] = React.useState(false)
  return (
    <Column>
      <h3>Portals to body</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsAutoCloseOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isAutoCloseOpen}
        portalTo={document.body}
        handleClose={() => setIsAutoCloseOpen(false)}
        color='informative'
      >
        <Toast.Icon>
          <Icon icon={faImage} />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Icon icon={faXmark} />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>
    </Column>
  )
}
